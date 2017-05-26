export default () => ({
  path: 'item5',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item5 = require('./components/item5').default
      cb(null, Item5)
    })
  }
})
