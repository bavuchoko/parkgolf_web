import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header/HEADER";

function Main(props) {

    return (
        <div>
            <Header />
            <h1>Main Page</h1>
        </div>
    );
}

export default Main;