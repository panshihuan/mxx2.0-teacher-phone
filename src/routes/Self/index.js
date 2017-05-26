import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'self',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SelfContainer = require('./containers/SelfContainer').default
      const reducer = require('./modules/self').default
      injectReducer(store, { key: 'self', reducer })
      cb(null, SelfContainer)
    })
  }
})

