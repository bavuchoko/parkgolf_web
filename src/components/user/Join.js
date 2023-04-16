import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {userJoin} from "../../apis/auth/AuthService";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../redusx/store/store";


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
function Join() {
    const navigate = useNavigate();
    const [number,setNumber] =useState("");
    const [password, setPassword]=useState("");
    const [passwordConfirm, setPasswordConfirm]=useState("");
    const [birth7, setBirth7]=useState("");
    const [birth7Exact, setBirth7Exact]=useState("");
    const [message, setMessage]=useState(" ");
    const [isPhone, setIsPhone]=useState(false);
    const [isPassLength, setIsPassLength]=useState(false);
    const [passExact, setPassExact]=useState(false);
    const phoneRegEx = /^010[0-9]{8}$/;
    const birthRegEx = /^([4-9][5-9]|[0-1][0-9])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[12]$/;
    ;


    const typeNumber = (e) =>{
        setNumber(e.target.value)
    }
    const typePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value === passwordConfirm){
            setPassExact(true);
        }else {
            setPassExact(false);
        }
    }
    const typePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
            console.log(e.target.value)
        if(e.target.value === password){
            setPassExact(true);
        }else {
            setPassExact(false);
        }

    }


    const typeBirth7 = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        const sixDigits = inputValue.slice(0, 6);
        const oneDigit = inputValue.slice(6, 7);
        let formattedValue =inputValue;
        if(inputValue.length>6){
            formattedValue = `${sixDigits}-${oneDigit}`;
        }
        setBirth7(formattedValue);

        if (isPhone && isPassLength && !birthRegEx.test(formattedValue)) {
            setMessage("생년월일-성별 형식으로 입력하세요")
            setBirth7Exact(false);
        }else if(isPhone && isPassLength && birthRegEx.test(formattedValue)){
            setMessage("가입하기")
            setBirth7Exact(true);
        }
    }



    const dispatch = useDispatch();
    async function handleJoin() {
        const user = {
            "username": number,
            "password": password
        }
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const loginUser = await userJoin(user);
            if (loginUser.success) {
                console.log(loginUser)
                dispatch(loginSuccess(loginUser));
                navigate(-1)
            } else {
                alert("회원가입실패 실패");
            }
        } catch (error) {
            console.error(error);
            alert("회원가입에 실패하였습니다.");

        }
    }

    const notAllowed = () =>{
        alert("입력 필드를 완성하세요");
    }

    useEffect(() => {

        if (number.length < 11) {
            setMessage("휴대폰번호는 11자리 입니다.");
            setIsPhone(false)
        } else if (number.length >= 11) {
            setMessage(" - ");
            if (phoneRegEx.test(number)) {
                setMessage(" - ");
                setIsPhone(true)
            } else {
                setIsPhone(false)
                setMessage("휴대폰번호 형식에 맞지 않습니다.");
            }
        }
        if(isPhone) {
            if (password.length > 0) {
                setIsPassLength(true)
            } else {
                setIsPassLength(false)
                setMessage("비밀번호를 입력하세요")
            }
            if(isPassLength) {
                if (!passExact) {
                    setMessage("비밀번호 확인이 일치하지 않습니다.")
                } else {
                    setMessage("-")
                }
            }else{
                setPassExact(false);
                setBirth7Exact(false);
            }
        }else{
            setIsPassLength(false);
            setPassExact(false);
            setBirth7Exact(false);
        }
        console.log(passExact)
    }, [isPhone, number, password,passwordConfirm]);


    return (



        <div className="authmain">
            <p className="loginmessage">
                {message}
            </p>
            <h2 className="pt-[10px]">회원가입</h2>
            <InputBox type="number" placeholder="전화번호"
                      value={number}
                      onChange={typeNumber}
            />
            <InputBox type="password" placeholder="비밀번호"
                      value={password}
                      onChange={typePassword}
            />

            <InputBox type="password" placeholder="비밀번호 확인"
                      value={passwordConfirm}
                      onChange={typePasswordConfirm}
            />
            <InputBox type="text" placeholder="주민등록 앞 7자리"
                      value={birth7}
                      onChange={typeBirth7}
            />
            {
                isPhone && isPassLength && passExact && birth7Exact ?
            <button className="joinbtn join_Y" onClick={handleJoin}>제출</button>
                :
            <button className="joinbtn join_N" onClick={notAllowed}>제출</button>
            }
            <Link to="/"><span className="text-[24px] contactmeback inline-block"><FontAwesomeIcon icon={faArrowLeft}  /> 홈으로</span></Link>
        </div>
    );
}
export default Join;