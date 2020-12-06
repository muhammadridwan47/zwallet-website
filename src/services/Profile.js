const axios = require("axios");
const qs = require('qs')
const UploadImage = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.patch(`${process.env.REACT_APP_API}/user/patch_user`,data,headers)
        .then(res => {
            resolve(res)
        })  
        .catch(err => {
            reject(err.message)
        })
     });
     return promise;
}

const ChangePassword = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        data = qs.stringify(data);
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}   
        axios.patch(`${process.env.REACT_APP_API}/user/change_password`,data,headers)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
            reject(err.messages)
        });
     });
     return promise;
}
const ChangePin = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        const pin = qs.stringify(data);
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.patch(`${process.env.REACT_APP_API}/user/change_pin`,pin,headers)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
        
     });
     return promise;
}
const DeletePhone = () =>
{
     const promise = new Promise((resolve, reject) => {
        const data = {
            phoneNumber : 0
        }
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.patch(`${process.env.REACT_APP_API}/user/patch_user`,data,headers)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
        
     });
     return promise;
}

const AddPhoneNumber = (number) =>
{
     const promise = new Promise((resolve, reject) => {
        let value = '62';
        let data = {
            phoneNumber : value + number
        }
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.patch(`${process.env.REACT_APP_API}/user/patch_user`,data,headers)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
        
     });
     return promise;
}

export{
    UploadImage,
    ChangePassword,
    ChangePin,
    DeletePhone,
    AddPhoneNumber
}