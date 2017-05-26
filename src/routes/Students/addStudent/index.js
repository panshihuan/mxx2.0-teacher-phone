import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  path: 'addStudent',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AddStudents = require('./containers/addStudentsContainer').default
      const reducer = require('./modules/addStudents').default
      injectReducer(store, { key: 'addStudents', reducer })
      cb(null, AddStudents)
    })
  }
})

