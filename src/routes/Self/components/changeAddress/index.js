import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path: 'changeAddress/:label/:mailId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ChangeAddress = require('./containers/changeAddressContainer').default
      const reducer = require('./modules/changeAddress').default
      injectReducer(store, { key: 'changeAddress', reducer })
      cb(null, ChangeAddress)
    })
  }
})