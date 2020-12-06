import axios from 'axios';
import qs from 'qs';
const GetDataTransfer = (limit) =>
{
     const promise = new Promise((resolve, reject) => {
        const email = localStorage.getItem("login");
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all?sortBy=fullName&sortType=ASC&limit=${limit}&page=0`,headers)
        .then(res =>{
            const result = res.data.data.filter(man => {
                return man.email !== email
            })
            resolve(result)
        }).catch(err => {
          console.log(err)
        });  
     });
     return promise;
}
const MaxData = () =>
{
     const promise = new Promise((resolve, reject) => {
        const email = localStorage.getItem("login");
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all?sortBy=fullName&sortType=DESC&limit=999&page=0`,headers)
        .then(res =>{
        const max = res.data.data.filter(man => {
             return man.email !== email
        })
        resolve(max.length)
        //   this.setState({max:max.length});
        }) 
     });
     return promise;
}
const QuickAccess = () =>
{
     const promise = new Promise((resolve, reject) => {
        const email = localStorage.getItem("login");
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all?sortBy=fullName&sortType=DESC&limit=3&page=0`,headers)
        .then(res =>{
          const result = res.data.data.filter(man => {
             return man.email !== email
          })
          resolve(result)
        
        }).catch(err => {
          console.log(err)
        }); 
     });
     return promise;
}
const SearchReceiver = (query,limit) =>
{
     const promise = new Promise((resolve, reject) => {
        const email = localStorage.getItem("login");
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all?search=${query}&sortBy=fullName&sortType=ASC&limit=${limit}&page=0`,headers)
        .then(res =>{
            const result = res.data.data.filter(man => {
                return man.email !== email
           })
            //  this.setState({profiles:result,max:result.length});
        
           resolve({profile:result,max:result.length})
        }).catch(err => {
          console.log(err)
        });
     });
     return promise;
}
const MoreData = (limit) =>
{
     const promise = new Promise((resolve, reject) => {
        const email = localStorage.getItem("login");
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all?sortBy=fullName&sortType=ASC&limit=${limit + 4}&page=0`,headers)
        .then(res =>{
            const result = res.data.data.filter(man => {
                return man.email !== email
            })
            resolve(result)
        })
        .catch(err => {
            console.log(err)
        });
     });
     return promise;
}
const GetTranferById = (id) =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/getuser?id=${id}`,headers)
        .then(res =>{
          resolve(res.data.data[0])
        }).catch(err => {
          reject(err.message)
        });
     });
     return promise;
}

const PinConfirmation = (form) =>
{
     const promise = new Promise((resolve, reject) => {
        let data = qs.stringify(form);
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.post(`${process.env.REACT_APP_API}/transaction/`,data,headers)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err.message)
        })
     });
     return promise;
}

const TransactionDetail = (form) =>
{
     const promise = new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const headers = { headers: {'Authorization':token }}
      axios.get(`${process.env.REACT_APP_API}/transaction/detail`,headers)
      .then((result)=>{
          resolve(result.data.data);
      })
      .catch(err => {
          reject(err);
      })
     });
     return promise;
}



export{
    GetDataTransfer,
    MaxData,
    QuickAccess,
    SearchReceiver,
    MoreData,
    GetTranferById,
    PinConfirmation,
    TransactionDetail
}