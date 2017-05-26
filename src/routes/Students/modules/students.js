// ------------------------------------
// Constants
// ------------------------------------
import imgUrl from "../assets/p120.png"

const RECEIVE_STUDENT = 'RECEIVE_STUDENT'
const REQUEST_STUDENT = 'REQUEST_STUDENT'
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

const tokens=localStorage.getItem('tokens2')
const parentId=JSON.parse(localStorage.getItem('parentInfo')).parentId

// ------------------------------------
// Actions
// ------------------------------------

function requestStudent () {
  return {
    type: REQUEST_STUDENT
  }
}  

export const receiveStudent = (value) => ({
  type: RECEIVE_STUDENT,
  payload: {
    getStudentsList:value
  }
})

export const httpStudents = () => {
  return (dispatch, getState) => {
    return fetch(`http://115.29.177.200:8080/parent/student?parentId=${parentId}&token=${tokens}`)
        .then(function(response) {
                return response.json();
        }).then(function(data) {
                data.data.studentList.map(item => {
                    if (!item.photo) {
                        item['photo'] = imgUrl;
                    }
                    if(item.email){
                        item['myInfo2']=item.email;
                        item['myInfoLeft']='邮箱:';
                    }else if(item.phone){
                        item['myInfo2']=item.phone;
                        item['myInfoLeft']="电话:";
                    }else if(item.account){
                        item['myInfo2']=item.account;
                        item['myInfoLeft']="用户名:";
                    }else{
                        item['myInfo2']=''
                    }
                })
                return dispatch(receiveStudent(data.data.studentList))
        })
    // return fetch('https://api.github.com/zen')
    //   .then(data => data.text())
    //   .then(text => dispatch(receiveStudent(text)))
  }
}


export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}



export const actions = {
  increment,
  doubleAsync,
  httpStudents,
  receiveStudent,
  requestStudent
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [REQUEST_STUDENT]: (state) => {
    return ({...state})
  },
  [RECEIVE_STUDENT] :(state,action)=>{
    return({...state,text:action.payload}) 
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  getStudentsList:[]
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
