import {useMutation, useQueryClient} from 'react-query';

async function fetchIsLoggedIn() {
    const authToken = localStorage.getItem('accessToken');
    if (authToken) {
        return true;
    }
    return false;
}

function useLogin(loginUser) {
    return useMutation(async (loginUser) => {
        const response = await fetch('/user/authentication', {
            method: 'POST',
            body: JSON.stringify(loginUser),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('로그인 실패');
        }

        const data = await response.json();
        return data.token;
    });
}

function setToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
}

function getToken() {
    return localStorage.getItem('accessToken');
}

function removeToken() {
    localStorage.removeItem('accessToken');
}
function useLogout() {
    const queryClient = useQueryClient();

    return useMutation(() => {
        removeToken();
        queryClient.invalidateQueries('accessToken');
    });
}

export {setToken,getToken, removeToken, fetchIsLoggedIn, useLogin };