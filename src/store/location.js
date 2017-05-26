// ------------------------------------
// Constants
// ------------------------------------

import { browserHistory } from 'react-router'

export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => {
    let tokens=localStorage.getItem('tokens2')
    if(!/blank/.test(location.hash)&&!/login/.test(location.hash)){
      if(!tokens){
        location.hash='login'
      }
    }
    
    return dispatch(locationChange(nextLocation))
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
