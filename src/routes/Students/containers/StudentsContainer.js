import { connect } from 'react-redux'
import { increment, doubleAsync,httpStudents } from '../modules/students'

import Students from '../components/students'

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync,
  httpStudents
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  students:state.students
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)
