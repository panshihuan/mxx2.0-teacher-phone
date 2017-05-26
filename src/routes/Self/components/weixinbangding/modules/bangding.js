
// action 

const RECEIVE_BANGDING='RECEIVE_BANGDING'
const LENGTH_LIST='LENGTH_LIST'

const tokens=localStorage.getItem('tokens2')
const parentId=JSON.parse(localStorage.getItem('parentInfo')).parentId

export const lengthList=()=>({
    type:LENGTH_LIST,
    lengthTree
})

export const receiveBangding=(value)=>({
    type:RECEIVE_BANGDING,
    payload:{
        bangdingwill:value,
        lengthT:(value&&value.length>=3)?true:false
    }
})

//设置默认
export const myDefault=(isDefault)=>{
    return (dispatch,getState)=>{
        return dispatch()
    }
}


//请求列表
export const httpBangdingList=()=>{
    return (dispatch,getState)=>{
            return fetch(`http://115.29.177.200:8080/personal/wx/qcCode/list?token=${tokens}`,{
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                if(data.status==0){
                    return dispatch(receiveBangding(data.data.wxList))
                }else{

                }
            })
    }
}

//新增
export const createBangding=(isCreate)=>{
    return (dispatch,getState)=>{
            if(!isCreate){
                return;
            }
            return fetch(`http://115.29.177.200:8080/personal/wx/qcCode?token=${tokens}`,{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({})
            })
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                if(data.status==0){
                    return dispatch(httpBangdingList())
                }else{

                }
            })
    }
}

//删除二维码
export const deleteEr=(id)=>{
    return (dispatch,getState)=>{
            if(confirm('确定删除此二维码?')){
                return fetch(`http://115.29.177.200:8080/personal/wx/qcCode/delete?token=${tokens}`,{
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(id)
                })
                .then(function(response) {
                        return response.json();
                }).then(function(data) {
                    if(data.status==0){
                        return dispatch(httpBangdingList())
                    }else{

                    }
                })
            }
    }
}

//解绑
export const deleteBangding=(id)=>{
    return (dispatch,getState)=>{
            if(confirm('确定解绑此微信?')){
                return fetch(`http://115.29.177.200:8080/personal/wx/unbound?token=${tokens}`,{
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(id)
                })
                .then(function(response) {
                        return response.json();
                }).then(function(data) {
                    if(data.status==0){
                        return dispatch(httpBangdingList())
                    }else{

                    }
                })
            }
    }
}


export const actions={
    receiveBangding,
    myDefault,
    httpBangdingList,
    createBangding,
    deleteBangding,
    lengthList
}

const ACTION_HANDLERS={
    [RECEIVE_BANGDING]:(state,action)=>{
        return ({...state,list:action.payload})
    }
}

//reducer
const initialState={
    
}

export default function bangdingReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

