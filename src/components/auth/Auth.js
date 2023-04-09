import React, {useEffect, useState} from 'react';
import styled from "styled-components";





const InputBox = styled.input`
  border-radius: 0;
  outline: none;
  display: block;
  margin: 0 auto;
  border-bottom: 3px solid black;
  text-indent: 15px;
  width: 80%;
  height: 40px;
  font-size: 25px;
  letter-spacing:3px;
  margin-bottom: 40px;
`;
function Auth(props) {
    const [number,setNumber] =useState("");
    const [password, setPassword]=useState("");
    const [message, setMessage]=useState("");
    const [isPhone, setIsPhone]=useState(false);
    const [isPass, setIsPass]=useState(false);
    const phoneRegEx = /^010[0-9]{8}$/;

    
    const typeNumber = (e) =>{
        setNumber(e.target.value)
    }
    const typePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {

        if (number.length < 11) {
            setMessage("휴대폰번호는 11자리 입니다.");
            setIsPhone(false)
        } else if (number.length >= 11) {
            setMessage("로그인");
            if (phoneRegEx.test(number)) {
                setMessage("로그인");
                setIsPhone(true)
            } else {
                setIsPhone(false)
                setMessage("휴대폰번호 형식에 맞지 않습니다.");
            }
        }
        if(isPhone && password.length===0){
            setIsPass(false)
            setMessage("비밀번호를 입력하세요")
        }else{
            setIsPass(true)
        }
    }, [isPhone, number, password]);



    return (
        <div className="authmain">

            {(!isPhone || !isPass) && message && (
                <p className="loginmessage">
                    {message}
                </p>
            )}

            <h2 className="pt-[10px]">로그인</h2>
            <InputBox type="number" placeholder="전화번호"
                      value={number}
                      onChange={typeNumber}
            />
            <InputBox type="password" placeholder="비밀번호"
                      value={password}
                      onChange={typePassword}
            />
            {isPhone && isPass &&
                <button className="loginbtn">
                    로그인
                </button>
            }

            <button className="joinbtn">가입하기</button>
            <p className="contactme">contact : 000-1111-2222</p>
            <p className="contactme">세종파크골프 ASSO</p>
            <p className="contactme">dev email : bavuchoko@naver.com</p>
        </div>
    );
}

export default Auth;