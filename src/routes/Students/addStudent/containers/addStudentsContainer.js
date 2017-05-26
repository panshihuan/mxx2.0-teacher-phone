import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/addStudents'

import AddStudent from '../components/addStudent'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
