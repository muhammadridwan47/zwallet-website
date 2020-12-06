import axios from 'axios';

export const getAllUser = (token, search, page, limit) => {
    return {
        type: "GET_ALL_USER",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const getIdUser = (token, id) => {
    return {
        type: "GET_ID_USER",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const patchUser = (id, data, token) => {
    return {
        type: "PATCH_USER",
        payload: axios({
            method: 'PATCH',
            url: ``,
            data: data,
            headers: {
                Authorization: token
            }
        })
    }
}