import { ConversationActionTypes } from './constants';

// common success
export const conversationApiResponseSuccess = (actionType, data) => ({
    type: ConversationActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const conversationApiResponseError = (actionType, error) => ({
    type: ConversationActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});
export const getConversationList = () => ({
    type: ConversationActionTypes.GET_CONVERSATION_LIST,
    payload: {},
});