import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'home/:sid',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('./modules/Home').default
      injectReducer(store, { key: 'home', reducer })
      cb(null, Home)
    })
  },
  onEnter (nextState, replace) {
    let tokens=localStorage.getItem('tokens2')
    if(!tokens){
      replace('/login')
    }
  }
})

