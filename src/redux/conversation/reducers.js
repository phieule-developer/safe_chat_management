import { ConversationActionTypes } from "./constants";

const initialState = {
    conversation_list: [],
    isLoading: false,
}

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ConversationActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ConversationActionTypes.GET_CONVERSATION_LIST: {
                    return {
                        ...state,
                        conversation_list: action.payload.data,
                        isLoading: false,
                    };
                }
                default:
                    return { ...state };
            }

        case ConversationActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case ConversationActionTypes.GET_CONVERSATION_LIST: {
                    return {
                        ...state,
                        isLoading: false,
                    };
                }
                default:
                    return { ...state };
            }
        case ConversationActionTypes.GET_CONVERSATION_LIST:
            return { ...state, isLoading: true };
        default:
            return { ...state };
    }
};

export default conversationReducer;
