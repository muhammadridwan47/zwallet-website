import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut, icPlus,icUserActive,icPhone, icPhoneActive} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import {Link} from 'react-router-dom';
import './addPhoneNumber.css';
import{connect} from 'react-redux';
import { toast } from 'react-toastify';
import API from '../../services';

class AddPhoneNumber extends Component {

    state = {
        btn:{},
        icNumber:icPhone,
        number:{},
        form:{
            phone:''
        }
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

    uiNumber()
    {
        this.setState({
            btn:{backgroundColor:'#6379F4',color:'white'},
            icNumber:icPhoneActive,
            number:{border:'1.6px solid #6379F4'}
        })
    }
    addNumber(id)
    {

        if (!this.state.form.phone) {
            toast.error("Phone number is required!",{position:toast.POSITION.TOP_CENTER})
            return false
        }
        API.AddPhoneNumber(this.state.form.phone)
        .then(res => {
             this.props.history.push('/profile/manage-phone-number')
             toast.success("Success add number!",{position:toast.POSITION.TOP_CENTER})
        })
        .catch(err => {
          toast.error("Failed add number!",{position:toast.POSITION.TOP_CENTER})
          console.error(err)
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
                                    <a href="/dashboard" className="ml-md-4 d-block dashboard-pr text-center text-lg-left">
                                        <img alt="" src={icGrid} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                    </Link>
                                    <Link to="/transfer">
                                    <a href="receiver.html" className="ml-md-4 d-block transfer-pr text-center text-lg-left">
                                        <img alt="" src={icArrowUp} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                    </Link>
                                    <Link to="/top-up">
                                    <a href="top-up"  className="ml-md-4 d-block top-up-pr text-center text-lg-left" >
                                        <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                    </a>
                                    </Link>
                                    <Link to="/profile">
                                    <a href="/" className="ml-md-4 d-block profile-pr text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icUserActive} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Profile</span>
                                    </a>
                                    </Link>
                                    </div>
                                    <a href="login.html" className="ml-md-4 d-block logout-rc text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">

                            <div className="body-area-add-number"> 
                                <div className="d-block d-sm-none">
                                    <NavigationMobile page="Add Phone Number" to="/profile"/>
                                </div>
                            
                                <div className="row ">
                                    <div className="col-12">
                                        <h1 className="d-none d-sm-block">Add Phone Number</h1>
                                        <p className="text-center text-sm-left">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>

                                        <div align="center" className="change-phone">

                                            <div className="form-group phone col-lg-7">
                                                <input type="number" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " style={this.state.number} onClick={() => this.uiNumber()} placeholder="Enter your phone number" name="phone" value={this.state.form.phone} onChange={this.handleForm} />
                                                <div className="icon-input">
                                                    <img alt="" src={this.state.icNumber} /> 
                                                    &nbsp;&nbsp;
                                                    <span>+62</span>
                                                </div>

                                            </div>

                                            <div className="form-button col-lg-7" >
                                                <button className="btn btn-primary d-none d-sm-block" type="submit" style={this.state.btn} onClick={() => this.addNumber(this.props.userData.id)}>Add Phone Number</button>
                                                <button className="btn btn-primary d-block d-sm-none" type="submit" style={this.state.btn} onClick={() => this.addNumber(this.props.userData.id)}>Submit</button>
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
 
const mapStateToProps = (state) => {
    return {
        userData: state
    }
}


export default connect(mapStateToProps)(AddPhoneNumber);