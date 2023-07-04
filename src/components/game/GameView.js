import React, {useEffect, useRef, useState} from 'react';
import '../../utils_css.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import {getGameInfo} from "../../apis/game/GameService";
import Loading from "../../hooks/Loading";
import Error_500 from "../errors/Error_500";
import Game from "./Game";
import Empty from "../../assets/icons/empty.png";
function GameView() {
    const location = useLocation();
    const [open, setOpen] =useState(false)
    const [gameId, setGameId] =useState(location.state.id)
    const divRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                if (open) {
                    setOpen(false);
                    setTimeout(() => {
                        navigate('/games');
                    }, 150);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open, navigate]);

    useEffect(() => {
        if (location.state.open) {
            setOpen(true);
            setGameId(location.state.id)
        }
    }, [location.state.open]);



    const { isLoading, error, data } = useQuery(['game',gameId],
        () => getGameInfo(gameId)
    );



    return (
        <div ref={divRef} className={`slideMenu-left ${ open? 'show-left' : ''}`}>
            {isLoading ? (
                <>
                    <Loading />
                </>
            ) : error ? (
                <Error_500/>
            ) : (

                <div>
                    <p>
                        제목 :
                        {data.title}
                    </p>

                    <p>
                        요일 :
                        {data.dayKor}
                    </p>
                    <p>
                        등록자 :
                        {data.opener.name}
                    </p>
                    <p>
                        경기일자 :
                        {data.playDate}
                    </p>
                    <p>
                        상세 :
                        {data.detail}
                    </p>
                    <p>
                        등록일 :
                        {data.createDate}
                    </p>
                    <p>
                        참가자 :
                        {data.playerCount}
                    </p>
                    <p>
                        주소 :
                        {data.address}
                    </p>
                    <p>
                        경기장 명 :
                        {data.address}
                    </p>

                    <p>
                        라운딩 :
                        {data.rounding}
                    </p>
                    <p>
                        홀 :
                        {data.holes}
                    </p>

                    {data._links &&
                        <p>yse</p>
                    }
                </div>

            )

            }
        </div>
    );
}

export default GameView;