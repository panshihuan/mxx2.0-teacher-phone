import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'students',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Students = require('./containers/StudentsContainer').default
      const reducer = require('./modules/students').default
      injectReducer(store, { key: 'students', reducer })
      cb(null, Students)
    })
  }
})

