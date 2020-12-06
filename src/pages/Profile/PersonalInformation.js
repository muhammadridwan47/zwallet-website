import React,{Component} from 'react';
import { icArrowUp ,icGrid, icLogOut, icPlus,icUserActive} from '../../assets';
import { Navbar,Footer, NavigationMobile} from '../../component/molecules';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './personalInformation.css';

class PersonalInformation extends Component {
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
                                    <a href="/auth/logout" className="ml-md-4 d-block logout-rc text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                            <div className="body-area-profile-personal"> 
                                    <div className="row ">
                                        <div className="col-12">
                                            <h1 className="d-none d-sm-block">Personal Information</h1>
                                            <div className="d-block d-sm-none">
                                                <NavigationMobile page="Personal Information" to="/profile"/>
                                            </div>

                                            <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>


                                            <div className="card-personal-information">
                                                <span>First Name</span>
                                                <h2>
                                                {
                                                 this.props.userData.fullName.split(' ')[0]
                                                }
                                                </h2>
                                            </div>
                                            <div className="card-personal-information">
                                                <span>Last Name</span>
                                                <h2>
                                                {
                                                 this.props.userData.fullName.split(' ')[1]
                                                }
                                                </h2>
                                            </div>
                                            <div className="card-personal-information">
                                                <span>Verified E-mail</span>
                                                <h2>{this.props.userData.email}</h2>
                                            </div>
                                            <div className="card-personal-information">
                                                <span>Phone Number</span>
                                                <h2>{this.props.userData.phone && '+'+this.props.userData.phone}</h2>
                                                <Link to="/profile/manage-phone-number">
                                                    <span className="manage">
                                                        Manage
                                                    </span>
                                                </Link>
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


export default connect(mapStateToProps)(PersonalInformation);