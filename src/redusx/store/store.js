import { createStore } from 'redux';

// 초기 상태
const initialState = {
    isLoggedIn: false,
    user: null,
    viewOpen: false
};

// 액션 타입 정의
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';
const VIEW_OPEN = 'VIEW_OPEN';

// 액션 생성 함수
export function loginSuccess(user) {
    return { type: LOGIN_SUCCESS, user };
}

export function logout() {
    return { type: LOGOUT };
}
export const setViewOpen = (viewOpen) => ({
    type: VIEW_OPEN,
    payload: viewOpen,
});
// 리듀서
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: action.user };
        case LOGOUT:
            localStorage.removeItem("accessToken");
            return { ...state, isLoggedIn: false, user: null };
        case VIEW_OPEN:
            return {
                ...state,
                viewOpen: action.payload,
            };
        default:
            return state;
    }
}

// Redux store 생성
const store = createStore(reducer);
export default store;
