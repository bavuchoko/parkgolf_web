import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {noAuhApi} from "../../../apis/instance/Instance";
import {useQuery} from "react-query";

function FieldMain(props) {

    const { isLoading: isLoadingFields, data: fields } = useQuery('fields', async () => {
        const response = await noAuhApi.get('/field');
        return response.data;
    });
    if (isLoadingFields) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link to="/main/open/registration">경기장 등록하기</Link>
            <ul>
                {fields.map(field => (
                    <li className="fieldsList" key={field.id}>{field.name}</li>
                ))}
            </ul>

        </div>
    );
}

export default FieldMain;
