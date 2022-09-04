import { groupActionTypes } from "./constants";

const initialState = {
    groups_list: [],
    permission_detail_list: []
}

const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case groupActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case groupActionTypes.GET_ALL_GROUP: {
                    return {
                        ...state,
                        groups_list: action.payload.data,
                    };
                }
                case groupActionTypes.GET_DETAIL_PERMISSION: {
                    return {
                        ...state,
                        permission_detail_list: action.payload.data
                    };
                }
                default:
                    return { ...state };
            }

        case groupActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case groupActionTypes.GET_ALL_GROUP: {
                    return { ...state };
                }
                default:
                    return { ...state };
            }

        case groupActionTypes.GET_ALL_GROUP:
            return { ...state };
        default:
            return { ...state };
    }
};

export default groupReducer;
