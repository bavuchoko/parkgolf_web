import React from 'react';
import styled from "styled-components";
import members from '../../assets/icons/members.png'
import RightArrow from "../../assets/icons/right_arrow.png"


const Day = styled.p`
  font-size: 15px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 50%;
  color: white;
  text-align: center;
  width: 24px;
  background-color: ${({day}) => (day === "일" ? '#e15b5b' : (day === "토" ? '#4f7fc9' : '#464646'))};
`;



function Game({game, getRandomColor}) {
    const randomColor = getRandomColor();
    const pStyle = {
        background: `linear-gradient(to top, ${randomColor} 3%, transparent 60%)`,
    };
    return (

        <div className="gameDiv " key={game.id}>
            <div className="gameDiv-upper">
                <div>
                    <span className="text-[16px] inline-block weight-900 mt-1.5 ml-1 game-title" style={pStyle}>
                        {game.title.length <= 28 ? game.title : `${game.title.slice(0, 25)}...`}
                    </span>
                    {/*<img className="w-4 h-4 inline-block float-right mt-2.5" src={members}/>*/}
                </div>
                    <p className="mt-2 mb-2 text-[14px]">{game.address.slice(0,22)}</p>
                <div className="game-info flex">
                    <div className="player-count-txt">
                        <p className="text-[14px]">참가자</p>
                        <div>
                            <p className="player-count"> {game.playerCount}
                                {/*<span className="text-[17px]">명</span>*/}
                            </p>
                        </div>
                    </div>
                    <div className="slicer-vertical">
                    </div>
                    <div className="ml-[25px]">
                        <p className="text-[14px]">간략 정보</p>
                        <div>
                            <Day className="weight-900" day={game.dayKor}>{game.dayKor}</Day>
                            <p className="text-[15px] inline-block ml-3 mr-3">{game.playDate.slice(5,10) }</p>
                        </div>
                    </div>
                </div>
                {/*<button className="w-1/4 game-detail mt-2 inline-block  mr-3" >상세정보</button>*/}
                {/*<button className="w-1/4 enroll-btn mt-2 inline-block" >참가</button>*/}
            </div>
            <div className="slicer-horizon"></div>
            <div className="gameDiv-lower ">
                <div className="gameDiv-lower-detail">
                    <span className="inline-block text-[14px] mr-2">상세보기</span>
                    <img src={RightArrow} className="w-1/5 h-1/5 inline-block"/>
                </div>
            </div>


        </div>

    );
}

export default Game;