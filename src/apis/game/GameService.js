import {needAuthApi, noAuhApi} from "../instance/Instance";

async function createGame(game) {
    const response = await needAuthApi.post('/game/create', game);
    if (response.status === 200) {
        return response.status;
    } else {
        const error = new Error('로그인 실패');
        throw error; // 응답 코드가 400인 경우, 예외를 발생시킵니다.
    }
}


export {createGame};