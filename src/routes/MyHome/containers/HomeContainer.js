import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/Home'

import Home from '../components/home'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
