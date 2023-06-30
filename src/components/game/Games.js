import React, {forwardRef, useState} from 'react';
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import Loading from "../../assets/gif/loading-red-dot.gif";
import Empty from "../../assets/icons/empty.png";
import Game from "./Game";
import {useQuery} from "react-query";
import {getGameList} from "../../apis/game/GameService";
import InternalServerError from "../errors/Internal_Server_Error";

function Games(props) {
    const oneWeekAgo = new Date();
    const oneWeekAfter = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    oneWeekAfter.setDate(oneWeekAfter.getDate() + 7);
    const [startDate, setStartDate] = useState(oneWeekAgo);
    const [endDate, setEndDate] = useState(oneWeekAfter);
    const [message, setMessage] = useState("oneWeekAfter");


    const { isLoading, error, data } = useQuery(['game',startDate,endDate],
        () => getGameList(startDate,endDate)
    );

    const ExampleCustomInput1 = forwardRef(({ value, onClick }, ref) => (
        <button className="datePeridoPicker" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    const ExampleCustomInput2 = forwardRef(({ value, onClick }, ref) => (
        <button className="datePeridoPicker" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    function getRandomColor() {
        // const letters = '0123456789ABCDEF';
        // let color = '#';
        // for (let i = 0; i < 6; i++) {
        //     color += letters[Math.floor(Math.random() * 16)];
        // }
        // return color;
        const colors = ['#eada5c', '#58dbf3', '#ef6aac', '#6def68']; // 원하는 색상을 여기에 추가
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const handleStartDateChange = date => {
        if (endDate && date > endDate) {
            alert("검색시작일은 검색종료일보다\n이전이어야 합니다.");
            return;
        }
        setStartDate(date);
    };

    const handleEndDateChange = date => {
        if (startDate && date < startDate) {
            alert("검색종료일은 검색시작일\n이후여야 합니다.");
            return;
        }
        setEndDate(date);
    };

    return (
        <div className="px-5">
            <div className="periodDivFlex justify-center">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => handleStartDateChange(date)}
                    dateFormat="yyyy / MM / dd"
                    locale={ko}
                    withPortal
                    portalId="root-portal"
                    customInput={<ExampleCustomInput1 />}
                />~
                <DatePicker
                    selected={endDate}
                    onChange={(date) => handleEndDateChange(date)}
                    dateFormat="yyyy / MM / dd"
                    locale={ko}
                    withPortal
                    portalId="root-portal"
                    customInput={<ExampleCustomInput2 />}
                />
            </div>

            {isLoading ? (
                <>
                {/*<div className="modal-back "></div>*/}
                <img src={Loading} className="rounded-full block m0auto pt-4 w-1/2 h-1/2"  />
                </>
            ) : error ? (
                <InternalServerError/>
            ) : data.data._embedded  ? (
                <div className="gameListDiv">
                    {data.data._embedded.gameList.map(game => (
                        <Game key={game.id} game={game} getRandomColor={getRandomColor}/>
                    ))}
                </div>
            ) : (

                <div className="gameListDiv list-error">
                    <img src={Empty} className="rounded-full block m0auto pt-4 w-1/2 h-1/2"  />
                    <p>조회결과가 없습니다.</p>
                </div>
            )

            }

        </div>
    );
}

export default Games;