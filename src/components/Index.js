import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";



const Loginbt = styled.div`
  margin: 0 auto;
  margin-top: 30vh;
  width: 300px;
  border-radius: 8px;
  height: 80px;
  background-color: #19ce60;
  color: white;
  text-align: center;
  font-size: 40px;
  padding-top: 10px;
`;

function Index(props) {
    return (
        <div>
            <Link to="/login">
            <Loginbt className="m-0 m-auto">
                <button className="">로그인</button>
            </Loginbt>
            </Link>
        </div>
    );
}

export default Index;