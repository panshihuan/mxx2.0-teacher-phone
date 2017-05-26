
import { connect } from 'react-redux'
import { httpReceiveChangeAddress ,changeDefault,sureAddress} from '../modules/changeAddress'
import ChangeAddress from '../components/changeAddress'

const mapDispatchToProps={
    httpReceiveChangeAddress,
    changeDefault,
    sureAddress
}

const mapStateToProps=(state)=>({
    changeAddress:state.changeAddress
})

export default connect(mapStateToProps,mapDispatchToProps)(ChangeAddress)