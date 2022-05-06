import { api } from "@api"

export const signupService = async payload => {
    const response = await api({
        url: '/auth/register',
        method: 'post',
        data: payload
    });
    return response;
}