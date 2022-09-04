import { request } from '../base.services';

const groupApi = {
    getAll: () => {
        return request({
            url: 'admin/v1/groups',
            method: 'GET',
            isAuthRequest: true
        })
    },
    getDetailPermission: (group_id) => {
        return request({
            url: `admin/v1/permissions/${group_id}`,
            method: 'GET',
            isAuthRequest: true
        })
    }
}

export default groupApi;
