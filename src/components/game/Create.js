import React, {forwardRef, useState} from 'react';
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../../redusx/store/store";
import {createGame} from "../../apis/game/GameService";

const InputBox = styled.input`
  border-radius: 0;
  outline: none;
  display: block;
  margin: 0 auto;
  border-bottom: 3px solid black;
  text-indent: 15px;
  width: 90%;
  height: 40px;
  font-size: 21px;
  letter-spacing:1px;
  margin-bottom: 40px;
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
function Create(props) {
    const now = new Date();
    const [startDate, setStartDate] = useState(now);
    const [address, setAddress] = useState("");
    const [detail, setDetail] = useState("");
    const navigate = useNavigate();
    const handleStartDateChange = date => {
        if (date <= now) {
            alert("과거일의 경기를 생성할 수 없습니다.");
            return;
        }
        setStartDate(date);
    };
    const ExampleCustomInput1 = forwardRef(({ value, onClick }, ref) => (
        <button className="monthPicker" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    const handelAddressInput =(e)=> {
        setAddress(e.target.value);
    }
    const handelDetailTextArea =(e)=> {
        setDetail(e.target.value);
    }
    const goback =()=> {
        navigate(-1);
    }
    const saveGame =async () => {
        const game = {
            "date": startDate,
            "address": address,
            "detail": detail
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
        <div className="px-5">

            <div className="pt-[30px]">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => handleStartDateChange(date)}
                    dateFormat="yyyy / MM / dd"
                    locale={ko}
                    withPortal
                    portalId="root-portal"
                    customInput={<ExampleCustomInput1 />}
                />
            </div>

            <InputBox type="text" placeholder="경기장 주소"
                      value={address}
                      onChange={handelAddressInput}
            />

            <TextBox type="text" placeholder="상세정보"
                      value={detail}
                      onChange={handelDetailTextArea}
            />

            <button className="text-[22px] ml-[5%] inline-block" onClick={goback}><FontAwesomeIcon icon={faArrowLeft}  /> 뒤로가기</button>
            <button className="saveBtn float-right" onClick={saveGame}>저장</button>

        </div>
    );
}

export default Create;