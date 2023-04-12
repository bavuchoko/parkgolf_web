import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/main/Main";
import Auth from "./components/auth/Auth";
import Rank from "./components/rank/Rank";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route path="/rank" element={<Rank />} />
                </Route>
                <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </Router>
    );
}

export default App;
