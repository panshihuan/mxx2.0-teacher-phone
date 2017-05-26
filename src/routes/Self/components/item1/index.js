export default () => ({
  path: 'item1',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item1 = require('./components/item1').default
      cb(null, Item1)
    })
  }
})
