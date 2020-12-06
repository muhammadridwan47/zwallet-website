import React, { Component } from 'react'
import { icLine, imDoublePhone } from '../../assets';
import qs from 'qs'
import axios from 'axios'
import './createPin.css'
import { toast } from 'react-toastify';
class CreatePin extends Component {
  state = {
    show: false,
    email:localStorage.getItem('register_email'),
    form : {
      pin1 : '',
      pin2 : '',
      pin3 : '',
      pin4 : '',
      pin5 : '',
      pin6 : '',
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



  onConfirm() {



    if (!this.state.form.pin1 || !this.state.form.pin2 || !this.state.form.pin3 || !this.state.form.pin4 || !this.state.form.pin5 || !this.state.form.pin6) {
        toast.error("Pin is required!",{position:toast.POSITION.TOP_CENTER})
        return false
    }


    let data = {
      email:`${this.state.email}`,
      pin: parseInt(this.state.form.pin1 + this.state.form.pin2 + this.state.form.pin3 + this.state.form.pin4 + this.state.form.pin5 + this.state.form.pin6),
    }

    data = qs.stringify(data);
    axios.patch(`${process.env.REACT_APP_API}/auth/create_pin`,data)
      .then(res => {
        console.log(res.data)
        if (res.data.success == true) {
          localStorage.clear();
          this.props.history.push('/auth/success');
        }
      }).catch(err => {
        console.error(err)
      });

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
          <div className="col-md-6 col-pin">
            <div className="login-container">
              <div className="login">
                <h3 className="title-mobile d-sm-none">ZWALLET</h3>
                <h2>Secure Your Account, Your Wallet,
                and Your Data With 6 Digits PIN
                That You Created Yourself.
                                </h2>
                <p className="desc">
                  Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                                </p>


                <div className="form-group">
                  <div className="title-mobile">
                    <h4 className="d-sm-none">Create Security PIN</h4>
                    <div className="helper-text d-sm-none">
                      Create a PIN that’s contain 6 digits number for security purpose in Zwallet.
                    </div>
                  </div>
                  <div className="pin col-xl-8">
                    <div className="container">
                      <div className="row justify-content-between">
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin1" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin2" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin3" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin4" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin5" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>
                        <div className="form-input-pin">
                          <input type="text" className="form-control pin-verify d-inline" name="pin6" onChange={this.handleForm} maxLength="1"/>
                          <img alt="" src={icLine} className="input-line" />
                        </div>

                      </div>
                    </div>

                  </div>
                  <div className="form-button col-xl-8">
                    <button className="btn" type="submit" onClick={() => this.onConfirm()}>Confirm</button>
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

export default CreatePin;