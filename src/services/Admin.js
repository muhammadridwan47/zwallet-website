import axios from 'axios';
const UserAll = () =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/all`,headers)
        .then(res =>{
            resolve(res.data.data);
        }).catch(err => {
           reject(err.message)
        });
     });
     return promise;
}
const TransactionAll = () =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/transaction/all`,headers)
        .then((res)=>{
            res = res.data
            let countAmount = res.data.map( (item,index) => {
                const countBalance = parseInt(item.amountTransfer)
                return countBalance
            })
            function myFunc(total, num) {
                return total + num;
            }
            let bilangan =  countAmount.reduce(myFunc)
            var	reverse = bilangan.toString().split('').reverse().join(''),
            rupiah 	= reverse.match(/\d{1,3}/g);
            rupiah	= rupiah.join('.').split('').reverse().join('');
            resolve({amount:rupiah,transactions:res.data.length,allTransaction:res.data});
        })
        .catch(err => {
            reject(err);
        })
     });
     return promise;
}
const AdminTopUp = () =>
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

export{
    UserAll,
    TransactionAll,
    AdminTopUp
}