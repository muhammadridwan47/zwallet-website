import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut, icPlus,icUserActive, icLock, icEyeCrossed,icLockActive, icLockWrong} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import {Link} from 'react-router-dom';
import './changePassword.css';
import{connect} from 'react-redux';
import { toast } from 'react-toastify';
import API from '../../services';


class ChangePassword extends Component {

    state = {
        icPassword1:icLock,
        icPassword2:icLock,
        icPassword3:icLock,
        btn:{},
        passClick1:{},
        passClick2:{},
        passClick3:{},
        show1:false,
        show2:false,
        show3:false,
        form : {
            currentPassword :'',
            newPassword: '',
            repeatNewPassword:''
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


    changePassword()
    {
        if (!this.state.form.currentPassword) {
            toast.error("Current password is required!",{position:toast.POSITION.TOP_CENTER})
            this.setState({
                icPassword1:icLockWrong,
                passClick1:{border:'1.6px solid #FF5B37'}
            })
            return false
        }
        if (!this.state.form.newPassword) {
            toast.error("New password is required!",{position:toast.POSITION.TOP_CENTER})
            this.setState({
                icPassword2:icLockWrong,
                passClick2:{border:'1.6px solid #FF5B37'}
            })
            return false
        }
        if (!this.state.form.repeatNewPassword) {
            toast.error("Repeat password is required!",{position:toast.POSITION.TOP_CENTER})
            this.setState({
                icPassword3:icLockWrong,
                passClick3:{border:'1.6px solid #FF5B37'}
            })
            return false
        }

        if (this.state.form.newPassword === this.state.form.repeatNewPassword) {
            
            let data = {
                password : this.state.form.currentPassword,
                newPassword : this.state.form.newPassword
            }
            API.ChangePassword(data)
            .then(res => {
                this.setState({
                    form : {
                        currentPassword :'',
                        newPassword: '',
                        repeatNewPassword:''
                    }
                })
            })
            .catch(err => {
                toast.error("Failed change password!",{position:toast.POSITION.TOP_CENTER})
            })
            // data = qs.stringify(data);
            // const token = localStorage.getItem("jwt");
            // const headers = { headers: {'Authorization': `${token}`}}   
            // axios.patch(`${process.env.REACT_APP_API}/user/change_password`,data,headers)
            // .then(res => {
            //   console.log(res.data)
            //   this.setState({
            //     form : {
            //         currentPassword :'',
            //         newPassword: '',
            //         repeatNewPassword:''
            //     }
            //   })
            // })
            // .catch(err => {
            //   console.error(err)
            //   toast.error("Failed change password!",{position:toast.POSITION.TOP_CENTER})
            // });

        }else{
            toast.error("New password and Repeat new password must be same!",{position:toast.POSITION.TOP_CENTER})
            this.setState({
                icPassword2:icLockWrong,
                passClick2:{border:'1.6px solid #FF5B37'},
                icPassword3:icLockWrong,
                passClick3:{border:'1.6px solid #FF5B37'},
            })
            return false
        }

    }

    uiPassword1()
    {
        this.setState({
            btn:{backgroundColor:'#6379F4',color:'white'},
            icPassword1:icLockActive,
            passClick1:{border:'1.6px solid #6379F4'}
        })
    }

    uiPassword2()
    {
        this.setState({
            btn:{backgroundColor:'#6379F4',color:'white'},
            icPassword2:icLockActive,
            passClick2:{border:'1.6px solid #6379F4'}
        })
    }
    uiPassword3()
    {
        this.setState({
            btn:{backgroundColor:'#6379F4',color:'white'},
            icPassword3:icLockActive,
            passClick3:{border:'1.6px solid #6379F4'}
        })
    }

    render() { 
        return ( 
            <>
                <div className="d-none d-sm-block">
                      <Navbar/>
                </div>


                    <div className="container content">
                        <div className="d-block d-sm-none">
                            <NavigationMobile page="Change Password" to="/profile"/>
                        </div>
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
                                    <a href="/auth/logout" className="ml-md-4 d-block logout-rc text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                            
                            <div className="body-area-change-password"> 
                                    <div className="row ">
                                        <div className="col-12">
                                            <div className="d-none d-sm-block">
                                               <h1>Change Password</h1>
                                            </div>
                                            <p>You must enter your current password and then type your new password twice.</p>

                                            <div align="center" className="change-password">

                                                <div className="form-group password col-lg-7">
                                                    <input type={this.state.show1 ? "text" : "password"}  style={this.state.passClick1} onClick={() => this.uiPassword1()} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="Current password" name="currentPassword" value={this.state.form.currentPassword} onChange={this.handleForm}  />
                                                    <div className="icon-input">
                                                        <img alt="" src={this.state.icPassword1} />
                                                    </div>
                                                    <div className="eye-crossed" onClick={ () => this.setState({show1: this.state.show1 === false ? true : false})}>
                                                        <img alt="" src={icEyeCrossed} />
                                                    </div>
                                                </div>

                                                <div className="form-group password col-lg-7">
                                                    <input type={this.state.show2 ? "text" : "password"} style={this.state.passClick2} onClick={() => this.uiPassword2()} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="New password" name="newPassword" value={this.state.form.newPassword} onChange={this.handleForm} />
                                                    <div className="icon-input">
                                                        <img alt="" src={this.state.icPassword2} />
                                                    </div>
                                                    <div className="eye-crossed" onClick={ () => this.setState({show2: this.state.show2 === false ? true : false})}>
                                                        <img alt="" src={icEyeCrossed} />
                                                    </div>
                                                </div>

                                                <div className="form-group password col-lg-7">
                                                    <input  type={this.state.show3 ? "text" : "password"} style={this.state.passClick3} onClick={() => this.uiPassword3()}  className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="Repeat new password" name="repeatNewPassword" value={this.state.form.repeatNewPassword} onChange={this.handleForm} />
                                                    <div className="icon-input">
                                                        <img alt="" src={this.state.icPassword3} />
                                                    </div>
                                                    <div className="eye-crossed" onClick={ () => this.setState({show3: this.state.show3 === false ? true : false})}>
                                                        <img alt="" src={icEyeCrossed} />
                                                    </div>
                                                </div>
                                                <div className="form-button col-lg-7">
                                                    <button className="btn btn-primary" style={this.state.btn} type="submit" onClick={() => this.changePassword()} >Change Password</button>
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


export default connect(mapStateToProps)(ChangePassword);