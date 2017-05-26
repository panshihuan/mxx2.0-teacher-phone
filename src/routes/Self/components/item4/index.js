export default () => ({
  path: 'item4',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item4 = require('./components/item4').default
      cb(null, Item4)
    })
  }
})
