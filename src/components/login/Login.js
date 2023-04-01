import React, {useState} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";





const Loginphone = styled.input`
  margin: 0 auto;
  margin-top: 30vh;
  width: 300px;
  border-radius: 8px;
  border: 1px solid black;
  height: 60px;
  outline: #282c34;
  color: #616060;
  text-align: center;
  font-size: 40px;
  padding-top: 10px;
  display: block;
`;

const LoginPass = styled.input`
  margin: 0 auto;
  margin-top: 5vh;
  width: 300px;
  border-radius: 8px;
  border: 1px solid black;
  height: 60px;
  outline: #282c34;
  color: #616060;
  text-align: center;
  font-size: 40px;
  padding-top: 10px;
  display: block;
`;
const LoginSubmit = styled.button`
  margin: 0 auto;
  margin-top: 10vh;
  width: 300px;
  border-radius: 8px;
  border: 1px solid black;
  height: 60px;
  outline: #282c34;
  color: white;
  background-color: aquamarine;
  text-align: center;
  font-size: 40px;
  display: block;
`;
function Login(props) {
    const [number,setNumber] =useState("");
    const [pass,setPass] =useState("");
    const [numberError,setnumberError] =useState("");

    const typeNumber = (e) =>{
        if(e.target.value.length<11) {
            setnumberError("휴대폰번호는 11자리 입니다.");
        }else if(e.target.value.length>=11){
            setnumberError("");
        }

        setNumber(e.target.value)
    }
    const typePass = (e) =>{
        console.log(e.target.value)

        setPass(e.target.value)
    }
    const navigate = useNavigate();
    const passEnter = (e) =>{
        if (e.key == "Enter") {
            navigate('/main');
        }
    }
    const goMain =() =>{
        navigate('/main');
    }


    return (
        <div>
            <p>로그인하세요</p>
            <Loginphone
                type="number"
                placeholder="휴대폰번호"
                value={number}
                onChange={typeNumber}
            />
       <span className="numberError">     {numberError}</span>
            <LoginPass
                type="number"
                placeholder="비밀번호"
                value={pass}
                onChange={typePass}
                onKeyPress={passEnter}
            />
            <LoginSubmit
              onClick={goMain}
            >확인</LoginSubmit>

        </div>
    );
}

export default Login;