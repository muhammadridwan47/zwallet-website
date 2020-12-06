import axios from 'axios';
import { login } from '../utils';
const Login = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_API}/auth/login`, data)
        .then(res => {
            localStorage.setItem("login",data.email);
            login(res.data.token.token);
            resolve(res.data.token.role)
        }).catch(err => {
          reject(err)
        });
     });
     return promise;
}

const Register = (data) =>
{
     const promise = new Promise((resolve, reject) => {
      axios.post(`${process.env.REACT_APP_API}/auth/register`, data)
      .then(res => {
        localStorage.setItem('register_email',data.email)
        resolve(res)
      }).catch(err => {
        console.error(err)
      });
     });
     return promise;
}
const ForgotPassword = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        axios.patch(`${process.env.REACT_APP_API}/auth/reset_password`,data)
        .then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        });
     });
     return promise;
}

export{
    Login,
    Register,
    ForgotPassword
}