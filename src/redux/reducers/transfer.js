const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: []
}

const transfer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_TRANSFER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ALL_TRANSFER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ALL_TRANSFER_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "GET_ID_TRANSFER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "GET_ID_TRANSFER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "GET_ID_TRANSFER_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "PATCH_TRANSFER_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "PATCH_TRANSFER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "PATCH_TRANSFER_FULLFIED":
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

export default transfer