import React, {useState} from 'react';
import styled from "styled-components";
import {needAuthApi, noAuhApi} from "../../../apis/instance/Instance";
import {useNavigate} from "react-router-dom";


const FieldInput = styled.input`
  display: block;
  margin: 0 auto;
  border: 1px solid black;

`;
function RegisterField(props) {

    const [city, setCity] = useState("SEJONG");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [phone, setPhone] = useState("");
    const [contactCrew, setContactCrew] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const addressHanlder =(e) =>{
        setAddress(e.target.value);
    }

    const addressDetailHanlder =(e) =>{
        setAddressDetail(e.target.value);
    }
    const postNumberHanlder =(e) =>{
        setPostNumber(e.target.value);
    }
    const phoneHanlder =(e) =>{
        setPhone(e.target.value);
    }
    const contactCrewHanlder =(e) =>{
        setContactCrew(e.target.value);
    }
    const nameHanlder =(e) =>{
        setName(e.target.value);
    }
    const descriptionHanlder =(e) =>{
        setDescription(e.target.value);
    }



    const submitHandler =() =>{
        const field = {
            "city":"SEJONG",
            "address":address,
            "addressDetail":addressDetail,
            "postNumber":postNumber,
            "phone":phone,
            "contactCrew":contactCrew,
            "name":name,
            "description":description,
            "open":"true"
        }
        try {
            needAuthApi.post(
                '/field', field
            ).then(res => {
                if (res.status === 200) {
                    navigate("/main/field");
                }
            }).catch(error => {
                    if(error.response.status ===400){

                    }
                }
            )
        }
        catch (error){
        }
    }


    return (
        <div>
            <button>경기장 등록하기</button>

            <FieldInput type="text" onChange={nameHanlder} value={name} placeholder="경기장 이름"/>
            <FieldInput type="text" onChange={addressHanlder} value={address} placeholder="주소"/>
            <FieldInput type="text" onChange={addressDetailHanlder} value={addressDetail} placeholder="상세주소"/>
            <FieldInput type="text" onChange={postNumberHanlder} value={postNumber} placeholder="우편번호"/>
            <FieldInput type="text" onChange={contactCrewHanlder} value={contactCrew} placeholder="담당자"/>
            <FieldInput type="text" onChange={phoneHanlder} value={phone} placeholder="연락처"/>
            <FieldInput type="text" onChange={descriptionHanlder} value={description} placeholder="상세"/>

            <button onClick={submitHandler}>저장</button>
        </div>
    );
}

export default RegisterField;