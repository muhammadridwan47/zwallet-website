import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut,icPlus,icUser} from '../../assets';
import { Navbar,Footer} from '../../component/molecules';
import './adminTransfer.css'
import {Link} from 'react-router-dom';
import API from '../../services';

class AdminTransfer extends Component {

    constructor(props){
        super(props)
        this.state = {
            dataTransaction  : [],
            perPage : 7,
            currentPage : 0,
            tableData : [],
            offset : 0
        }
    }

    componentDidMount()
    {
        API.TransactionAll()
        .then(res => {
            this.setState({dataTransaction: res.allTransaction});
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
                                    <a href="/top-up" className="ml-md-4 d-block top-up-adm text-center text-lg-left">
                                        {/* <div className="active-link"></div> */}
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
                        
                                    <div class="row mx-1 pt-4 pb-4">
                                        <div class="col-12 mb-3">
                                            <div>
                                                <h3 class="admin-transfer-title">Transaction</h3>    
                                            </div>
                                        </div>


                                        <div class="col-12 table-responsive-sm">
                                            <table class="table table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                    <th scope="col" class="admin-dashboard-col-text" >No</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >ID</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Sender</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Receiver</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Amount</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Date & Time</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Notes</th>
                                                    <th scope="col" class="admin-dashboard-col-text" >Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                { 
                                                    
                                                    this.state.dataTransaction.map((item,index) => {
                                                    
                                                    // let bilangan = item.amount
                                                    // var	reverse = bilangan.toString().split('').reverse().join(''),
                                                    // rupiah 	= reverse.match(/\d{1,3}/g);
                                                    // rupiah	= rupiah.join('.').split('').reverse().join('');
                                                    let bilangan = item.amount
                                                    var	reverse = '',
                                                    rupiah 	= '';
                                                    rupiah	= '';

                                                    return(
                                                        <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{item.id}</td>
                                                        <td>{item.sender}</td>
                                                        <td>{item.receiveBy}</td>
                                                        <td>Rp. {rupiah}</td>
                                                        <td>{item.dateTransfer}</td>
                                                        <td>{item.note}</td>
                                                        <td><button class="admin-transfer-button-delete">Delete</button></td>
                                                        </tr>
                                                    )
                                                })
                                                }

                                                </tbody>
                                            </table>
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
 
export default AdminTransfer;