import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path: '/blank',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Blank = require('./containers/blankContainer').default
      const reducer = require('./modules/blank').default
      injectReducer(store, { key: 'addStudents', reducer })
      cb(null, Blank)
    })
  },
  onEnter(nextState, replace){
    
  }
})

