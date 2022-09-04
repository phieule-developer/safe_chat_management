// constants
import { ACCESS_TOKEN } from '../../constants';
import { readLocalStorage } from '../../helpers/localStorage';
import { AuthActionTypes } from './constants';

const initialState = {
    isLoggedIn: readLocalStorage(ACCESS_TOKEN) ? true : false,
    isLoading: false,
    error: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        isLoggedIn: true,
                        isLoading: false,
                        error: false,
                    };
                }
                case AuthActionTypes.CHECK_SESSION: {
                    return {
                        ...state,
                        isLoggedIn: true,
                        isLoading: false,
                        error: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        isLoading: false,
                        error: false,
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        isLoading: false,
                        isLoggedIn: false,
                        error: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        error: null,
                        isLoading: false,
                        isLoggedIn: false,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        error: action.payload.error,
                        isLoggedIn: false,
                        isLoading: false,
                    };
                }
                case AuthActionTypes.CHECK_SESSION: {
                    return {
                        ...state,
                        error: false,
                        isLoggedIn: false,
                        isLoading: false,
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        isLoading: false,
                        isLoggedIn: false,
                        error: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        error: action.payload.error,
                        isLoading: false,
                    };
                }
                case AuthActionTypes.FORGOT_PASSWORD: {
                    return {
                        ...state,
                        error: action.payload.error,
                        isLoading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case AuthActionTypes.LOGIN_USER:
            return { ...state, isLoading: true, isLoggedIn: false, error: false };
        case AuthActionTypes.LOGOUT_USER:
            return { ...state, isLoading: true, isLoggedIn: false, error: false };
        case AuthActionTypes.RESET:
            return {
                ...state,
                isLoading: false,
                error: false,
                isLoggedIn: false,
            };
        default:
            return { ...state };
    }
};

export default authReducer;
