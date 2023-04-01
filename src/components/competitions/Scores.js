import React from 'react';
import {Link} from "react-router-dom";

function Scores(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="score/team">조별 점수표</Link>
                </li>
                <li>
                    <Link to="score/wins">대회 점수표</Link>
                </li>
            </ul>
        </div>
    );
}

export default Scores;