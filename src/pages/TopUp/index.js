import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut,icPlusActive,icUser,icTopUpMobile, icX} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import './topUp.css'
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../services';
class TopUp extends Component {

    state = {
        data : [],
        amount:''
    }
    componentDidMount()
    {
        API.TopUp()
        .then(res => {
            this.setState({data:res});
        })

    }
    onHandleAmount(e)
    {
        this.setState({amount:e.target.value})
    }
    onTopUp()
    {

        if (this.state.amount == 0) {
            toast.error("Amount is required!",{position:toast.POSITION.TOP_CENTER})
            return false
        }
        let data = {amount :this.state.amount}
        API.Midtrans(data)
        .then(token => {
            this.setState({amount:''})
            window.snap.pay(token, {
                onSuccess: function(result) {
                  console.log("SUCCESS", result);
                  toast.success("Top-Up Successfully!",{position:toast.POSITION.TOP_CENTER})
                  this.setState({amount:''})
                },
                onPending: function(result) {
                  console.log("Payment pending", result);
                  toast.success("Top-Up Successfully!",{position:toast.POSITION.TOP_CENTER})
                  this.setState({amount:''})
                },
                onError: function() {
                  console.log("Payment error");
                  this.setState({amount:''})
                }
            });
        })
        .catch(err => {
            toast.error("Failed Top-Up !",{position:toast.POSITION.TOP_CENTER})
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
                                <Link to="/dashboard">
                                    <a href="/dashboard" className="ml-md-4 d-block dashboard-tp text-center text-lg-left">
                                        <img alt="" src={icGrid} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                </Link>
                                <Link to="/transfer">
                                    <a href="/transfer" className="ml-md-4 d-block transfer-tp text-center text-lg-left">
                                        <img alt="" src={icArrowUp} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                </Link>
                                <Link to="/top-up">
                                    <a href="/top-up" className="ml-md-4 d-block top-up-tp text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icPlusActive} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
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
                                <div className="body-area-card  h-100">
                                    <div className="d-block d-sm-none">
                                        <NavigationMobile page="Top Up" to="/dashboard"/>

                                        <div className="top-up-logo mb-4" data-toggle="modal" data-target="#staticBackdrop">
                                            <img src={icTopUpMobile} alt=" " className="mr-3" />
                                            <div >
                                                <span>Virtual Account Number</span>
                                                <h4 className="mt-1">2389 081393877946</h4>
                                            </div>
                                        </div>

                                        <p className="text-center mb-5" style={{color:'#7A7886'}}>We provide you virtual account number for top up via nearest ATM.</p>
                                    </div>
                                    <h1>How To Top Up</h1>
                
                                    <div className="row">
                                        <div className="col-12">

                                            {
                                                this.state.data.map(item => {
                                                    return(
                                                        <div className="card-profile " key={item.id} >
                                                            <div className="row">
                                                                <div className="col-9 col-sm-9 col-lg-10 top-up">
                                                                     <p><span className="number">{item.stepNumber}</span>{item.instruction}</p>
                                                                </div>
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

                <div className="modal fade edit-image" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header border-0 p-0 ">
                            <h5 >Top Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><img alt="" src={icX} /></span>
                            </button>
                        </div>
                        <div className="modal-body p-0">

                            <div className="form-upload">
                            <div className="row justify-content-center">
                                <div className="col-10 text-center">
                                <div className="mt-4 text-center position-relative">
                                    <div className="hover-image" style={this.state.avatarOver ? { display: 'inline' } : { display: 'none' }}></div>
                                    <input type="file" className="image-upload" onChange={this.fileChangedHandler} onMouseOver={() => this.overImage()} onMouseLeave={() => this.moveImage()} />
                                    {/* <img className="avatar" src={process.env.REACT_APP_URL + this.props.userData.photo} alt="" /> */}

                                </div>
                                <input type="text" name="amount" value={this.state.amount}  onChange={(e) => this.onHandleAmount(e)} className="form-control d-inline mt-4" placeholder="Amount" />
                                </div>

                            </div>
                            </div>

                        </div>
                        <div className="modal-footer border-0 p-0 ">
                            <button type="button" className="btn btn-primary" onClick={() => this.onTopUp()} >Continue</button>
                        </div>
                        </div>
                    </div>
                    </div>





            </>
         );
    }
}
 
export default TopUp;