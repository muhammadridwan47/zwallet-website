import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { icSuccess, imDoublePhone } from '../../assets';
import './registerSuccess.css'
class RegisterSuccess extends Component {

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
          <div className="col-md-6">
            <div className="success-information">
              <div className="logos" >
                <img alt="" src={icSuccess} />

                <h2>Your PIN Was Successfully Created</h2>
                <p>
                  Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!
                                </p>


                <div className="form-group">
                  <div className="form-button col-xl-8">
                    <Link to="/auth">
                      <button className="btn btn-primary" type="submit" >Login Now</button>
                    </Link>
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

export default RegisterSuccess;