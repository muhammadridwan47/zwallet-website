import React,{Component} from 'react';
import { icArrowUpActive ,icGrid, icLogOut, icPlus,icSearch,icUser} from '../../assets';
import { Navbar,Footer, CardPerson, NavigationMobile} from '../../component/molecules';
import './transfer.css'
import {Link} from 'react-router-dom';
import API from '../../services';

class Transfer extends Component {

    state = {
        limit:6,
        max:0,
        profiles : [],
        quickAccess:[]
    }
    componentDidMount()
    {
        this.getData()
    }
    getData ()
    {
        API.GetDataTransfer(this.state.limit)
        .then(res => {
            this.setState({profiles:res});
        })
        API.QuickAccess()
        .then(res => {
            this.setState({quickAccess:res});
        })
        API.MaxData()
        .then(res => {
            this.setState({max:res});
        })
    }
    onHandleInput(event)
    {

        const query = event.currentTarget.value;
        if (!query) {
            this.getData();
        }
        API.SearchReceiver(query,this.state.limit)
        .then(res => {
            this.setState({profiles:res.profile,max:res.max});
        })
    }
     fetchMoreData = () => {
        API.MoreData(this.state.limit)
        .then(res => {
            this.setState({profiles:res,limit:this.state.limit + 4});
        })
    }
    render() { 
        return ( 
            <>
                <div className="d-none d-sm-block">
                 <Navbar/>
                </div>

                    <div className="container content">
                        <div className="row">
                            <div className="col-3 bg-white shadow-lg d-none d-sm-block">
                               <div className="sidebar h-100 d-flex pb-5" style={{flexDirection: 'column'}}>
                                 <div style={{flex: 1}}> 
                                   <Link to="/dashboard">
                                    <a href="/dashboard" className="ml-md-4 d-block dashboard-tr text-center text-lg-left">
                                        <img alt="" src={icGrid} /> &nbsp; <span className="d-none d-md-inline">Dashboard</span>
                                    </a>
                                    </Link>
                                    <Link to="/transfer">
                                    <a href="receiver.html" className="ml-md-4 d-block transfer text-center text-lg-left">
                                        <div className="active-link"></div>
                                        <img alt="" src={icArrowUpActive} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Transfer</span>
                                    </a>
                                    </Link>
                                    <Link to="/top-up">
                                    <a href="top-up"  className="ml-md-4 d-block top-up-tr text-center text-lg-left" >
                                        <img alt="" src={icPlus} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Top Up</span>
                                    </a>
                                    </Link>
                                    <Link to="/profile">
                                    <a href="/" className="ml-md-4 d-block profile-tr text-center text-lg-left">
                                        <img alt="" src={icUser} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Profile</span>
                                    </a>
                                    </Link>
                                  </div>
                                    <a href="/auth/logout" className="ml-md-4 d-block logout-rc text-center text-lg-left">
                                        <img alt="" src={icLogOut} /> &nbsp; <br className="d-none d-md-block d-lg-none" /><span className="d-none d-md-inline">Logout</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-9" id="area">
                                <div className="body-area-transfer h-100" >
                                    <div className="d-sm-none">
                                         <NavigationMobile page="Find Receiver" to="/dashboard"/>
                                    </div>
                                    <h1 className="d-none d-sm-block">Search Receiver</h1>
                                    <div className="form-group search">
                                        <input type="text" className="form-control " placeholder="Search receiver here" onChange={(e) => this.onHandleInput(e)} style={{backgroundColor:'rgba(58, 61, 66, 0.1) !important'}}/>
                                        <div className="icon-search">
                                            <img alt="" src={icSearch} />
                                        </div>
                                    </div>
                                    <h1 className="d-sm-none">Quick Access</h1>
                                    <div className="d-sm-none" style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>

                                        {
                                             this.state.quickAccess.map(quick => {
                                                let url = `/transfer/amount/${quick.id}`;
                                                return(
                                                    <Link to={url}>
                                                        <div className="quick-access" style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                                                            <img src={process.env.REACT_APP_API_IMAGE+quick.img} width="56" height="56" alt=" "/>
                                                            <h4 style={{width:'100%',overflow:'hidden'}} >{quick.fullName}</h4>
                                                            <span className=" d-block text-center" style={{width:'100%',overflow:'hidden',color:'#7A7886'}}>{quick.phoneNumber && "+"+quick.phoneNumber}</span>
                                                        </div>  
                                                     </Link>
                                                )

                                              })
                                        }

                                    </div>

                                    <h1 className="d-sm-none mt-4">All Contacts</h1>
                                    <span className="mt-0 d-sm-none mb-5" style={{color:'#8F8F8F'}}>{this.state.max} Contact Founds</span>
                                    <div className="row mt-4">

                                       

     

                                        {
                                            this.state.profiles.map(profile => {

                                                let url = `/transfer/amount/${profile.id}`;
                                                return(
                                                 
                                                 <div className="col-12">
                                                     <Link to={url}>
                                                    <div className="card-profile d-none d-sm-block" >
                                                        <div className="row justify-content-lg-around">
                                                            <div className="col-4 col-sm-3 col-lg-2 m-0 ">
                                                                <img alt="" src={process.env.REACT_APP_API_IMAGE+profile.img} width="70" height="70"  />
                                                            </div>
                                                            <div className="col-8 col-sm-9 col-lg-10 receiver">
                                                                <h4 className="mt-1 mt-sm-0">{profile.fullName}</h4>
                                                                <p>{profile.phoneNumber && '+'+profile.phoneNumber}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <CardPerson photo={profile.img} name={profile.fullName} phone={profile.phoneNumber}/>
                                                   
                                                    
                                                    </Link>
                                                 </div>
                                                )
                                            })

                                        }
                                        {
                                            this.state.limit <= this.state.max &&
                                            this.state.profiles.length !== 0 && 
                                            <div style={{textAlign:'center',width:'100%'}} onClick={this.fetchMoreData}>
                                                <span className="py-2 px-3 mt-5" style={{backgroundColor:'#6379F4',borderRadius:10,color:'white',cursor:'pointer'}}   >Load More</span>
                                            </div>
                                        }

                                        {  
                                            
                                            this.state.profiles.length == 0 && 
                                            <div style={{textAlign:'center',width:'100%'}}>
                                                <span className="py-2 px-3 mt-5" style={{backgroundColor:'#fff',borderRadius:10,color:'#333',cursor:'pointer'}}> <h1>Data Not Found</h1> </span>
                                            </div>
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
 
export default Transfer;