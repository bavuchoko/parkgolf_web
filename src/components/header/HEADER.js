import React, {useState} from 'react';
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import MainMenu from "./MainMenu";
import {useDispatch, useSelector} from "react-redux";
import {useQuery} from "react-query";
import {tokenVaildation} from "../../apis/auth/AuthService";
import {loginSuccess, logout} from "../../redusx/store/store";

function Header() {
    const { isLoggedIn } = useSelector(state => state);
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery('menus', tokenVaildation,{
        onError: (error) => {
            dispatch(logout());
        },
    });
    const [open, setOpen]=useState(false);
    const user = useSelector(state => state.user);
    const openHandler = () =>{
        setOpen(!open)
    }
    const closeMenu = () =>{
        setOpen(false)
    }

    return (
        <>
            <div className="w-full h-[60px] nav-bar">
                <span className="in_nav_center inline-block weight-900 text-shadow" >SEJONG</span>

                <div className="in_nav_center inline-block float-right" >
                    {open ?
                        <>
                            <button onClick={openHandler}>
                                <img className="w-8 h-8 " alt="menu" src={close}/>
                            </button>
                        </>
                        :
                        <button  onClick={openHandler}>
                            <img className="w-8 h-8 " alt="menu" src={menu}/>
                        </button>
                    }
                </div>

                <MainMenu closeMenu={closeMenu} open={open}/>
                {isLoggedIn &&
                    <div className="in_nav_center float-right inline-block">{user.name} 님</div>
                }
            </div>
        </>
    );
}

export default Header;