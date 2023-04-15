import React, {useState} from 'react';
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import MainMenu from "./MainMenu";
import {useSelector} from "react-redux";

function Header() {
    const { isLoggedIn } = useSelector(state => state);
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
                <div className="in_nav_center inline-block" >
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
                {isLoggedIn &&
                  <div className="in_nav_center float-right inline-block">{user.name} 님</div>
                }

                <MainMenu closeMenu={closeMenu} open={open}/>

            </div>
        </>
    );
}

export default Header;