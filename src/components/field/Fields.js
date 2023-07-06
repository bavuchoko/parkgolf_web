import React, {forwardRef, useState} from 'react';

import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {getFieldList} from "../../apis/field/FieldService";

import '../../utils_css.css';
import {useQuery} from "react-query";
import Loading from "../../hooks/Loading";
import Error_500 from "../errors/Error_500";
import Empty from "../../assets/icons/empty.png";
import Field from "./Field";

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
    const [city,setCity] =useState(null)
    
    const { isLoading, error, data } = useQuery(['fileds', city],
        () => getFieldList(city)
    );

    
    return (

        <div className="px-2 ">
            <div className="tag_icon_box top-80">
                <Link to='/fields/create'><span className="tag_icon">필드등록</span></Link>
            </div>

            {isLoading ? (
                <>
                    <Loading />
                </>
            ) : error ? (
                <Error_500/>
            ) : data.data._embedded  ? (
                <div>
                    {data.data._embedded.fieldsList.map(field => (
                        <Field key={field.id} field={field}/>
                    ))}
                </div>
            ) : (

                <div className="fieldListDiv list-error">
                    <img src={Empty} className="rounded-full block m0auto pt-4 w-1/2 h-1/2"  />
                    <p>조회결과가 없습니다.</p>
                </div>
            )
            }
        </div>

    );
}

export default Fields;