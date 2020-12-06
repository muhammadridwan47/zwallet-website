const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: []
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_USER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ALL_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ALL_USER_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "GET_ID_USER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ID_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ID_USER_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "PATCH_USER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "PATCH_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "PATCH_USER_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        default:
            return state;
    }
}

export default users