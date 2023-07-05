import React, {useState} from 'react';
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import MainMenu from "./MainMenu";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import {tokenVaildation} from "../../apis/auth/AuthService";
import {loginSuccess, logout, setGray} from "../../redusx/store/store";
import useScrollHeight from "../../hooks/UseScrollHeight";
import {Link} from "react-router-dom";


function Header() {
    const scrollHeight = useScrollHeight();
    // 토큰이 있는경우 토큰의 유효성을 검증하고 토큰이 유효하지 않으면 로그아웃 시키는 로직
    const { isLoggedIn } = useSelector(state => state);
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery('menus', tokenVaildation,{
        onError: (error) => {
            alert("세션이 종료되어 로그아웃되었습니다.")
            dispatch(logout());
        },
        onSuccess: (data) => {
            if (!data) {
            }else{}
        },
    });
    ///////////////////////////////////////////////////////////////////////////

    const [open, setOpen]=useState(false)
    const user = useSelector(state => state.user);
    const gray = useSelector((state) => state.gray);
    const openHandler = () =>{
        if(open) document.body.style.removeProperty('overflow');
        else document.body.style.overflow = 'hidden';
        setOpen(!open)
        setGray(!gray)
    }
    const closeMenu = () =>{
        setOpen(false)
        dispatch(setGray(false));
        document.body.style.removeProperty('overflow');
    }

    return (
        <div className="h-[50px]">
                <div className={scrollHeight >= 60 ? 'w-full nav-bar white' : 'w-full nav-bar white'}>

                <Link to="/"> <span className="in_nav_center inline-block weight-900 text-shadow" >SEJONG</span></Link>

                <div className="in_nav_center inline-block float-right" >
                    {open ?
                        <>
                            <button onClick={openHandler}>
                                <img className="w-7 h-7 " alt="menu" src={close}/>
                            </button>
                        </>
                        :
                        <button  onClick={openHandler}>
                            <img className="w-7 h-7 " alt="menu" src={menu}/>
                        </button>
                    }
                </div>

                <MainMenu closeMenu={closeMenu} open={open}/>
                {isLoggedIn &&
                    <div className="in_nav_center rem_1-1 float-right inline-block">{user.name} 님</div>
                }
            </div>
        </div>
    );
}

export default Header;