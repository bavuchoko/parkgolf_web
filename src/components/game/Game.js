import React from 'react';

function Game({game}) {
    return (
        <div>
            <div key={game.id}>
                <p>{game.date}</p>
            </div>

        </div>
    );
}

export default Game;