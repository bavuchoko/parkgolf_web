import { Navigate } from 'react-router-dom';
import { fetchIsLoggedIn } from "../../apis/auth/AuthService";
import { useEffect, useState } from "react";
import Main from "../main/Main";

function PrivateRoute({ element }) {
    const [user, setUser] = useState(false);
    const [checkingLoggedIn, setCheckingLoggedIn] = useState(true);

    useEffect(() => {
        const fetchLoggedInStatus = async () => {
            const authToken = localStorage.getItem('accessToken');
            if (authToken) {
                setUser(true);
            } else {
                setUser(false);
            }
            const isLoggedIn = await fetchIsLoggedIn();
            setUser(isLoggedIn);
            setCheckingLoggedIn(false);
        };
        fetchLoggedInStatus();
    }, []);

    if (checkingLoggedIn) {
        // 인증 상태를 체크하는 중이면 로딩 스피너 등을 보여줄 수 있습니다.
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return <Main />;
}

export default PrivateRoute;
