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
       localStorage.setItem('accessToken',response.data.accessToken);
        const user ={
            "name":response.data.name,
            "birth":response.data.birth,
            "joinDate":response.data.joinDate,
            "gender":response.data.gender,
            "success":true
        }
        localStorage.setItem('user',user);
        return user;
    } else {
        throw new Error('로그인 실패');
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

export {setToken,getToken, removeToken, fetchIsLoggedIn, useLogin,isAuthenticated };