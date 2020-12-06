import axios from 'axios';

export const login = data => {
    return {
        type: 'LOGIN',
        payload: axios({
            method: 'post',
            url: '',
            data: data
        })
    };
};

export const logout = () => {
    return {
        type: "LOGOUT_FULFILLED"
    }
}