import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../utils'





const PrivateRoute = ({ component: Component, ...rest })=> {
    return(
        <Route {...rest} render={(props)=> (isLogin() ? (<Component {...props} />):(<Redirect to='/auth' />) )} />
    )


}

const PublicRoute = ({ component: Component,admin, restricted, ...rest }) => {
    //restricted (true) = public route itu bisa diakses ga sih ketika user tidak ada token/belum login
    //restricted (false) = public
    // console.log(admin)
  
    return (
      <Route {...rest} render={(props) => isLogin(admin) && restricted ? ( <Redirect to="/dashboard" />) : ( <Component {...props} />)}/>
    );
  };



export {PrivateRoute,PublicRoute}