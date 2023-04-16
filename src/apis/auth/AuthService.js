import {noAuhApi} from "../instance/Instance";


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
        const user ={
            "name":response.data.name,
            "birth":response.data.birth,
            "joinDate":response.data.joinDate,
            "gender":response.data.gender,
            "success":true,
            "accessToken":response.data.accessToken
        }
        localStorage.setItem('accessToken',response.data.accessToken);
        localStorage.setItem('loginUser',user);
        localStorage.setItem('isLoggedIn',true);
        return user;
    } else {
        const error = new Error('로그인 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
}

async function userJoin(loginUser) {
    const response = await noAuhApi.post('/user/create', loginUser);
    if (response.status === 200) {
        const user ={
            "name":response.data.name,
            "birth":response.data.birth,
            "joinDate":response.data.joinDate,
            "gender":response.data.gender,
            "success":true,
            "accessToken":response.data.accessToken
        }
        localStorage.setItem('accessToken',response.data.accessToken);
        localStorage.setItem('loginUser',user);
        localStorage.setItem('isLoggedIn',true);
        return user;
    } else {
        const error = new Error('로그인 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
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
function isAuthenticated() {
}

export {setToken,getToken, removeToken, fetchIsLoggedIn, useLogin, userJoin, isAuthenticated };