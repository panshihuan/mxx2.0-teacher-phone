import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path: 'bangding',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Bangding = require('./containers/bangdingContainer').default
      const reducer = require('./modules/bangding').default
      injectReducer(store, { key: 'bangding', reducer })
      cb(null, Bangding)
    })
  }
})