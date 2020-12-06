import {
    ForgotPassword,
    Register,
    Login
} from './Auth'
import {
    UserAll,
    TransactionAll,
    AdminTopUp
} from './Admin'
import {
    Home,
    GetData,
    Notification
} from './Home'
import {
    GetDataTransfer,
    MaxData,
    QuickAccess,
    SearchReceiver,
    MoreData,
    GetTranferById,
    PinConfirmation,
    TransactionDetail
} from './Transaction'
import {TopUp,Midtrans} from './TopUp'
import {
    UploadImage,
    ChangePassword,
    ChangePin,
    DeletePhone,
    AddPhoneNumber
} from './Profile'

const API ={
    UserAll,
    TransactionAll,
    AdminTopUp,
    ForgotPassword,
    Register,
    Login,
    Home,
    GetDataTransfer,
    MaxData,
    SearchReceiver,
    QuickAccess,
    MoreData,
    TopUp,
    Midtrans,
    GetTranferById,
    PinConfirmation,
    GetData,
    Notification,
    UploadImage,
    ChangePassword,
    ChangePin,
    DeletePhone,
    AddPhoneNumber,
    TransactionDetail
}

export default API;