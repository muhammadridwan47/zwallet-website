import React from 'react';
import { 
    bgLanding,
    imFeedBack1,
    imFeedBack2, 
    imFeedBack3, 
    imPhone, imPhoneDashboard, 
    SpAirbnb,
    SpCanon, 
    SpDell, 
    SpDropBox, 
    SpHM, 
    SpMicrosoft,
    icPhoneAbout,
    icLockAbout, 
    icDownloadAbout
} from '../../assets';
import './home.css';
import {Link} from 'react-router-dom';

export default function index() {

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <a className="navbar-brand" href="transfer">Zwallet</a>
                <button className="navbar-toggler bg-white"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                        <Link to='auth'><button className="btn login" >Login </button></Link>
                        <Link to='auth/register'><button className="btn sign-up">Sign Up</button></Link>
                    </div>
                </div> 
                </div>
            </nav>

            <div className="header">
                <img alt="" src={bgLanding}  className="layer" />
                <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                            <h1>Awesome App For Saving <span>Time.</span></h1>
                            <p>We bring you a mobile app for banking problems that
                                oftenly wasting much of your times.</p>
                            <button className="btn">
                                Try It Free
                            </button>
                    </div>
                    <div className="col-md-6">
                        <img alt="" src={imPhone} className="phone-image img-fluid" />
                    </div>
                </div>
                </div>
            </div>



            <section className="about-aplication">
                <div className="container text-center justify-content-center">
                    <h1><span>About</span> the Application.</h1>
                    <p className="m-auto">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                    <div className="row justify-content-center ">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card-about text-center mx-auto">
                                    <img alt="" src={icPhoneAbout} />
                                    <h4>24/7 Support</h4>
                                    <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card-about text-center mx-auto">
                                <img alt="" src={icLockAbout} />
                                <h4>Data Privacy</h4>
                                <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-about text-center mx-auto">
                                <img alt="" src={icDownloadAbout} />
                                <h4>Easy Download</h4>
                                <p>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sponsored">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1>100+ <span>Trusted</span> Partners.</h1>
                            <p>We have reached global level and have 100+ brand partners around the globe.</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-lg-12 col-6 ">
                                    <div className="brand d-flex ">
                                        <img alt="" src={SpAirbnb} />
                                        <img alt="" src={SpCanon} />
                                        <img alt="" src={SpDell} />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-6">
                                    <div className="brand d-flex " >
                                        <img alt="" src={SpMicrosoft} />
                                        <img alt="" src={SpDropBox} />
                                        <img alt="" src={SpHM} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            

            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img alt="" src={imPhoneDashboard} className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                                <h1>All The <span>Great</span> Zwallet Features.</h1>
                                <div className="card-feature first-card">
                                    <h4><span className="mr-3">1.</span>Small Fee</h4>
                                    <p>We only charge 5% of every success transaction done in Zwallet app.</p>
                                </div>
                                <div className="card-feature">
                                    <h4><span className="mr-3">2.</span>Data Secured</h4>
                                    <p>All your data is secured properly in our system and it’s encrypted.</p>
                                </div>
                                <div className="card-feature">
                                    <h4><span className="mr-3">3.</span>User Friendly</h4>
                                    <p>Zwallet come up with modern and sleek design and not complicated.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>           

            <section className="feedback">
                <div className="container text-center">
                    <h1>What Users are <span>Saying.</span></h1>
                    <p>We have some great features from the application and it’s totally free to use by all users around the world.</p>


                    <div className="row justify-content-center ">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card-feedback text-center mx-auto ">
                                    <img alt="" src={imFeedBack1} />
                                    <h4>Sherina Chaw</h4>
                                    <p>“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="card-feedback text-center mx-auto">
                                <img alt="" src={imFeedBack2} />
                                <h4>Jessica Mera</h4>
                                <p>“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-feedback text-center mx-auto">
                                <img alt="" src={imFeedBack3} />
                                <h4>Robert Chandler</h4>
                                <p>“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!”</p>
                        </div>
                        </div>
                    </div>
                </div>

            </section>


            <footer>
                <div className="container">
                    <h1 >Zwallet</h1>
                    <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
                    <hr/>
                    <div className="row justify-content-lg-around ">
                        <div className="col-md-6 text-center order-1 order-sm-0 text-sm-left">
                            <a href="/" className="license">2020 Zwallet. All right reserved.</a>
                        </div>
                        <div className="col-md-6  text-center text-sm-left ">
                            <div className="row contact justify-content-lg-end">
                                <div className="col-sm-6 col-md-4"><a href="/">+62 5637 8882 9901</a></div>
                                <div className="col-sm-6 col-md-4 text-sm-right"><a  href="/">contact@zwallet.com</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>




        </>
    )
}

