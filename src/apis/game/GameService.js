import {needAuthApi, noAuhApi} from "../instance/Instance";

async function createGame(game) {
    const response = await needAuthApi.post('/game/create', game);
    if (response.status === 200) {
        return response.status;
    } else {
        const error = new Error('생성 실패');
        throw error;
    }
}

async function getGameList(startDate, endDate) {
    const response = await noAuhApi.get('/game',
        { params: { startDate: startDate, endDate: endDate } }
    );
    if (response.status === 200) {
        console.log(response)
        return response;
    }else {
        const error = new Error('조회 실패');
        throw error;
    }

}
export {createGame, getGameList};