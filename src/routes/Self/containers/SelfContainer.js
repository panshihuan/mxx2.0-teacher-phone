import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/self'

import Self from '../components/self'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Self)
