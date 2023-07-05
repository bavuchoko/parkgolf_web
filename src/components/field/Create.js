import React, {forwardRef, useState} from 'react';

import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {useNavigate} from "react-router-dom";
import {createField} from "../../apis/field/FieldService";
import DaumPostcode from 'react-daum-postcode';
import '../../utils_css.css';

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
  margin-left: 20px;
  border-bottom: 3px solid black;
  width: 10%;
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

function Fields() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [holes, setHoles] = useState("");
    const [detail, setDetail] = useState("");
    const navigate = useNavigate();
    const [openPostcode, setOpenPostcode] = useState(false);
    const modalBack = {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top:'0px',
        zIndex:'998',
        background:'rgba(33,33,33,0.9)',
        left:'0%',
        display: openPostcode ? 'block' : 'none',
    };
    const postCodeStyle = {
        width: '80%',
        height: '400px',
        position: 'fixed',
        top:'60px',
        zIndex:'999',
        left:'10%',
    }; // 스타일 정의 code
    const handle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },

        // 주소 선택 이벤트
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setOpenPostcode(false);
            setAddress(data.address)
        },
    }
    const handleModalOff =(e)=> {
        setOpenPostcode(false);
    }
    const handelNameInput =(e)=> {
        setName(e.target.value);
    }
    const handelHolesInput =(e)=> {
        setHoles(e.target.value);
    }
    const handelEtcTextArea =(e)=> {
        setDetail(e.target.value);
    }
    const goback =()=> {
        navigate(-1);
    }
    const saveField =async () => {
        const field = {
            "name":name,
            "address": address,
            "holes": holes,
            "detail": detail
        }
        try {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const status = await createField(field);
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
            <div style={modalBack} onClick={handleModalOff}></div>
            {openPostcode &&
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                    autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                    defaultQuery='세종특별자치시' // 팝업을 열때 기본적으로 입력되는 검색어
                />
            }

            <InputBox type="text" placeholder="경기장명"
                      value={name}
                      onChange={handelNameInput}
            />

            <InputBox type="text" placeholder="주소"
                      value={address}
                      onClick={handle.clickButton}
                      readOnly
                      // onChange={handelAddressInput}
            />

            <InputCount type="number" placeholder="홀"
                      value={holes}
                      onChange={handelHolesInput}
            />


            <TextBox type="text" placeholder="상세정보"
                     value={detail}
                     onChange={handelEtcTextArea}
            />
            <button className="text-[22px] ml-[5%] inline-block" onClick={goback}><FontAwesomeIcon icon={faArrowLeft}  /> 뒤로가기</button>
            <button className="saveBtn float-right" onClick={saveField}>저장</button>

        </div>
    );
}

export default Fields;