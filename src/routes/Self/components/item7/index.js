export default () => ({
  path: 'item7',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item7 = require('./components/item7').default
      cb(null, Item7)
    })
  }
})
