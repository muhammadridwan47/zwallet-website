import React,{Component} from 'react';
import { icArrowUpActive ,icDownload,icGrid, icLogOut, icPlus,icShare,icFailed,icUser} from '../../assets';
import { Navbar,Footer, CardPerson} from '../../component/molecules';
import './failed.css'
import {Link} from 'react-router-dom';
class Failed extends Component {

    state = {
        dataTransfer : []
    }

    componentDidMount()
    {
        let dataTransfer = JSON.parse(localStorage.getItem("dataTransfer"));
        this.setState({dataTransfer:dataTransfer})   

    }

    render() { 
        return ( 
            <>
            <div className="d-none d-sm-block">
                <Navbar/>
            </div>
                <div className="container content">
                    <div className="row">
                        <div className="col-3 bg-white shadow-lg">
                            <div className="sidebar sidebar_menu" >
                               <Link to="/dashboard">
                                <a href="/dashboard" className="ml-md-4 d-block dashboard-tr text-center text-lg-left">
                                    <img alt="" src={icGrid} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                </a>
                                </Link>
                                <Link to="/transfer">
                                <a href="receiver.html" className="ml-md-4 d-block transfer text-center text-lg-left">
                                    <div className="active-link"></div>
                                    <img alt="" src={icArrowUpActive} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                </a>
                                </Link>
                                <Link to="/top-up">
                                <a href="top-up"  className="ml-md-4 d-block top-up-tr text-center text-lg-left" >
                                    <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                </a>
                                </Link>
                                <Link to="/user">
                                <a href="/" className="ml-md-4 d-block profile-tr text-center text-lg-left">
                                    <img alt="" src={icUser} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Profile</span>
                                </a>
                                </Link>
                                <a href="login.html" className="ml-md-4 d-block logout-sc text-center text-lg-left">
                                    <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-9" id="area">
                            <div className="body-area-success">
                                <div className="status text-center">
                                    <img alt="" src={icFailed} />
                                    <h2>Transfer Success</h2>
                                </div>
                                <div>
                                    <p class="text-center text-muted textfailed">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                                </div>
                                <h2 className="detail-failed d-sm-none">Details</h2>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card-details ">
                                            <p>Amount</p>
                                            <h4>Rp{this.state.dataTransfer.amount}</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-details ">
                                            <p>Balance Left</p>
                                            <h4>Rp{this.state.dataTransfer.available}</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-details ">
                                            <p>Date & Time</p>
                                            <h4>{this.state.dataTransfer.date}</h4>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card-details ">
                                            <p>Notes</p>
                                            <h4>{this.state.dataTransfer.notes}</h4>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-3">Transfer To</h1>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-sm-none">
                                          <CardPerson name="dawda" photo={this.state.dataTransfer.photo} phone={this.state.dataTransfer.phone}/>
                                        </div>
                                        <div className="card-profile d-none d-sm-block ">
                                            <div className="row justify-content-lg-around">
                                                <div className="col-4 col-sm-3 col-lg-2 m-0 ">
                                                    <img alt="" src={this.state.dataTransfer.photo} width="70" />
                                                </div>
                                                <div className="col-9 col-sm-9 col-lg-10 receiver">
                                                    <h4 className="mt-1 mt-sm-0">{this.state.dataTransfer.name}</h4>
                                                    <p>{this.state.dataTransfer.phone}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-sm-right mt-md-5">
                                    <button className="btn btn-share d-none d-sm-block"><img alt="" src={icShare} /></button> &nbsp;&nbsp;
                                    <button className="btn btn-download d-none d-sm-block"><img alt="" src={icDownload} />&nbsp; <span>Download PDF</span></button> &nbsp;&nbsp;
                                    <Link to="/dashboard">
                                         <button className="btn back">Back to Home</button>
                                    </Link>
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
 
export default Failed;