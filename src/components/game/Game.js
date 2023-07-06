import React from 'react';
import styled from "styled-components";
import RightArrow from "../../assets/icons/draw-right-arrow.png"
import LeftArrow from "../../assets/icons/draw-left-arrow.png"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Day = styled.p`
  font-size: 16px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 50%;
  color: white;
  text-align: center;
  width: 24px;
  background-color: ${({day}) => (day === "일" ? '#e15b5b' : (day === "토" ? '#4f7fc9' : '#464646'))};
`;

function getRandomColor() {
    const colors = ['#eada5c', '#58dbf3', '#ef6aac', '#6def68']; // 원하는 색상을 여기에 추가
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function Game({game}) {

    const handleEnrollClick = () => {

    }

    const randomColor = getRandomColor();
    const pStyle = {
        background: `linear-gradient(to top, ${randomColor} 65%, transparent 65%)`,
    };
    return (

        <div className="cardDiv " key={game.id}>
            <div className="cardDiv-upper">
                <div>
                    <p className="rem_1-1 inline-block weight-900 card-title" style={pStyle}>
                        {game.title.length <= 26 ? game.title : `${game.title.slice(0, 23)}...`}
                    </p>
                </div>
                    <p className="mt-2 mb-2 rem_1">{game.fields.address.slice(0,22)}</p>
                <div className="card-info flex">
                    <div className="player-count-txt">
                        <p className="rem_0-9">참가자</p>
                        <div>
                            <p className="player-count"> {game.playerCount}
                                {/*<span className="text-[17px]">명</span>*/}
                            </p>
                        </div>
                    </div>
                    <div className="slicer-vertical">
                    </div>
                    <div className="ml-[25px]">
                        <p className="rem_0-9">간략 정보</p>
                        <div>
                            <Day className="weight-900" day={game.dayKor}>{game.dayKor}</Day>
                            <p className="text-[16px] inline-block ml-3 mr-3">{game.playDate.slice(5,10) }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="slicer-horizon"></div>
            <div className="cardDiv-lower ">
                <div className="cardDiv-lower-detail ">
                    <div className="left">
                        <Link to= '/games/view'
                            state= {{
                                open : true,
                                id : game.id
                            }}
                        >
                        <img src={LeftArrow} className="w-[20px] h-[20px] inline-block"/>
                         <button className="inline-block rem_0-8 mr-2">상세보기</button>
                        </Link>
                    </div>
                    <div className="right">
                        <button className="inline-block rem_0-8 ml-2" onClick={handleEnrollClick}>참가하기</button>
                        <img src={RightArrow} className="w-[20px] h-[20px] inline-block"/>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default React.memo(Game);