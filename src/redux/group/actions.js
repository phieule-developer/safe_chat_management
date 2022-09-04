import { groupActionTypes } from './constants';

// common success
export const groupApiResponseSuccess = (actionType, data) => ({
    type: groupActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const groupApiResponseError = (actionType, error) => ({
    type: groupActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getAllGroups = () => ({
    type: groupActionTypes.GET_ALL_GROUP,
    payload: {},
});
export const getDetailPermissions = (group_id) => ({
    type: groupActionTypes.GET_DETAIL_PERMISSION,
    payload: {
        group_id
    },
});