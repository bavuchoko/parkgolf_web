import React, {useState} from 'react';
import menu from '../../assets/icons/menu.png'
import close from '../../assets/icons/close.png'
import MainMenu from "./MainMenu";

function Header(props) {
    const [open, setOpen]=useState(false);

    const openHandler = () =>{
        setOpen(!open)
    }

    return (
        <>
            <div className="w-full h-[60px] nav-bar">
                <div className="iamge-center" >
                    {open ?
                        <>
                            <button onClick={openHandler}>
                                <img className="w-6 h-6 " alt="menu" src={close}/>
                            </button>
                        </>
                        :
                        <button  onClick={openHandler}>
                            <img className="w-8 h-8 " alt="menu" src={menu}/>
                        </button>
                    }
                </div>

                {open &&
                    <MainMenu/>
                }
            </div>
        </>
    );
}

export default Header;