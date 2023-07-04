import React from 'react';
import '../../utils_css.css';
function GameView({open}) {
    return (
        <div className={`slideMenu-left ${open ? 'show-left' : ''}`}>

        </div>
    );
}

export default GameView;