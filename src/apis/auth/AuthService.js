import {useMutation, useQueryClient} from 'react-query';
import {noAuhApi} from "../instance/Instance";
import {useNavigate} from "react-router-dom";

async function fetchIsLoggedIn() {
    const authToken = localStorage.getItem('accessToken');
    if (authToken) {
        return true;
    }
    return false;
}
async function useLogin(loginUser) {
    const response = await noAuhApi.post('/user/authentication', loginUser);
    if (response.status === 200) {
       localStorage.setItem('accessToken',response.data.accessToken);
    } else {
        throw new Error('로그인 실패');
    }

    console.log(response)
    console.log(response.data)
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