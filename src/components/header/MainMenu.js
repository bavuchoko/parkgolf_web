import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redusx/store/store";

function MainMenu({closeMenu,open}) {
    const { isLoggedIn } = useSelector(state => state);
    const dispatch = useDispatch();

    function handleLogout() {
        closeMenu()
        // Redux store의 상태를 초기화한다
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loginUser");
        dispatch(logout());
    }
    return (
        <div className={`slideMenu ${open ? 'show' : ''}`}>
            <ul className="dropLi">
               <Link to="/" onClick={closeMenu}><li>홈으로</li></Link>
               <Link to="/rank" onClick={closeMenu}><li>월간랭킹</li></Link>
               <Link to="/history" onClick={closeMenu}><li>경기기록</li></Link>
               <Link to="/games" onClick={closeMenu}><li>일정보기</li></Link>
                {isLoggedIn &&
                    <Link to="/user" onClick={closeMenu}><li>개인기록</li></Link>
                }
               <Link to="/" ><li>문의하기</li></Link>

                {isLoggedIn ?
                    <Link to="/" onClick={handleLogout}><button className="loginoutBtn logoutbtn">로그아웃</button></Link>
                    :
                    <Link to="/login" onClick={closeMenu}><button className="loginoutBtn loginbtn">로그인</button></Link>
                }
            </ul>
        </div>
    );
}

export default MainMenu;
