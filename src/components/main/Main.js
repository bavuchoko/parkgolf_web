import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header/HEADER";

function Main(props) {

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="containers">
                <Outlet/>
            </div>
        </>
    );
}

export default Main;