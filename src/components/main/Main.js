import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function Main(props) {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 로그인 객체가 없으면 로그인 페이지로 리다이렉트
    if (!isAuthenticated) {
        navigate('/auth');
        return null;
    }

    function handleLogout() {
        // 로그아웃 액션 디스패치
        dispatch({ type: 'LOGOUT' });
        navigate('/auth');
    }

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={handleLogout}>Logout</button>
            {/* 내용 */}
        </div>
    );
}

export default Main;