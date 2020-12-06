import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut, icPlus,icUserActive, icLine} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import {Link} from 'react-router-dom';
import './changePin.css';
import { toast } from 'react-toastify';
import API from '../../services';

class ChangePin extends Component {

    state = {
        data:[],
        title:'Enter your current 6 digits Zwallet PIN below to continue to the next steps.',
        form : {
            pin1 : '',
            pin2 : '',
            pin3 : '',
            pin4 : '',
            pin5 : '',
            pin6 : '',
        }
    }

    componentDidMount()
    {
        var login = localStorage.getItem("login");
        if (login === 'true') {
              var dataLogin = JSON.parse(localStorage.getItem("dataLogin")).data[0];
              this.setState({data:dataLogin})    
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


    changePin()
    {
            if (!this.state.form.pin1 || !this.state.form.pin2 || !this.state.form.pin3 || !this.state.form.pin4 || !this.state.form.pin5 || !this.state.form.pin6) {
                toast.error("Pin is required!",{position:toast.POSITION.TOP_CENTER})
                return false   
            }

            let data = {
                pin : this.state.form.pin1 + this.state.form.pin2 + this.state.form.pin3 + this.state.form.pin4 + this.state.form.pin5 + this.state.form.pin6
            }
            

            if (!localStorage.getItem('changePin')) {
                localStorage.setItem('changePin',data.pin)
                this.setState({
                    form : {
                        pin1 : '',
                        pin2 : '',
                        pin3 : '',
                        pin4 : '',
                        pin5 : '',
                        pin6 : '',
                    }
                })
                this.setState({title:'Type your new 6 digits security PIN to use in Zwallet.'})
            }else{

                let save = {
                    pin :localStorage.getItem('changePin'),
                    newPin:data.pin
                }
                API.ChangePin(save)
                .then(res => {
                    this.setState({
                        form : {
                            pin1 : '',
                            pin2 : '',
                            pin3 : '',
                            pin4 : '',
                            pin5 : '',
                            pin6 : '',
                        }
                    })
                    toast.success("Pin have been changed",{position:toast.POSITION.TOP_CENTER})
                    localStorage.removeItem('changePin')
                    this.setState({title:'Enter your current 6 digits Zwallet PIN below to continue to the next steps.'})
                })
                .catch(err => {
                    localStorage.removeItem('changePin')
                    this.setState({
                        form : {
                            pin1 : '',
                            pin2 : '',
                            pin3 : '',
                            pin4 : '',
                            pin5 : '',
                            pin6 : '',
                        }
                    })
                    toast.error("failed change pin!",{position:toast.POSITION.TOP_CENTER})
                    this.setState({title:'Enter your current 6 digits Zwallet PIN below to continue to the next steps.'})
                    console.error(err)
                });
            }




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
                            
                                <div className="body-area-change-pin"> 
                                    <div className="d-block d-sm-none">
                                        <NavigationMobile page="Change Password" to="/profile"/>
                                    </div>
                                    <div className="row ">
                                        <div className="col-12">
                                            <h1>Change PIN</h1>
                                             <p>{this.state.title}</p>
                                        
                                        
                                            <div align="center">
                                            <div  className="pin col-xl-7">
                                                    <div className="container">
                                                        <div className="row justify-content-between">
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin1} maxLength="1" name="pin1" onChange={this.handleForm} />
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin2} name="pin2" maxLength="1" onChange={this.handleForm} />
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin3} name="pin3" maxLength="1" onChange={this.handleForm} />
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin4} name="pin4" maxLength="1" onChange={this.handleForm} />
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin5} name="pin5" maxLength="1" onChange={this.handleForm} />
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                            <div className="form-input-pin">
                                                                <input type="text" className="form-control pin-verify d-inline" value={this.state.form.pin6} name="pin6" maxLength="1" onChange={this.handleForm}/>
                                                                <img alt="" src={icLine} className="input-line" />
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div> 
                                                <div className="form-button col-lg-7">
                                                    <button className="btn btn-primary" type="submit" onClick={() => this.changePin()} >Continue</button>
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
 
export default ChangePin;