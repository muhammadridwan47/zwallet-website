import axios from 'axios';
const Home = () =>
{
     const promise = new Promise((resolve, reject) => {
        const token = localStorage.getItem("jwt");
        const headers = { headers: {'Authorization': `${token}`}}  
        axios.get(`${process.env.REACT_APP_API}/user/home`,headers)
        .then(res =>{
          if (res.data.data.data) {
            resolve(res.data.data.data)
          }
        }).catch(err => {
           reject(err.message)
        });
     });
     return promise;
}

const GetData = () =>
{
     const promise = new Promise((resolve, reject) => {
      const token = localStorage.getItem("jwt");
      const headers = { headers: {'Authorization': `${token}`}}  
      axios.get(`${process.env.REACT_APP_API}/user`,headers)
      .then(res =>{
          resolve(res.data.data[0])
      }).catch(err => {
        reject(err.message)
      });
     });
     return promise;
}
const Notification = () =>
{
     const promise = new Promise((resolve, reject) => {
            let token = localStorage.getItem("jwt");
            const headers = { headers: {'Authorization': `${token}`}}  
            axios.get(`${process.env.REACT_APP_API}/user/home`,headers)
            .then(res =>{
                if (res.data.data.data) {
                  resolve(res.data.data.data)
                }
            }).catch(err => {
              reject(err.message)
            });
     });
     return promise;
}
export{
    Home,
    GetData,
    Notification
}