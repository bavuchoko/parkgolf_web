import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Main from "./components/main/Main";
import Auth from "./components/auth/Auth";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/main" element={isLoggedIn ? <Main /> : <Navigate to="/auth" />} />
                <Route path="/auth" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/" element={<Navigate to="/main" />} />
            </Routes>
        </Router>
    );
}

export default App;
