import React from 'react';

function Game({key, game}) {
    return (
        <div>
            <div key={key}>
                <p>{game.date}</p>
            </div>

        </div>
    );
}

export default Game;