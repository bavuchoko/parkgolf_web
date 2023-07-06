import {needAuthApi, noAuhApi} from "../instance/Instance";

async function createField(game) {
    const response = await needAuthApi.post('/field/create', game);
    if (response.status === 200) {
        return response.status;
    } else {
        const error = new Error('생성 실패');
        throw error;
    }
}

async function getFieldList(city) {
    const response = await noAuhApi.get('/field',
        { params: { city: city} }
    );
    if (response.status === 200) {
        console.log(response)
        return response;
    }else {
        const error = new Error('조회 실패');
        throw error;
    }

}

export {createField, getFieldList};