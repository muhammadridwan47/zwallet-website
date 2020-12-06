import axios from 'axios';
const TopUp = () =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}} 
        axios.get(`${process.env.REACT_APP_API}/topup/`,headers)
        .then(res =>{
          resolve(res.data.data)
        }).catch(err => {
          console.log(err)
        });
     });
     return promise;
}
const Midtrans = (data) =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.patch(`${process.env.REACT_APP_API}/topup/midtrans`,data,headers)
        .then(res =>{
                resolve(res.data.token)
        })
        .catch(err => {
            reject(err.message)
        })
     });
     return promise;
}

export{
    TopUp,
    Midtrans
}