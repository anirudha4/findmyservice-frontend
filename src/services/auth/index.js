import { api } from "@api"

export const signupService = async payload => {
    const response = await api({
        url: '/auth/register',
        method: 'post',
        data: payload
    });
    return response;
}

export const loginService = async payload => {
    const response = await api({
        url: '/auth/login',
        method: 'post',
        data: payload
    })
    return response;
}

export const verifyUserService = async payload => {
    const response = await api({
        url: '/auth/get-user',
        method: 'post',
        data: payload
    });
    return response;
}