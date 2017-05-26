import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/login'

import Counter from '../components/login'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
