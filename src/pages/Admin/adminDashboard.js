import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut,icPlus,icUser} from '../../assets';
import { Navbar,Footer} from '../../component/molecules';
import './adminDashboard.css'
import {Link} from 'react-router-dom';
import API from '../../services';

class AdminDashboard extends Component {
    state = {
        userData : [],
        countTransactionAmount  : [],
        countTrasaction : []
    }
    componentDidMount()
    {
        API.UserAll()
        .then(res => {
            this.setState({userData:res})
        })
        API.TransactionAll().then(res => {
            this.setState({countTransactionAmount:res.amount})
            this.setState({countTrasaction:res.transactions})
        })
    }
    render() { 
        return ( 
            <>
                <Navbar/>
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
                                    <a href="/admin/top-up" className="ml-md-4 d-block top-up-adm text-center text-lg-left">
                                        
                                        <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
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
                                <div class="container-xl container-lg container-md pb-4">
                        
                                    <div class="row mx-3 pt-4 pb-4">

                                        <div class="col-12 mb-4">
                                            <div>
                                                <h3 class="admin-dashboard-title">Dashboard</h3>    
                                            </div>
                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-4">
                                            <div class="admin-dashboard-panel-list">
                                                <div class="d-flex justify-content-center">
                                                    <div class="d-flex flex-column bd-highlight mb-3">
                                                        <h2 class="mt-1 mx-auto admin-dashboard-angka-jumlah-user">{this.state.userData.length}</h2>
                                                        <div className='admin-dashboard-subtitle-box'>
                                                            <p class="admin-dashboard-text-jumlah-user mx-2 my-2">Total Users</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-3">
                                            <div class="admin-dashboard-panel-list">
                                                <div class="d-flex justify-content-center">
                                                    <div class="d-flex flex-column bd-highlight mb-3">
                                                        <h2 class="mt-1 mx-auto admin-dashboard-angka-jumlah-user">{this.state.countTrasaction}</h2>

                                                        <div className='admin-dashboard-subtitle-box'>
                                                            <p class="admin-dashboard-text-jumlah-user mx-2 my-2">Total Transactions</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col-12">

                                        </div>

                                        <div class="col-12 ">
                                            <div class="admin-dashboard-transfer-total-box mx-auto ">
                                                <div class="d-flex flex-column bd-highlight mt-2 pl-3 pt-3">
                                                    <div class="bd-highlight admin-dashboard-title-box my-auto">
                                                        <h2 class="admin-dashboard-total-trasaction mt-1  mx-xl-2 mx-lg-0 mx-md-2 mx-sm-2">Money transactions:</h2>
                                                    </div>
                                                    <div class="p-2 bd-highlight">
                                                        <p class="admin-dashboard-money-value">Rp. {this.state.countTransactionAmount}</p>
                                                    </div>
                                                </div>
                                            </div>                                
                                        </div>

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
 
export default AdminDashboard;