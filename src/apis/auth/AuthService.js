import {noAuhApi} from "../instance/Instance";



async function useLogin(loginUser) {
    const response = await noAuhApi.post('/api/user/authentication', loginUser);
    localStorage.removeItem('accessToken');
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
        localStorage.setItem('loginUser',JSON.stringify(user));
        return user;
    } else {
        const error = new Error('로그인 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
}

async function tokenVaildation() {
    const token = localStorage.getItem('accessToken');
    const response = await noAuhApi.post('/api/user/tokenVaildation', token);
    if (response.status === 200) {
        console.log("token validated")
    } else {
        console.log("bbb")
        console.log(response)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('loginUser');
        const error = new Error('토큰 검증 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
}


async function userJoin(loginUser) {
    const response = await noAuhApi.post('/api/user/create', loginUser);
    if (response.status === 200) {
        localStorage.setItem('accessToken',response.data);
    } else {
        const error = new Error('로그인 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
}


export {useLogin,tokenVaildation, userJoin };