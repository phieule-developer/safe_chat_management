import { DashboardActionTypes } from './constants';

// common success
export const dashboardApiResponseSuccess = (actionType, data) => ({
    type: DashboardActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const dashboardApiResponseError = (actionType, error) => ({
    type: DashboardActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const statisticTotalMember = () => ({
    type: DashboardActionTypes.STATISTIC_TOTAL_MEMBER,
    payload: {},
});
export const getLastOnlineList = () => ({
    type: DashboardActionTypes.GET_LAST_ONLINE_LIST,
    payload: {},
});