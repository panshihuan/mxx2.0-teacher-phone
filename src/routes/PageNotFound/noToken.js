export default {
  path: '*',
    onEnter (nextState, replace) {
      console.log('nextState22222',nextState.location.pathname)
    }
}
