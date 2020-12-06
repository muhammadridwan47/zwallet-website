import React, { Component } from 'react';
import { icArrowUp, icGrid, icLogOut, icPlus, icUserActive, icPencilSmall, icArrowLeft, icX } from '../../assets';
import { Navbar, Footer, NavigationMobile } from '../../component/molecules';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './profile.css';
import API from '../../services';


class Profile extends Component {

  state = {
    avatarOver: false,
    selectedFile: null,
    fullName: ''
  }

  editProccess() {
    this.setState({
      fullName: this.props.userData.fullName
    })
  }

  overImage() {
    this.setState({
      avatarOver: true
    })
  }

  moveImage() {
    this.setState({
      avatarOver: false
    })
  }

  changeName(e) {
    this.setState({
      fullName: e.target.value
    })
  }
  //upload image
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  uploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'images',
      this.state.selectedFile,
    )
    formData.append(
      'fullName', this.state.fullName
    )
      if (formData.get('images') == 'null') {

        API.UploadImage({fullName:this.state.fullName})
        .then(res => {
          API.GetData()
          .then(res => {
            this.props.setData(res);
          })
        })
      }else{

            API.UploadImage(formData)
            .then(res => {
              API.GetData()
              .then(res => {
                this.props.setData(res);
              })
            })
      }

  }


  render() {
    return (
      <>
        <div className="d-none d-sm-block">
          <Navbar />
        </div>

        <div className="container content">
          <div className="row">
            <div className="col-3 bg-white shadow-lg sidebar_menu">
              <div className="sidebar h-100 d-flex pb-5" style={{ flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
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
                    <a href="top-up" className="ml-md-4 d-block top-up-pr text-center text-lg-left" >
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
              <div className="body-area-profile">

                <div className="d-block d-sm-none mt-4">
                  <NavigationMobile to="/dashboard" />
                </div>

                <div className="row ">
                  <div className="col-12 text-center ">

                    <img alt="" src={process.env.REACT_APP_API_IMAGE+this.props.userData.photo} className="img-fluid profile-image" />
                    <span className="d-block btn-edit" onClick={() => this.editProccess()} data-toggle="modal" data-target="#staticBackdrop"><img src={icPencilSmall} alt="" />&nbsp;&nbsp;Edit</span>
                    <h1>{this.props.userData.fullName}</h1>
                    <p>{this.props.userData.phone && '+'+this.props.userData.phone}</p>
                    <div align="center">
                      <Link to="/profile/personal-information">
                        <div className="card-profile text-left d-flex justify-content-between align-self-center" >
                          <p >Personal Information</p>
                          <img className="mt-2" src={icArrowLeft} alt="" />
                        </div>
                      </Link>
                    </div>
                    <div align="center">
                      <Link to="/profile/change-password">
                        <div className="card-profile text-left d-flex justify-content-between align-self-center" >
                          <p >Change Password</p>
                          <img className="mt-2" src={icArrowLeft} alt="" />
                        </div>
                      </Link>
                    </div>
                    <div align="center">
                      <Link to="/profile/change-pin">
                        <div className="card-profile text-left d-flex justify-content-between align-self-center" >
                          <p >Change PIN</p>
                          <img className="mt-2" src={icArrowLeft} alt="" />
                        </div>
                      </Link>
                    </div>
                    <div align="center">
                      <Link >
                        <div className="card-profile text-left d-flex justify-content-between align-self-center d-sm-none" >
                          <p >Notification</p>
                        </div>
                      </Link>
                    </div>
                    <div align="center">
                      <Link to="/auth/logout">
                        <div className="card-profile text-left d-flex justify-content-between align-self-center" >
                          <p >Logout</p>
                        </div>
                      </Link>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>
        <Footer />



        <div className="modal fade edit-image" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header border-0 p-0 ">
                <h5 >Edit your profile</h5>
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
                        <img className="avatar" src={process.env.REACT_APP_API_IMAGE+this.props.userData.photo} alt="" />

                      </div>
                      <input type="text" name="fullName" value={this.state.fullName} onChange={(e) => this.changeName(e)} className="form-control d-inline mt-4" placeholder="Edit your name" />
                    </div>

                  </div>
                </div>

              </div>
              <div className="modal-footer border-0 p-0 ">
                <button type="button" className="btn btn-primary" onClick={this.uploadHandler} >Edit</button>
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
const mapDispatchTOProps = (dispatch) => {
  return {
    setData: (value) => dispatch({ type: 'SET_DATA', value: value }),

  }
}


export default connect(mapStateToProps, mapDispatchTOProps)(Profile);