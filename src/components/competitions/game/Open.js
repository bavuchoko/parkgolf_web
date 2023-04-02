import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {noAuhApi} from "../../../apis/instance/Instance";
import {useQuery} from "react-query";


const FieldInput = styled.input`
  display: block;
  margin: 0 auto;
  border: 1px solid black;
`;
function Open(props) {

    const { isLoading: isLoadingGames, data: games } = useQuery('games', async () => {
        const response = await noAuhApi.get('/game');
        return response.data;
    });

    if (isLoadingGames) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <button>경기 생성하기</button>
            <ul>
                {games.map(match => (
                    <li className="fieldsList" key={match.id}>{match.subject}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default Open;