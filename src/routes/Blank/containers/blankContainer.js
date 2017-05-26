import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/blank'

import Blank from '../components/blank'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
