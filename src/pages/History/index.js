import React,{Component} from 'react';
import { icArrowUp , icGridActive, icLogOut,icPlus,icUser} from '../../assets';
import { Navbar,Footer, CardPerson, NavigationMobile} from '../../component/molecules';
import './history.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
class History extends Component {

    state = {
        historyTransfer: []
    }


    componentDidMount()
    {

            const token = localStorage.getItem("jwt");
            const headers = { headers: {'Authorization': `${token}`}}  
            axios.get(`${process.env.REACT_APP_API}/user/home`,headers)
            .then(res =>{
                console.log('data transfer axios dashboard: ',res.data.data.data)
                this.setState({historyTransfer:res.data.data.data});
            
            }).catch(err => {
              console.log('data transfer axios error: ', err.message)
            });
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
                                <Link to="/dashboard">
                                    <a href="/dashboard" className="ml-md-4 d-block  top-up-tp  text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icGridActive} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                </Link>
                                <Link to="/transfer">
                                    <a href="/transfer" className="ml-md-4 d-block transfer-tp text-center text-lg-left">
                                        <img alt="" src={icArrowUp} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                </Link>
                                <Link to="/top-up">
                                    <a href="/top-up" className="ml-md-4 d-block  dashboard-tp text-center text-lg-left">
                                        <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                    </a>
                                </Link>
                                <Link to="/profile">
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
                                <div className="body-area-history">
                                <div className="d-sm-none">
                                     <NavigationMobile page="History" to="/dashboard"/>
                                </div>
                                    <h1 className="d-none d-sm-block">Transaction History</h1>
                                    <p>This Week</p>

                                    <div className="row">
                                        
                                        {
                                            this.state.historyTransfer.map(history => {
                                                return(
                                                    <>
                                                        <div className="col-6 mb-2 d-none d-sm-block">
                                                            <div className="row justify-content-lg-around">
                                                                <div className="col-md-3 m-0">
                                                                    <img src={history.img} width="56" height="56" style={{borderRadius:10}} alt=" " />
                                                                </div>
                                                                <div className="col-md-9  user-transaction">
                                                                    <h4 className="mt-1 mt-sm-0">{history.receiveBy}</h4>
                                                                    <p>Transfer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 text-right d-none d-sm-block">
                                                            <span  className="d-block mt-4 plus">+Rp{history.amount}</span>
                                                        </div>
                                                        <CardPerson key={history.id} name={history.receiveBy} photo={history.img} amount={history.amountTransfer} status={history.status}/>
                                                   </>

                                                )
                                            })

                                        }
                                    </div>

                                    <p className="mt-3">This Month</p>

                                    <div className="row">
                                    {
                                            this.state.historyTransfer.map(history => {
                                                return(
                                                    <>

                                                        <div className="col-6 mb-2 d-none d-sm-block">
                                                            <div className="row justify-content-lg-around">
                                                                <div className="col-md-3 m-0">
                                                                    <img src={history.img} width="56" height="56" style={{borderRadius:10}} alt=" " />
                                                                </div>
                                                                <div className="col-md-9  user-transaction">
                                                                    <h4 className="mt-1 mt-sm-0">{history.amountTransfer}</h4>
                                                                    <p>Transfer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6 text-right d-none d-sm-block">
                                                            <span  className="d-block mt-4 plus">+Rp{history.amountTransfer}</span>
                                                        </div>

                                                        <CardPerson key={history.id} name={history.receiveBy} photo={history.img} amount={history.amountTransfer} status={history.status}/>
                                                   </>

                                                )
                                            })

                                        }
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
 
export default History;