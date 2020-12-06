import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin, loginAs } from "../utils";
import { isLogin } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  //restricted (true) = public route itu bisa diakses ga sih ketika user tidak ada token/belum login
  //restricted (false) = public
  // console.log(...props)

  return (
    <Route {...rest} render={(props) => isLogin() && restricted ? ( <Redirect to="/dashboard" />) : ( <Component {...props} />)}/>
  );
};

// contoh memberi route ngadmin
{
  /* <Route
{...rest}
render={(props) =>
  isLogin() && restricted ? (
    loginAs("admin") ? (
      <Redirect to="/ngadmin" />
    ) : (
      <Redirect to="/dashboard" />
    )
  ) : (
    <Component {...props} />
  )
} */
}
export default PublicRoute;
