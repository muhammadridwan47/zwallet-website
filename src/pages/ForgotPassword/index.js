import React, { Component } from 'react';
import { icLock, icMail, imDoublePhone, icMailActive, icMailWrong } from '../../assets';
import './forgotPassword.css';
import { toast } from 'react-toastify';
class ForgotPassword extends Component {

  state = {
    icMail: icMail,
    error: false,
    icPassword: icLock,
    mailClick: {},
    passClick: {},
    btn: {},
    form: {
      email: ''
    },
    show: false
  }

  forgot = () => {
    if (!this.state.form.email) {
      toast.error("Email is required!",{position:toast.POSITION.TOP_CENTER})
      this.setState({
        icMail:icMailWrong,
        mailClick: { border: '1.6px solid #FF5B37' }
      })
      return false
    }

    localStorage.setItem('resetPasswordEmail',this.state.form.email)
    this.props.history.push('/auth/new-password')
  }



  handleForm = (event) => {
    let newForm = this.state.form;
    newForm[event.target.name] = event.target.value;
    this.setState({
      newForm: newForm
    },
      () => {
        console.log(newForm);
      }
    )
  }


  uiEmail() {

    this.setState({
      icMail: icMailActive,
      mailClick: { border: '1.6px solid #6379F4' },
      btn: { backgroundColor: '#6379F4', color: 'white' },
    })
  }

  render() {

    return (
      <>
        <div className="row">
          <div className="col-md-6 information p-2 p-sm-5 d-none d-sm-block">
            <div className="container">
              <div className="logo">
                <h1 className="ml-4">Zwallet</h1>
              </div>
              <div className="image">
                <img alt="" src={imDoublePhone} className="img-fluid" />
              </div>
              <div className="description ml-4">
                <h2>App that Covering Banking Needs.</h2>
                <p>Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                                    5000+ users registered in Zwallet everyday with  worldwide<br />
                                    users coverage.</p>

              </div>
            </div>
          </div>
          <div className="col-md-6 col-forgot">
            <div className="login-container">
              <div className="forgot-password">
                <h3 className="title-mobile d-sm-none">ZWALLET</h3>
                <h2>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                <p className="desc">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>


                <div className="form-group">
                  <div className="title-mobile">
                    <h4 className="d-sm-none">Reset Password</h4>
                    <div className="helper-text d-sm-none">
                      Enter your Zwallet e-mail so we can send
                      you a password reset link.
                    </div>
                  </div>
                  <div className="form-group email col-lg-8">
                    <input type="email" autocomplete="off" style={this.state.mailClick} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " onClick={() => this.uiEmail()} placeholder="Enter your e-mail" value={this.state.form.email} name="email" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icMail} />
                    </div>
                  </div>

                  <div className="form-button col-lg-8">
                    {this.state.error && <span className="text-center d-block " style={{ color: '#FF5B37', fontSize: 18, fontWeight: 600, marginBottom: -20 }}>Email or Password Invalid</span>}
                    <button className="btn btn-primary mt-5 mt-md-3" style={this.state.btn} type="submit" onClick={this.forgot} >Confirm</button>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ForgotPassword;
