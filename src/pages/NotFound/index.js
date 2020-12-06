import React,{Component} from 'react'
class NotFound extends Component {
    render() { 
       return(
           <div style={{display:'flex',height:'100vh',alignItems:'center',textAlign:'center'}}>
               <div style={{flex:1}}>
                 <h1>404</h1>
                 <h1>Page Not Found</h1>
                 <a href="/">&laquo; Back to home &raquo;</a>
               </div>
           </div>
       )
    }
}
 
export default NotFound;