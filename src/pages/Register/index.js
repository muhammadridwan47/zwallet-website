import React, { Component } from 'react'
import { icEyeCrossed, icLock, icMail, icPerson, imDoublePhone, icLockActive, icMailActive, icPersonActive, icLockWrong, icMailWrong } from '../../assets';
import './register.css';
import { toast } from 'react-toastify';
import API from '../../services';
class Register extends Component {
  state = {
    icUsername: icPerson,
    icMail: icMail,
    icPassword: icLock,
    usernameClick: {},
    mailClick: {},
    passClick: {},
    btn: {},
    form: {
      email: '',
      password: '',
      fullName: '',
      userName: '',

    },
    show: false
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
  onRegister() {

    if (!this.state.form.userName) {
      toast.error("Username is required!",{position:toast.POSITION.TOP_CENTER})
      this.setState({
        usernameClick: { border: '1.6px solid #FF5B37' },

      })
      return false
    }

    if (!this.state.form.email) {
      toast.error("Email is required!",{position:toast.POSITION.TOP_CENTER})
      this.setState({
        mailClick: { border: '1.6px solid #FF5B37' },
        icMail:icMailWrong
      })
      return false
    }
    if (!this.state.form.password) {
      toast.error("Password is required!",{position:toast.POSITION.TOP_CENTER})
      this.setState({
        passClick: { border: '1.6px solid #FF5B37' },
        icPassword: icLockWrong,
      })
      return false
    }
    let data = {
      email: this.state.form.email,
      password: this.state.form.password,
      fullName: this.state.form.userName,
    }
    API.Register(data)
    .then(res => {
      this.props.history.push('/auth/create-pin')
    })
  }
  showPassword() {
    if (this.state.show === false) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }

  }
  uiUsername() {

    this.setState({
      icUsername: icPersonActive,
      usernameClick: { border: '1.6px solid #6379F4' }
    })
  }
  uiEmail() {

    this.setState({
      icMail: icMailActive,
      mailClick: { border: '1.6px solid #6379F4' }
    })
  }
  uiPassword() {
    this.setState({
      btn: { backgroundColor: '#6379F4', color: 'white' },
      icPassword: icLockActive,
      passClick: { border: '1.6px solid #6379F4' }
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
          <div className="col-md-6 sign-up-col">
            <div className="sign-up-container">
              <div className="sign-up">
                <h3 className="title-mobile d-sm-none">ZWALLET</h3>
                <h2>Start Accessing Banking Needs
                With All Devices and All Platforms
                                    With 30.000+ Users</h2>
                <p className="desc">Transfering money is eassier than ever, you can access
                                    Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>


                <div className="form-group">
                  <div className="title-mobile">
                    <h4 className="d-sm-none">Sign Up</h4>
                    <div className="helper-text d-sm-none">
                      Create your account to access Zwallet.
                    </div>
                  </div>
                  <div className="form-group username col-lg-8">
                    <input type="text" style={this.state.usernameClick} onClick={() => this.uiUsername()} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="Enter your username" value={this.state.form.userName} name="userName" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icUsername} />
                    </div>
                  </div>
                  <div className="form-group email col-lg-8">
                    <input type="email" autocomplete="off" style={this.state.mailClick} onClick={() => this.uiEmail()} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="Enter your e-mail" value={this.state.form.email} name="email" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icMail} />
                    </div>
                  </div>
                  <div className="form-group password col-lg-8">
                    <input type={this.state.show ? "text" : "password"} style={this.state.passClick} onClick={() => this.uiPassword()} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " placeholder="Enter your password" value={this.state.form.password} name="password" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icPassword} />
                    </div>
                    <div className="eye-crossed" onClick={() => this.showPassword()} style={{ cursor: 'pointer' }}>
                      <img alt="" src={icEyeCrossed} />
                    </div>
                  </div>

                  <div className="form-button col-lg-8 mt-1">
                    <button className="btn btn-primary" style={this.state.btn} type="submit" onClick={() => this.onRegister()} >Sign Up</button>
                  </div>
                  <div className="sign-in text-center col-lg-8">
                    <p>Already have an account? Let’s <a href="/auth">Login</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;