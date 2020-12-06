import axios from 'axios';

export const getAllTopup = (token, search, page, limit) => {
    return {
        type: "GET_ALL_TOPUP",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const getIdTopup = (token, id) => {
    return {
        type: "GET_ID_TOPUP",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const patchTopup = (id, data, token) => {
    return {
        type: "PATCH_TOPUP",
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

export const deleteTopup = (id, data, token) => {
    return {
        type: "DELETE_TOPUP",
        payload: axios({
            method: 'DELETE',
            url: ``,
            data: data,
            headers: {
                Authorization: token
            }
        })
    }
}