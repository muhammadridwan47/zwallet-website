import React, { Component} from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import {Dashboard,Home, Login, Register, Review, TopUp, Transfer,Amount, Success, Failed,Profile, PersonalInformation,ChangePassword,ChangePin, ManagePhoneNumber, Logout, CreatePin, RegisterSuccess, NotFound, ForgotPassword, NewPassword, History, Detail} from '../pages';
import AdminTransfer from '../pages/Admin/adminTransfer'
import AdminUser from '../pages/Admin/adminUser'
import AdminDashboard from '../pages/Admin/adminDashboard';
import AdminTopup from '../pages/Admin/adminTopup';
import AddPhoneNumber from '../pages/Profile/AddPhoneNumber';
import { PrivateRoute, PublicRoute } from "./AccessRoute";
class Routing extends Component{

    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <PublicRoute component={Home} restricted={false} path='/' exact />
                        <PrivateRoute  path="/dashboard" component={Dashboard} />
                        <PrivateRoute  path="/history" component={History} />
                        <PrivateRoute  path="/detail" component={Detail} />
                        <PrivateRoute  path="/transfer" component={Transfer} exact />
                        <PrivateRoute  path="/transfer/amount/:id" component={Amount} />
                        <PrivateRoute  path="/transfer/review" component={Review} />
                        <PrivateRoute  path="/transfer/success" component={Success} />
                        <PrivateRoute  path="/transfer/failed" component={Failed} />
                        <PrivateRoute  path="/top-up" component={TopUp}  />
                        <PrivateRoute  exact path="/profile" component={Profile} />
                        <PrivateRoute  path="/profile/personal-information" component={PersonalInformation} />
                        <PrivateRoute  path="/profile/change-password" component={ChangePassword} />
                        <PrivateRoute  path="/profile/change-pin" component={ChangePin}  />
                        <PrivateRoute  path="/profile/add-phone-number" component={AddPhoneNumber}  />
                        <PrivateRoute  path="/profile/manage-phone-number" component={ManagePhoneNumber}  />
                        <PrivateRoute  path="/profile/manage-phone-number" component={ManagePhoneNumber}  />
                        <PrivateRoute  path="/admin" component={AdminDashboard} admin="admin" exact/>
                        <PrivateRoute  path="/admin/transfer" component={AdminTransfer} admin="admin" />
                        <PrivateRoute  path="/admin/user" component={AdminUser} admin="admin" />
                        <PrivateRoute  path="/admin/top-up" component={AdminTopup} />
                        <PublicRoute   component={Login} restricted={true} path='/auth'exact  />
                        <PublicRoute   component={ForgotPassword} restricted={true} path='/auth/forgot-password'  />
                        <PublicRoute   component={NewPassword} restricted={true} path='/auth/new-password'  />
                        <PublicRoute   path="/auth/register" component={Register}  />
                        <PublicRoute   path="/auth/create-pin" component={CreatePin}  />
                        <PublicRoute   path="/auth/success" component={RegisterSuccess} />
                        <PublicRoute   path="/auth/Logout" component={Logout} />
                        <PublicRoute   component={NotFound} restricted={false} path='*'  />

                    </Switch>
            </BrowserRouter>
        )
    }
}

export default Routing;

                 