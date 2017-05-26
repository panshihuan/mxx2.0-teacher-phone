export default () => ({
  path: 'item2',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item2 = require('./components/item2').default
      cb(null, Item2)
    })
  }
})
