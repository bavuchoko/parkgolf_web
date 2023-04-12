import React, {useState} from 'react';
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import MainMenu from "./MainMenu";

function Header(props) {
    const [open, setOpen]=useState(false);

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
                <div className="in_nav_center float-right inline-block">박종수 님</div>
                {open &&
                    <MainMenu closeMenu={closeMenu}/>
                }
            </div>
        </>
    );
}

export default Header;