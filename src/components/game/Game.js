import React from 'react';
import styled from "styled-components";
import members from '../../assets/icons/members.png'

const Day = styled.span`
  font-size: 18px;
  display: inline-block;
  border-radius: 50%;
  color: white;
  text-align: center;
  width: 27px;
  background-color: ${({day}) => (day === "일" ? '#e15b5b' : (day === "토" ? '#4f7fc9' : '#bebebe'))};
`;

function Game({game}) {
    return (
        <div>
            <div className="gameDiv shadow-xl" key={game.id}>
                <Day className="weight-900" day={game.day}>{game.day}</Day>
                <span className="text-[17px] inline-block ml-3 weight-900">{game.date.slice(5,10) }</span>
                <span className="text-[17px] inline-block float-right mt-1.5 ml-1"> {game.playerCount}</span>
                <img className="w-4 h-4 inline-block float-right mt-2.5" src={members}/>
                <p className="mt-2 mb-2 text-[20px] weight-900">{game.address}</p>
                <p className="text-[18px] ">{game.detail}</p>
            </div>

        </div>
    );
}

export default Game;