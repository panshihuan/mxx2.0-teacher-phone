export default () => ({
  path: 'item3',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item3 = require('./components/item3').default
      cb(null, Item3)
    })
  }
})
