import { DashboardActionTypes } from "./constants";

const initialState = {
    total_member: 0,
    user_list: [],
    isLoading: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case DashboardActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case DashboardActionTypes.STATISTIC_TOTAL_MEMBER: {
                    return {
                        ...state,
                        total_member: action.payload.data,
                        isLoading: false,
                    };
                }
                case DashboardActionTypes.GET_LAST_ONLINE_LIST: {
                    return {
                        ...state,
                        user_list: action.payload.data,
                        isLoading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case DashboardActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case DashboardActionTypes.STATISTIC_TOTAL_MEMBER: {
                    return {
                        ...state,
                        isLoading: false,
                    };
                }
                case DashboardActionTypes.GET_LAST_ONLINE_LIST: {
                    return {
                        ...state,
                        isLoading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case DashboardActionTypes.GET_TOTAL_MEMBER:
            return { ...state, isLoading: true };
        case DashboardActionTypes.GET_LAST_ONLINE_LIST:
            return { ...state, isLoading: true };
        default:
            return { ...state };
    }
};

export default authReducer;
