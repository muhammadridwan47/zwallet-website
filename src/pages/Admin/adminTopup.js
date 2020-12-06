import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut,icPlusActive,icUser} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import './adminTopup.css'
import {Link} from 'react-router-dom';
import API from '../../services';
class AdminTopup extends Component {

    state = {
        data : []
    }
    componentDidMount()
    {
        API.AdminTopUp()
        .then(res => {
            this.setState({data:res});
        })
    }
    render() { 
        return ( 
            <>
                <div className="d-none d-sm-block">
                    <Navbar/>
                </div>
                    <div className="container content">
                        <div className="row">
                            <div className="col-3 bg-white shadow-lg sidebar_menu">
                            <div className="sidebar h-100 d-flex pb-5" style={{flexDirection: 'column'}}>
                              <div style={{flex: 1}}> 
                                <Link to="/admin">
                                    <a href="/dashboard" className="ml-md-4 d-block dashboard-tp text-center text-lg-left">
                                        <img alt="" src={icGrid} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                </Link>
                                <Link to="/admin/transfer">
                                    <a href="/transfer" className="ml-md-4 d-block transfer-tp text-center text-lg-left">
                                        <img alt="" src={icArrowUp} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                </Link>
                                <Link to="/admin/top-up">
                                    <a href="/admin/top-up" className="ml-md-4 d-block top-up-tp text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icPlusActive} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                    </a>
                                </Link>
                                <Link to="/admin/user">
                                    <a href="/" className="ml-md-4 d-block profile-tp text-center text-lg-left">
                                        <img alt="" src={icUser} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Profile</span>
                                    </a>
                                </Link>
                                </div>
                                    <a href="/auth/logout" className="ml-md-4 d-block logout-tp text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                                <div className="body-area-card  h-100">
                                    <div className="d-block d-sm-none">
                                        <NavigationMobile page="Top Up" to="/dashboard"/>
                                    </div>
                                    <h1>How To Top Up</h1>
                
                                    <div className="row">
                                        <div className="col-12">

                                            {
                                                this.state.data.map(item => {
                                                    return(
                                                            <div className="row" key={item.id} >
                                                                <div className="col-12 col-sm-9 col-lg-10 top-up">
                                                                <table className="table table-striped " id="mytable" >
                                                                        <tr>    
                                                                            <th><p className="font-weight-normal"><span className="number">{item.stepNumber}</span>{item.instruction}</p>
                                                                            <a href="#" type="submit" className="btn btn-sm btn-primary text-center edit">Edit</a>
                                                                            <a href="#" type="reset"  className="btn btn-sm btn-danger delete ml-0 ml-lg-1 mt-2 mt-lg-0">Delete</a></th>
                                                                        </tr>
                                                                </table>
                                                                </div>
                                                            </div>
                                                    )
                                                })
                                            }
                                        
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>                                             
                <Footer/>
            </>
         );
    }
}
 
export default AdminTopup;