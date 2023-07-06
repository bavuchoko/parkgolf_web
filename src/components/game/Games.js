import React, {forwardRef, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import Loading from "../../hooks/Loading";
import Empty from "../../assets/icons/empty.png";
import Game from "./Game";
import {useQuery} from "react-query";
import {getGameList} from "../../apis/game/GameService";
import useScrollHeight from "../../hooks/UseScrollHeight";
import Error_500 from "../errors/Error_500";
import {Link} from "react-router-dom";

function Games() {

    const scrollHeight = useScrollHeight();

    const oneWeekAgo = new Date();
    const oneWeekAfter = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    oneWeekAfter.setDate(oneWeekAfter.getDate() + 7);
    const [startDate, setStartDate] = useState(oneWeekAgo);
    const [endDate, setEndDate] = useState(oneWeekAfter);


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
        <>
            {/*<div className={scrollHeight >= 60 ? 'dateSeletor rem_1 shadow-bottom-div white' : 'dateSeletor gray'}>*/}
            <div className={scrollHeight >= 60 ? 'dateSeletor rem_1 shadow-bottom-div white' : 'dateSeletor white'}>
                <div className="periodDivFlex justify-center">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => handleStartDateChange(date)}
                        dateFormat="yyyy / MM / dd"
                        locale={ko}
                        withPortal
                        portalId="root-portal"
                        customInput={<ExampleCustomInput1 />}
                    />
                    <span className="ml-2 mr-2">~</span>
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
            </div>
            <div className="tag_icon_box top-160">
                <Link to='/games/create'><span className="tag_icon">경기등록</span></Link>
                <Link to='/fields'><span className="tag_icon">필드</span></Link>
            </div>
            <div className={scrollHeight >= 60 ? 'px-[20px] pt-[160px] grayer' : 'px-[20px] pt-[160px]' }>
                {isLoading ? (
                    <>
                        <Loading />
                    </>
                ) : error ? (
                    <Error_500/>
                ) : data.data._embedded  ? (
                    <div className={scrollHeight >= 60 ? 'gameListDiv grayer z-50 relative' : 'gameListDiv white z-50 relative' }>
                        {data.data._embedded.gameList.map(game => (
                            <Game key={game.id} game={game}/>
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
        </>
    );
}

export default Games;