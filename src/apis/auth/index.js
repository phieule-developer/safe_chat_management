import { request } from '../base.services';

const authApi = {
    checkSession: () => {
        return request({
            url: '/auth/check_session',
            method: 'GET',
            isAuthRequest: true
        })
    },

    login: (email, password) => {
        return request({
            url: '/auth/login',
            method: 'POST',
            data: {
                email: email,
                password: password
            },
            isAuthRequest: false
        })
    },
    getUserInfo: () => {
        return request({
            url: '/user/me',
            method: 'GET',
            isAuthRequest: true
        })
    },

    changePassword: (password, newPassword, confirmPassword) => {
        return request({
            url: '/auth/v1/change_password',
            method: 'PUT',
            isAuthRequest: true,
            data: {
                confirm_password: confirmPassword,
                new_password: newPassword,
                password: password
            }
        })
    },

    updateProfile: (fullname, address, sex, phone) => {
        return request({
            url: '/user',
            method: 'PUT',
            isAuthRequest: true,
            data: {
                fullname,
                address,
                sex,
                phone
            }
        })
    },

    forgotPassword: (email) => {
        return request({
            url: '/auth/v1/forget_password',
            method: 'POST',
            isAuthRequest: false,
            data: {
                email
            }
        })
    },

    resetPassword: (newPassword, confirmPassword, token_verify) => {
        return request({
            url: '/auth/v1/reset_password',
            method: 'PUT',
            isAuthRequest: false,
            data: {
                new_password: newPassword,
                confirm_password: confirmPassword,
                token_verify: token_verify
            }
        })
    }

}

export default authApi;
