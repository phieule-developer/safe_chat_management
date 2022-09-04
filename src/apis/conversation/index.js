import { request } from '../base.services';

const conversationApi = {
    getAll: () => {
        return request({
            url: 'conversation',
            method: 'GET',
            isAuthRequest: true
        })
    },
}

export default conversationApi;
