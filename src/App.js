import React, {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Main from "./components/main/Main";
import Auth from "./components/auth/Auth";
import Ranks from "./components/rank/Ranks";
import Games from "./components/game/Games";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/rank" element={<Ranks />} />
                    <Route path="/games" element={<Games />} />
                </Route>
                <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </Router>
    );
}

export default App;
