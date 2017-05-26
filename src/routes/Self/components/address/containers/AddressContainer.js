
import { connect } from 'react-redux'
import { httpReceiveAddress,triggerDefault,gotoAddressInfo,deleteAddress } from '../modules/address'
import Address from '../components/address'

const mapDispatchToProps={
    httpReceiveAddress,
    triggerDefault,
    deleteAddress,
    gotoAddressInfo
}

const mapStateToProps=(state)=>({
    address:state.address
})

export default connect(mapStateToProps,mapDispatchToProps)(Address)