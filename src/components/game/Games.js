import React, {forwardRef, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import Game from "./Game";
import golf from "../../assets/icons/golf.png"
import circles3 from "../../assets/icons/Circles-menu-3.gif"
import left from "../../assets/icons/left-arrow.png"
import waiting from "../../assets/icons/waiting.gif"
import Play from "./Play";
import {Link} from "react-router-dom";

function Games(props) {
    const oneWeekAgo = new Date();
    const oneWeekAfter = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    oneWeekAfter.setDate(oneWeekAfter.getDate() + 7);
    const [startDate, setStartDate] = useState(oneWeekAgo);
    const [endDate, setEndDate] = useState(oneWeekAfter);

    const [games, setGames] = useState([]);

    const dummyGames = [
        {
            "id":1,
            "date" : "2023-04-13",
            "address" : "세종시 장군면 정계길 세종시 장군면 정계길",
            "playerCount" : 42,
            "hole":18,
            "day":"목",
            "detail":"월례 시니어 대회",
            "player":[
                {"username":"01028160001", "name":"테스트1" ,"joinDate":"2023-04-13" },
                {"username":"01028160002", "name":"테스트2", "joinDate":"2023-04-13"},
                {"username":"01028160003", "name":"테스트3", "joinDate":"2023-04-13"}
            ]
        },
        {
            "id":2,
            "date" : "2023-04-16",
            "address" : "세종시 부강면 신사리",
            "playerCount" : 38,
            "hole":9,
            "day":"일",
            "detail":"주간 정기 연습",
            "player":[
                {"username":"01028160004", "name":"테스트4" ,"joinDate":"2023-04-13" },
                {"username":"01028160005", "name":"테스트5", "joinDate":"2023-04-13"},
                {"username":"01028160006", "name":"테스트6", "joinDate":"2023-04-13"}
            ]
        }
    ]


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

    useEffect(() => {
    }, [games]);

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



            <div className="gameListDiv">
                {dummyGames.map( game => (
                    <Game key={game.id} game={game} />
                ))}
            </div>

        </div>
    );
}

export default Games;