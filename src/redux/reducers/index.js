import {combineReducers} from 'redux';
import auth from './auth';
import topup from './topup';
import transfer from './transfer';
import users from './users';

export default combineReducers({
    auth,
    users,
    topup,
    transfer
})