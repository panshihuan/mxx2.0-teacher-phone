export default () => ({
  path: 'surePsw/:lab',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SurePsw = require('./components/surePsw').default
      cb(null, SurePsw)
    })
  }
})
