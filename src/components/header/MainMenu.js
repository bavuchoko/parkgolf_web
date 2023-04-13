import React from 'react';
import {Link} from "react-router-dom";

function MainMenu({closeMenu}) {
    return (
        <div className="dropmenu">
            <ul className="dropLi">
               <Link to="/" onClick={closeMenu}><li>홈</li></Link>
               <Link to="/rank" onClick={closeMenu}><li>랭킹</li></Link>
               <Link to="/" onClick={closeMenu}><li>기록</li></Link>
               <Link to="/games" onClick={closeMenu}><li>일정보기</li></Link>
               <Link to="/auth" onClick={closeMenu}><li>로그인</li></Link>
               <Link to="/" closeMenu><li>문의하기</li></Link>
            </ul>
        </div>
    );
}

export default MainMenu;
