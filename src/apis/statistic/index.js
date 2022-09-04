import { request } from '../base.services';

const statisticApi = {
    totalMember: () => {
        return request({
            url: 'statistics/amount_user',
            method: 'GET',
            isAuthRequest: true
        })
    },
    getLastOnlineList: () => {
        return request({
            url: 'user/get/all',
            method: 'GET',
            isAuthRequest: true
        })
    }
}

export default statisticApi;
