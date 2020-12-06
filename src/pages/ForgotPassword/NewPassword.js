import React, { Component } from 'react';
import { icLock, icMail, imDoublePhone, icEyeCrossed, icMailActive, icLockActive, icLockWrong } from '../../assets';
import { toast } from 'react-toastify';
import './newPassword.css';
import API from '../../services';
class NewPassword extends Component {

  state = {
    icMail: icMail,
    error: false,
    icPassword: icLock,
    mailClick: {},
    passClick: {},
    btn: {},
    form: {
      newPassword: '',
      confirmPassword: ''
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


  resetPassword()
  {
    if (!this.state.form.newPassword) {
      toast.error("Field new password is required!",{position:toast.POSITION.TOP_CENTER})
      return false
    }
    if (!this.state.form.confirmPassword) {
      toast.error("Field confirm password is required!",{position:toast.POSITION.TOP_CENTER})
      return false
    }
    if (this.state.form.newPassword !== this.state.form.confirmPassword ) {
        toast.error("The password must be same!",{position:toast.POSITION.TOP_CENTER});
        this.setState({
          icPassword:icLockWrong,
          passClick: { border: '1.6px solid #FF5B37' }
        });
    }else{
      if (this.state.form.newPassword.length > 7 ) {

        let data = {
          email: localStorage.getItem('resetPasswordEmail'),
          password: this.state.form.confirmPassword,
        }

        API.ForgotPassword(data)
        .then(res => {
            if (res.data.success == true) {
                  this.setState({
                      form : {
                          newPassword :'',
                          confirmPassword: ''
                      }
                  })
            }
            toast.success("Reset Password Successfully!",{position:toast.POSITION.TOP_CENTER});
        })
        .catch(err => {
          toast.error("Failed Reset Password!",{position:toast.POSITION.TOP_CENTER});
        })

      }else{
        toast.error("Password min length 8!",{position:toast.POSITION.TOP_CENTER});
      }
    }
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
          <div className="col-md-6 col-forgot">
            <div className="login-container">
              <div className="login">
                <h3 className="title-mobile d-sm-none">ZWALLET</h3>
                <h2>Start Accessing Banking Needs
                With All Devices and All Platforms
                                    With 30.000+ Users</h2>
                <p class="desc">Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.</p>


                <div className="form-group">
                  <div className="title-mobile">
                    <h4 className="d-sm-none">Reset Password</h4>
                    <div className="helper-text d-sm-none">
                      Create and confirm your new password so
                      you can login to Zwallet.
                    </div>
                  </div>
                  <div className="form-group password col-lg-8" style={{ marginBottom: 74 }}>
                    <input type={this.state.show ? "text" : "password"} style={this.state.passClick} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " onClick={() => this.uiPassword()} placeholder="Create new password" value={this.state.form.newPassword} name="newPassword" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icPassword} />
                    </div>
                    <div className="eye-crossed" onClick={() => this.showPassword()} style={{ cursor: 'pointer' }}>
                      <img alt="" src={icEyeCrossed} />
                    </div>

                  </div>

                  <div className="form-group password col-lg-8">
                    <input type={this.state.show ? "text" : "password"} style={this.state.passClick} className="form-control border-top-0 border-left-0 border-right-0 rounded-0 " onClick={() => this.uiPassword()} placeholder="Confirm new password" value={this.state.form.confirmPassword} name="confirmPassword" onChange={this.handleForm} />
                    <div className="icon-input">
                      <img alt="" src={this.state.icPassword} />
                    </div>
                    <div className="eye-crossed" onClick={() => this.showPassword()} style={{ cursor: 'pointer' }}>
                      <img alt="" src={icEyeCrossed} />
                    </div>

                  </div>

                  <div className="form-button col-lg-8 mt-4 mt-md-4">
                    {this.state.error && <span className="text-center d-block " style={{ color: '#FF5B37', fontSize: 18, fontWeight: 600, marginBottom: -20 }}>Email or Password Invalid</span>}

                    <button className="btn btn-primary" style={this.state.btn} type="submit" onClick={() => this.resetPassword()} >Reset Password</button>
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

export default NewPassword;
