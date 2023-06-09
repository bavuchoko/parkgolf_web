import { createStore } from 'redux';

// 초기 상태
const initialState = {
    isLoggedIn: false,
    user: null,
};

// 액션 타입 정의
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';

// 액션 생성 함수
export function loginSuccess(user) {
    return { type: LOGIN_SUCCESS, user };
}

export function logout() {
    return { type: LOGOUT };
}

// 리듀서
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: action.user };
        case LOGOUT:
            return { ...state, isLoggedIn: false, user: null };
        default:
            return state;
    }
}

// Redux store 생성
const store = createStore(reducer);
export default store;
