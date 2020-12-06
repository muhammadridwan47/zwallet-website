const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: []
}

const topup = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_TOPUP_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ALL_TOPUP_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ALL_TOPUP_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "GET_ID_TOPUP_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ID_TOPUP_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ID_TOPUP_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "PATCH_TOPUP_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "PATCH_TOPUP_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "PATCH_TOPUP_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "DELETE_TOPUP_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "DELETE_TOPUP_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "DELETE_TOPUP_FULLFIED":
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

export default topup