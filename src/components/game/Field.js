import React, {forwardRef, useState} from 'react';
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useNavigate} from "react-router-dom";
import {createGame} from "../../apis/game/GameService";


const InputBox = styled.input`
  border-radius: 0;
  outline: none;
  display: block;
  margin: 0 auto;
  border-bottom: 3px solid black;
  text-indent: 15px;
  width: 90%;
  height: 30px;
  font-size: 21px;
  letter-spacing:1px;
  margin-bottom: 30px;
`;


const InputCount = styled.input`
  border-radius: 0;
  outline: none;
  display: block;
  margin: 0 auto;
  border-bottom: 3px solid black;
  width: 15%;
  text-align: center;
  height: 30px;
  font-size: 21px;
  letter-spacing:1px;
  margin-bottom: 30px;
`;

const TextBox = styled.textarea`
  border-radius: 0;
  outline: none;
  display: block;
  margin: 0 auto;
  border: 2px solid black;
  text-indent: 15px;
  width: 90%;
  min-height: 40vh;
  font-size: 20px;
  letter-spacing:1px;
  margin-bottom: 40px;
`;

function Field() {
    const [address, setAddress] = useState("");
    const [holes, setHoles] = useState("");
    const [etc, setEtc] = useState("");
    const navigate = useNavigate();


    const handelAddressInput =(e)=> {
        setAddress(e.target.value);
    }
    const handelHolesInput =(e)=> {
        setHoles(e.target.value);
    }
    const handelEtcTextArea =(e)=> {
        setEtc(e.target.value);
    }
    const goback =()=> {
        navigate(-1);
    }
    const saveGame =async () => {
        const game = {
            "address": address,
            "holes": holes
        }
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const status = await createGame(game);
            if (status==200) {
                console.log("등록성공")
                navigate(-1)
            } else {
                alert("등록 실패");
            }
        } catch (error) {
            console.error(error);
            alert("등록에 실패하였습니다.");

        }
    }

    return (
        <div className="px-2 pt-[50px]">


            <InputBox type="text" placeholder="주소"
                      value={address}
                      onChange={handelAddressInput}
            />

            <InputCount type="number" placeholder="홀"
                      value={holes}
                      onChange={handelHolesInput}
            />


            <TextBox type="text" placeholder="상세정보"
                     value={etc}
                     onChange={handelEtcTextArea}
            />
            <button className="text-[22px] ml-[5%] inline-block" onClick={goback}><FontAwesomeIcon icon={faArrowLeft}  /> 뒤로가기</button>
            <button className="saveBtn float-right" onClick={saveGame}>저장</button>

        </div>
    );
}

export default Field;