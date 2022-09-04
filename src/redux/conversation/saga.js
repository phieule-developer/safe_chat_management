import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { ConversationActionTypes } from "./constants";
import { conversationApiResponseSuccess, conversationApiResponseError } from "./actions";
import conversationApi from "../../apis/conversation";

function* getConversationList() {
    try {

        let response = yield conversationApi.getAll();
        yield put(conversationApiResponseSuccess(ConversationActionTypes.GET_CONVERSATION_LIST, response.data));
    } catch (error) {
        yield put(conversationApiResponseError(ConversationActionTypes.GET_CONVERSATION_LIST, error.message));
    }
}
function* listen() {
    yield takeEvery(ConversationActionTypes.GET_CONVERSATION_LIST, getConversationList);
}

function* conversationSaga() {
    yield all([
        fork(listen)
    ]);
}

export default conversationSaga;