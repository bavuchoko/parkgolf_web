import { Navigate } from 'react-router-dom';
import { fetchIsLoggedIn } from "../../apis/auth/AuthService";
import {useEffect, useState} from "react";

function PrivateRoute({ path, element }) {
    const [user, setUser] = useState(false);
    useEffect(() => {
        async function checkLoggedIn() {
            const isLoggedIn = await fetchIsLoggedIn();
            setUser(isLoggedIn);
        }
        checkLoggedIn();
    }, []);

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return element;
}

export default PrivateRoute;