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

import Auth from "./components/auth/Auth";

import {QueryClient, QueryClientProvider} from "react-query";
import PrivateRoute from "./components/auth/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<PrivateRoute element={<App />} />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/main/enroll" element={<Enroll/>}/>
                    <Route path="/main/open" element={<Open/>}/>
                    <Route path="/main/field" element={<FieldMain/>}/>
                    <Route path="/main/field/registration" element={<RegisterField/>}/>
                </Route>
                <Route path="score" element={<Scores/>}/>

            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
reportWebVitals();