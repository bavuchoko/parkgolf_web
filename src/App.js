import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import Main from "./components/main/Main";
import Login from "./components/user/Login";
import Ranks from "./components/rank/Ranks";
import {useDispatch, useSelector} from 'react-redux';
import Games from "./components/game/Games";
import {loginSuccess} from "./redusx/store/store";
import Join from "./components/user/Join";
import Create from "./components/game/Create";

function App() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        // localStorage에서 로그인 정보를 가져옴
        const user =JSON.parse(localStorage.getItem('loginUser'));

        const isLoggedIn = localStorage.getItem('isLoggedIn');

        // 가져온 정보를 리덕스에 반영
        if (isLoggedIn && user) {
            dispatch(loginSuccess(user));
            setLoggedInUser(user);
        }
    }, []);


    useEffect(() => {
        // 리덕스 상태가 변경될 때마다 localStorage에 로그인 정보를 업데이트함
        localStorage.setItem('isLoggedIn', isLoggedIn);
        if (loggedInUser) {
            localStorage.setItem('user', loggedInUser);
        }
    }, [isLoggedIn, loggedInUser]);
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/rank" element={<Ranks />} />
                    {/*<Route path="/games" element={<Games />} />*/}
                    <Route path="/games" element={<Games /> } />
                    <Route path="/games/create" element={<Create /> } />
                    <Route path="/history" element={<Create /> } />
                </Route>
                <Route path="/login" element={isLoggedIn ? <Navigate to='/' /> : <Login />} />
                <Route path="/join" element={isLoggedIn ? <Navigate to='/' /> : <Join />} />
            </Routes>
        </Router>

    );
}

export default App;
