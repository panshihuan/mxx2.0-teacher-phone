
// action 


const RECEIVE_CHANGEADDRESS='RECEIVE_CHANGEADDRESS'

const tokens=localStorage.getItem('tokens2')
const parentId=JSON.parse(localStorage.getItem('parentInfo')).parentId

export const receiveChangeAddress=(value)=>({
    type:RECEIVE_CHANGEADDRESS,
    isDefault:value
})

//设置默认
export const changeDefault=(isDefault)=>{
    return (dispatch,getState)=>{
        getState().changeAddress.isDefault=isDefault==1?0:1
        return dispatch(receiveChangeAddress(getState().changeAddress.isDefault))
    }
}


//提交
export const sureAddress=(label,jsons)=>{
    return (dispatch,getState)=>{
        jsons['isDefault']=getState().changeAddress.isDefault
        
        if(label==1){
            return fetch(`http://115.29.177.200:8080/mail?token=${tokens}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsons)
            })
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                if(data.status==0){
                    alert('编辑成功!')
                    history.back()
                }else{
                    alert(data.info)
                }
            })
        }

        if(label==2){
            delete jsons['mailId'];
            return fetch(`http://115.29.177.200:8080/mail?token=${tokens}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsons)
            })
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                    if(data.status==0){
                        alert('新建成功!')
                        history.back()
                    }else{
                        alert(data.info)
                    }
            })
        }
    }
}


export const actions={
    receiveChangeAddress,
    changeDefault,
    sureAddress
}

const ACTION_HANDLERS={
    [RECEIVE_CHANGEADDRESS]:(state,action)=>{
        return ({...state,result:action.payload})
    }
}

//reducer
const initialState={
    isDefault:1,
    changeAddress:[]
}

export default function changeAddressReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

