const TOKEN_KEY = 'jwt'

export const login = (token) => {
    
    localStorage.setItem(TOKEN_KEY, token)

}

export const logout = (history) => {
    localStorage.removeItem(TOKEN_KEY)
    history.push('/auth')
}

export const isLogin =  (admin)=> {

    if (localStorage.getItem(TOKEN_KEY)) {
            return true
    }
    return false
    
}