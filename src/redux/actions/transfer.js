import axios from 'axios';

export const getAllTransfer = (token, search, page, limit) => {
    return {
        type: "GET_ALL_TRANSFER",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const getIdTransfer = (token, id) => {
    return {
        type: "GET_ID_TRANSFER",
        payload: axios({
            method: 'GET',
            url: ``,
            headers: {
                Authorization: token
            }
        })
    }
}

export const patchTransfer = (id, data, token) => {
    return {
        type: "PATCH_TRANSFER",
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