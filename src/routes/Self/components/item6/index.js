export default () => ({
  path: 'item6',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Item6 = require('./components/item6').default
      cb(null, Item6)
    })
  }
})
