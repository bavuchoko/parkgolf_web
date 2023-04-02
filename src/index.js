import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Scores from "./components/competitions/Scores";
import Enroll from "./components/competitions/game/Enroll";
import Open from "./components/competitions/game/Open";
import FieldMain from "./components/competitions/field/FieldMain";
import RegisterField from "./components/competitions/field/RegisterField";
import Index from "./components/Index";
import Login from "./components/login/Login";
import Main from "./components/Main";

import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<Index/>}/>
                    <Route  path="/main" element={<Main/>}/>
                    <Route path="/main/enroll" element={<Enroll/>}/>
                    <Route path="/main/open" element={<Open/>}/>
                    <Route path="/main/field" element={<FieldMain/>}/>
                    <Route path="/main/field/registration" element={<RegisterField/>}/>
                </Route>
                <Route path="score" element={<Scores/>}/>
                <Route path="login" element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();