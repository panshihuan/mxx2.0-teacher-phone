
import { connect } from 'react-redux'
import { myDefault,httpBangdingList,createBangding,deleteEr,deleteBangding} from '../modules/bangding'
import Bangding from '../components/bangding'

const mapDispatchToProps={
    httpBangdingList,
    myDefault,
    createBangding,
    deleteEr,
    deleteBangding
}

const mapStateToProps=(state)=>({
    bangding:state.bangding
})

export default connect(mapStateToProps,mapDispatchToProps)(Bangding)