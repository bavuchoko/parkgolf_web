import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../header/HEADER";

function Main() {

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