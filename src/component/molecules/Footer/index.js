import React,{Component} from 'react'
import './footer.css';
class Footer extends Component {
    render() { 
        return ( 
            <>

                <footer>
                    <div className="container">
                        <div className="row justify-content-lg-around ">
                            <div className="col-sm-6 text-center order-1 order-sm-0 text-sm-left">
                                <a href="/" className="license">2020 Zwallet. All right reserved.</a>
                            </div>
                            <div className="col-sm-6  text-center text-sm-right">
                                <div className="row contact justify-content-lg-end">
                                    <div className="col-sm-6 col-md-4"><a href="/">+62 5637 8882 9901</a></div>
                                    <div className="col-sm-6 col-md-4"><a  href="/">contact@zwallet.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
         );
    }
}
 
export default Footer;

