import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
   icLock,
   icMail,
   imDoublePhone,
   icEyeCrossed,
   icMailActive,
   icLockActive,
   icMailWrong,
   icLockWrong 
} from '../../assets';
import './login.css';
import API from '../../services';
class Login extends Component {

  state = {
    icMail: icMail,
    error: false,
    icPassword: icLock,
    mailClick: {},
    passClick: {},
    btn: {},
    form: {
      email: '',
      password: ''
    },
    show: false
  }

  handleForm = (event) => {
    let newForm = this.state.form;
    newForm[event.target.name] = event.target.value;
    this.setState({
      newForm: newForm
    }
    )
  }

  login = () => {
    API.Login(this.state.form)
    .then(res => {
      if (res == '100') {
        this.props.history.push('/dashboard')
      }else{
        this.props.history.push('/admin')
      }
    })
    .catch(err => {
      this.setState({
        icMail: icMailWrong,
        mailClick: { border: '1.6px solid #FF5B37' },
        icPassword: icLockWrong,
        passClick: { border: '1.6px solid #FF5B37' },
        error: true
      })
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
      <div>
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
          <div className="col-md-6 login-col">
            <div className="login-container">
              <div className="login">
                <h3 className="title-mobile d-sm-none">ZWALLET</h3>

                <h2>Start Accessing Banking Needs
                With All Devices and All Platforms
                                    With 30.000+ Users</h2>
                <p className="desc">Transfering money is eassier than ever, you can access
                                    Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>


                <div className="form-group">
                  <div className="title-mobile">
                    <h4 className="d-sm-none">Login</h4>
                    <div className="helper-text d-sm-none">Login to your existing account to access
                                        all the features in Zwallet.</div>
                  </div>

                  <div className="form-group email col-lg-8">
                    <input type="email" autocomplete="off" style={this.state.mailClick} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " onClick={() => this.uiEmail()} placeholder="Enter your e-mail" value={this.state.form.email} name="email" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icMail} />
                    </div>
                  </div>
                  <div className="form-group password col-lg-8">
                    <input type={this.state.show ? "text" : "password"} style={this.state.passClick} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " onClick={() => this.uiPassword()} placeholder="Enter your password" value={this.state.form.password} name="password" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icPassword} />
                    </div>
                    <div className="eye-crossed" onClick={() => this.showPassword()} style={{ cursor: 'pointer' }}>
                      <img alt="" src={icEyeCrossed} />
                    </div>
                    <div className="forgot-password ">
                      <p><a href="/auth/forgot-password">Forgot password?</a></p>
                    </div>
                  </div>

                  <div className="form-button col-lg-8">
                    {this.state.error && <span className="text-center d-block error-logic" style={{ color: '#FF5B37', fontSize: 18, fontWeight: 600, marginBottom: -20 }}>Email or Password Invalid</span>}

                    <button className="btn btn-primary" style={this.state.btn} type="submit" onClick={this.login} >Login</button>
                  </div>
                  <div className="sign-up text-center col-lg-8">
                    <p>Don’t have an account? Let’s <Link to="/auth/register">Sign Up</Link> </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
