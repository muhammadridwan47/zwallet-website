import React,{Component} from 'react'
import { logout } from '../../utils';
class Logout extends Component {

    componentDidMount()
    {
        logout(this.props.history);
    }
    render() { 
       return(
           <div>

           </div>
       )
    }
}
 
export default Logout;