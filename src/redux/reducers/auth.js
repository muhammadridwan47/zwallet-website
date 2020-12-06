const initialState = {
    isLoading: false,
    isError: false,
    errorMsg: '',
    data: {}
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_PENDING":
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case "LOGIN_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMsg: "Data Rejected"
            }
        case "LOGIN_FULLFIED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
        case "LOGOUT_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isError: false,
                errorMsg: "",
                data: {}
            }
        default:
            return state;
    }
}

export default auth