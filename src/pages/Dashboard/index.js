import React,{Component} from 'react';
import { icArrowExpense, icArrowIncome, icArrowUp, icArrowUpTransfer, icGridActive, icLogOut, icPlus,icPlusTopUp,icUser} from '../../assets';
import { Navbar,Footer, CardPerson} from '../../component/molecules';
import './dashboard.css';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import formatNumber from '../../utils/formatNumber'
import API from '../../services';

class Dashboard extends Component {

    state = {
        historyTransfer: [],
        income:'',
        outcome:''
    }
    componentDidMount()
    {
        API.Home()
        .then(res => {
            if (res)this.setState({historyTransfer:res});
        })
        API.TransactionDetail()
        .then(res => {
            console.log('ini dari: ',res)
            this.setState({income:res.income,outcome:res.outcome})
        })
    }
    render() { 
        return ( 
            <>
                <Navbar />

                    <div className="container content mt-5">
                        <div className="row">
                            <div className="col-3 bg-white shadow-lg sidebar_menu ">
                              <div className="sidebar h-100 d-flex pb-5" style={{flexDirection: 'column'}}>
                                 <div style={{flex: 1}}>
                                    <Link to="/dashboard">
                                    <a href="/" className="ml-md-4 d-block dashboard text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icGridActive} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                    </Link>
                                    <Link to="/transfer">
                                    <a href="/transfer" className="ml-md-4 d-block transfer-ds text-center text-lg-left">
                                        <img alt="" src={icArrowUp} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                    </Link>
                                    <Link to="/top-up">
                                    <a href="top-up.html" className="ml-md-4 d-block top-up-ds text-center text-lg-left">
                                        <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                    </a>
                                    </Link>
                                    <Link to="/profile">
                                    <a href="/" className="ml-md-4 d-block profile-ds text-center text-lg-left">
                                        <img alt="" src={icUser} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Profile</span>
                                    </a>
                                    </Link>
                                </div>
                                    <a href="/auth/logout" className="ml-md-4 d-block logout-ds text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                                <div className="body-area ">
                                    <div className="row justify-content-between">
                                        <Link to="/detail">
                                        <div className="col-md-8">
                                            <p className="balance">Balance</p>
                                            <h4 className="credit">Rp{formatNumber(this.props.userData.balance)}</h4>
                                            <p className="number">{this.props.userData.phone && '+'+this.props.userData.phone}</p>
                                        </div>
                                        </Link>
                                        <div className="col-md-4 align-self-center d-none d-sm-block">
                                            <Link to="/transfer">
                                                <div className="btn-transfer float-md-right"   >
                                                &nbsp; <img alt="" src={icArrowUpTransfer} className="mb-2" />
                                                    <h4 className="d-inline"> Transfer</h4>
                                                </div>
                                            </Link>
                                            <Link to="/top-up">
                                                <div className="btn-top-up float-md-right">
                                                    &nbsp; <img alt="" src={icPlusTopUp} className="mb-2" />
                                                    <h4 className="d-inline"> Top-Up</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                               
                                </div>
                                
                                        <div className="mobile-feature d-flex d-sm-none" style={{alignContent:'space-between',justifyContent:'space-between'}}>
                                            <Link to="/transfer">
                                                <div className="btn-transfer float-md-right d-inline"   >
                                                 <img alt="" src={icArrowUpTransfer} className="mb-2 img-fluid" />
                                                    <h4 className="d-inline"> Transfer</h4>
                                                </div>
                                            </Link>
                                            <Link to="/top-up">
                                                <div className="btn-top-up float-md-right d-inline">
                                                    <img alt="" src={icPlusTopUp} className="mb-2 img-fluid" />
                                                    <h4 className="d-inline"> Top-Up</h4>
                                                </div>
                                            </Link>
                                        </div>
                                <div className="row mt-3 justify-content-around wrapper">
                                    <div className="col-md-7 money d-none d-sm-block">
                                        <div className="statistic">
                                            <div className="row ">
                                                <div className="col-lg-6">
                                                    <img alt="" src={icArrowIncome}/>
                                                    <p>Income</p>
                                                    <h4>Rp{this.state.income ? formatNumber(this.state.income) : 0}</h4>
                                                </div>
                                                <div className="col-lg-6  pl-lg-5">
                                                    <img alt="" src={icArrowExpense} />
                                                    <p>Expense</p>
                                                    <h4>Rp{this.state.outcome ? formatNumber(this.state.outcome) : 0}</h4>
                                                </div>
                                                <div className="row mt-5">
                                                    <div className="col-12">
                                                        <div className="p-lg-4 statistic-wrapper">
                                                        
                                                        
                                                            <div className="earning" ><span>+Rp65.000</span></div>
                                                            <div className="notif d-none d-sm-block"></div>
                                                            
                                                            <canvas height="268px" id="canvas" className="w-100"></canvas>
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                        <div className="history-mobile d-sm-none " style={{display:'flex',flexDirection:'row',alignContent:'space-between',justifyContent:'space-between',width:'100%',paddingRight:5,paddingLeft:5,marginBottom:25}}>
                                            <div style={{flex:1}}  >
                                            <h2 className="">Transaction History</h2>
                                            </div>
                                            <div >
                                            <Link to="/history"><a href="transactionHistory.html" className="see-all"><span className="text-right">See all</span></a></Link>
                                            </div>
                                        </div>
                                        {
                                            this.state.historyTransfer.map(history => {
                                                return(
                                                    <CardPerson name={history.sender} amount={history.amountTransfer} photo={history.img} status={history.status} />

                                                )
                                            })

                                        }
                                    <div className="col-md-5 transaction-history justify-content-lg-end mt-4 mt-md-0 d-none d-md-block">
                                        <div className="row">
                                            <div className="col-8 bg">
                                                <h2 className="text-center">Transaction History</h2>
                                            </div>
                                            <div className="col-4 text-right">
                                            <Link to="/history"><a href="transactionHistory.html" className="see-all"><span className="text-right">See all</span></a></Link>  
                                            </div>
                                        </div>

                                        {
                                            this.state.historyTransfer.map(history => {
                                                return(
                                                    <div className="row payment-history">
                                                    <div className=" col-sm-9 col-md-7">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <img alt="" src={process.env.REACT_APP_API_IMAGE+history.img} className="img-fluid" />
                                                            </div>
                                                            <div className="col-8">
                                                                <h4 >{history.sender}</h4>
                                                                <span>Transfer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`col-sm-3 col-md-5 pt-3 ${this.props.userData.id == history.sendBy ? 'money-plus' : 'money-minus'} `}>
                                                     <p>{this.props.userData.id == history.sendBy ? '+' : '-'}Rp{formatNumber(history.amountTransfer)}</p>
                                                    </div>
                                                </div>
                                                )
                                                
                                            })
                                        }
  


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


export default connect(mapStateToProps)(Dashboard);