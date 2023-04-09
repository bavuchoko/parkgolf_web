import { createStore } from 'redux';

const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setLoggedIn = (isLoggedIn) => ({
    type: SET_LOGGED_IN,
    isLoggedIn,
});

const initialState = {
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
