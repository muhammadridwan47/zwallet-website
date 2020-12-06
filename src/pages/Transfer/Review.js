import React,{Component} from 'react';
import { icArrowUpActive ,icGrid, icLine, icLogOut, icPlus,icUser,icX} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import './review.css'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import formatNumber from '../../utils/formatNumber';
import API from '../../services';
class Review extends Component {
    state = {
        dataTransfer : [],
        dataUSer:[],
        form : {
            pin1 : '',
            pin2 : '',
            pin3 : '',
            pin4 : '',
            pin5 : '',
            pin6 : ''
        }
    }

    componentDidMount()
    {
              let dataTransfer = JSON.parse(localStorage.getItem("dataTransfer"));
              this.setState({dataTransfer:dataTransfer})    
    }

    handleForm = (event) => {
        let  newForm  = this.state.form;
        newForm[event.target.name] = event.target.value;
        this.setState({
            newForm: newForm
        },
        ()=> {
          console.log(newForm);
        }
        )  
    }

    onContinue() 
    {
       let form = {
            receiver: parseInt(this.state.dataTransfer.idReceiver),
            status :'Transfer',
            amountTransfer: this.state.dataTransfer.amount,
            note: this.state.dataTransfer.notes,
            balanceLeft :this.state.dataTransfer.available,
            pin: parseInt(this.state.form.pin1 + this.state.form.pin2 + this.state.form.pin3 + this.state.form.pin4 + this.state.form.pin5 + this.state.form.pin6),
        }
        API.PinConfirmation(form)
        .then(res => {
            this.props.history.push('/transfer/success')
        })

    }


    render() { 
        let url = `/transfer/amount/${this.state.dataTransfer.idReceiver}`;
        return ( 
            <>
                <div className="d-none d-sm-block">
                    <Navbar/>
                </div>
                

                    <div className="container content">
                        <div className="row">
                            <div className="col-3 bg-white shadow-lg">
                                <div className="sidebar sidebar_menu">
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
                                    <a href="login.html" className="ml-md-4 d-block logout text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                            <div class="confirmation-box border-20">
                                <div class="container-xl container-lg container-md ">
                                  <div className="d-block d-sm-none pl-3 mb-0">
                                        <NavigationMobile page="Confirmation" to={url}/>
                                    </div>
                                    <div class="d-flex align-items-start flex-column bd-highlight mb-3 " >
                                        <div class="container">
                                            <p  class="mt-4 " id="confirmation-title">Transfer To</p>
                                            
                                            <div class="confirm-panel-list mb-4">
                                                <div class="d-flex flex-column bd-highlight mb-2 pt-3 pt-sm-3">
                                                    <div class="pl-4 bd-highlight ">
                                                        <div class="d-flex justify-content-start">
                                                            <img alt="" src={process.env.REACT_APP_API_IMAGE+this.state.dataTransfer.photo} width="70"/>
                                                            <div class="ml-3 mt-2">
                                                            <div class="name-history  mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 ">{this.state.dataTransfer.name}</div>
                                                            <div class="status-history">{this.state.dataTransfer.phone}</div>
                                                    
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>   
                                            </div>

                                            <p  class="mt-4 mb-xl-4" id="confirmation-title">Details</p>

                                            <div class="confirm-panel-list mb-4">
                                                <div class="d-flex flex-column bd-highlight mb-2 p-3 pt-sm-3">
                                                    <div class="pl-2 bd-highlight ">
                                                        <div class="d-flex justify-content-start">
                                                            
                                                            <div class="ml-3 mt-2">
                                                            <div class="label-confirmation mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2">Amount</div>
                                                            <div class="value-confirmation">Rp {formatNumber(this.state.dataTransfer.amount)}</div>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>

                                            <div class="confirm-panel-list mb-4">
                                                <div class="d-flex flex-column bd-highlight mb-2 p-3 pt-sm-3">
                                                    <div class="pl-2 bd-highlight ">
                                                        <div class="d-flex justify-content-start">
                                                            
                                                            <div class="ml-3 mt-2">
                                                            <div class="label-confirmation  mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2">Balance Left</div>
                                                            <div class="value-confirmation">Rp {formatNumber(this.state.dataTransfer.available)}</div>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>

                                            <div class="confirm-panel-list mb-4">
                                                <div class="d-flex flex-column bd-highlight mb-2 p-3 pt-sm-3">
                                                    <div class="pl-2 bd-highlight ">
                                                        <div class="d-flex justify-content-start">
                                                            
                                                            <div class="ml-3 mt-2">
                                                            <div class="label-confirmation  mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2">Date & Time</div>
                                                            <div class="value-confirmation">{this.state.dataTransfer.date}</div>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>



                                            <div class="confirm-panel-list mb-4">
                                                <div class="d-flex flex-column bd-highlight mb-2 p-3 pt-sm-3">
                                                    <div class="pl-2 bd-highlight ">
                                                        <div class="d-flex justify-content-start">
                                                            
                                                            <div class="ml-3 mt-2">
                                                            <div class="label-confirmation  mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2">Notes</div>
                                                            <div class="value-confirmation">{this.state.dataTransfer.notes}</div>
                                                            </div>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>
                                            
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <div class="d-flex flex-row bd-highlight pr-3 mb-3">
                                        
                                        <button type="button" class="zwallet-btn mt-4" data-toggle="modal" data-target="#staticBackdrop">
                                            Continue
                                        </button>
                                        
            

                                    </div>
                                    
                                </div>

                            </div>
             </div>

                            </div>
                        </div>

                    </div>                                              
                <Footer/>

               
<div className="modal fade review-modal" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content ">
          
        <div className="modal-header border-0 p-0 ">
          <h5  className="d-none d-sm-block ">Enter PIN to Transfer</h5>
          <button type="button" className="close d-none d-sm-block" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true"  >
                <img alt="" src={icX} />
                </span>
          </button>
          <button type="button" className="close w-100 p-0 mb-5 d-sm-none" data-dismiss="modal" aria-label="Close" style={{position:'absolute',opacity:1}}>
            <span aria-hidden="true"  >
                 <NavigationMobile page="Enter Your PIN" />
            </span>
          </button>
        </div>
        <div className="modal-body p-0">

            {/* <NavigationMobile page="Enter Your PIN"/> */}

            <p className="mt-5 mt-sm-3">
                Enter your 6 digits PIN for confirmation to continue transferring money. 
            </p>

            <div className="pin">
                <div className="row justify-content-md-around">
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin1" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin2" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin3" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin4" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin5" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                    <div className="col-2">
                       <input type="text" className="form-control d-inline" name="pin6" onChange={this.handleForm} maxLength="1"/>
                       <img alt="" src={icLine} className="input-line" />
                    </div>
                </div>
            </div>

        </div>
        <div className="modal-footer border-0 p-0">
          <button type="button" className="btn btn-primary d-none d-sm-block" onClick={() => this.onContinue()}   data-dismiss="modal" aria-label="Close">Continue</button>
          <button type="button" className="btn btn-primary d-sm-none" onClick={() => this.onContinue()}   data-dismiss="modal" aria-label="Close">Transfer Now</button>
        </div>
      </div>
    </div>
  </div>







            </>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        userData: state
    }
}


export default connect(mapStateToProps)(Review);