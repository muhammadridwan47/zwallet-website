import React,{Component} from 'react';
import { icArrowExpense, icArrowIncome, icArrowUp, icGridActive, icLogOut, icPlus,icUser} from '../../assets';
import { Footer, CardPerson, NavigationMobile} from '../../component/molecules';
import './detail.css';
import {Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import API from '../../services';
import formatNumber from '../../utils/formatNumber';

class Detail extends Component {

    state = {
        historyTransfer: [],
        income:'',
        outcome:''
    }
    componentDidMount()
    {
            API.Notification()
            .then(res => {
                if (res)this.setState({historyTransfer:res});
            })
            API.TransactionDetail()
            .then(res => {
                this.setState({income:res.income,outcome:res.outcome})
            })
    }
    render() { 
        if (window.innerWidth > 575) {
            return(
                <Redirect to="/dashboard"/>
            )
        } 
        return ( 
            <>

                    <div className="container content">
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
                            <NavigationMobile to="dashboard" page="Transaction" />

                                <div className="body-area ">
                                    <div className="row justify-content-between">
                                            <div className="income-detail justify-content-around" >
                                                <div >
                                                <img alt="" src={icArrowIncome}/>
                                                    <p >Income</p>
                                                    <h4 >Rp{this.state.income ? formatNumber(this.state.income) : 0}</h4>
                                                </div>
                                                <div>
                                                <img alt="" src={icArrowExpense} />
                                                    <p>Expense</p>
                                                    <h4>Rp{this.state.outcome ? formatNumber(this.state.outcome) : 0}</h4>
                                                </div>
                                            </div>
                                                

                                    </div>
                               
                                </div>
                                

                                <div className="row mt-3 justify-content-around wrapper" >
                                    <div className="col-md-7  mb-5 information-this-week">
                                        <h2>In This Week</h2>
                                                     <div className="p-lg-4 statistic-wrapper">
                                                        <div className="earning" ><span>+Rp65.000</span></div>
                                                        <div className="notif d-none d-sm-block"></div>
                                                        
                                                        <canvas height="268px" id="canvas" className="w-100"></canvas>
                                                    
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
                                                    <CardPerson name={history.receiveBy} amount={history.amountTransfer} photo={history.img} status={history.status}/>
                                                )
                                            })

                                        }
                                
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

const mapDispatchTOProps = (dispatch) => {
    return{
        handlePlus: (p) => dispatch({type:'BAGUS',value:p})
    }
}

export default connect(mapStateToProps,mapDispatchTOProps)(Detail);