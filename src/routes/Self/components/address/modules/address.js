
// action 

const RECEIVE_ADDRESS='RECEIVE_ADDRESS'
const COMPILE_ADDRESS='COMPILE_ADDRESS'
const DELETE_ADDRESS='DELETE_ADDRESS'
const DEFAULT_ADDRESS='DEFAULT_ADDRESS'

const CREATE_ADDRESS='CREATE_ADDRESS'
const SAVE_ADDRESS_CREATE='SAVE_ADDRESS_CREATE'
const SAVE_ADDRESS_COMPILE='SAVE_ADDRESS_COMPILE'

const tokens=localStorage.getItem('tokens2')
const parentId=JSON.parse(localStorage.getItem('parentInfo')).parentId

export const receiveAddress=(value)=>({
    type:RECEIVE_ADDRESS,
    payload:{
        addressList:value
    }
})

export const httpReceiveAddress=()=>{
    return (dispatch,getState)=>{
        return fetch(`http://115.29.177.200:8080/mail/list?token=${tokens}`)
        .then(function(response) {
                return response.json();
        }).then(function(data) {
                return dispatch(receiveAddress(data.data.mailList))
        })
    }
}

export const gotoAddressInfo=(info)=>{
    console.log(info)
    return (dispatch,getState)=>{
        return sessionStorage.setItem("addressInfo",JSON.stringify(info))
    }
}

export const deleteAddress=(args)=>{
    return (dispatch,getState)=>{
        
        if(confirm('确定删除此邮寄地址?')){
            return fetch(`http://115.29.177.200:8080/mail?token=${tokens}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(args)
            })
            .then(function(response) {
                    return response.json();
            }).then(function(data) {
                    if(data.status==0){
                        alert('删除成功!')
                    }
                    return dispatch(httpReceiveAddress())
            })
        }
    }
}

export const triggerDefault=(args)=>{
    if(args.isDefault==1){
        args['isDefault']=0
    }else if(args.isDefault==0){
        args['isDefault']=1
    }
   
    return (dispatch,getState)=>{
        return fetch(`http://115.29.177.200:8080/mail?token=${tokens}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(args)
        })
        .then(function(response) {
                return response.json();
        }).then(function(data) {
                return dispatch(httpReceiveAddress())
        })
    }
}


export const actions={
    receiveAddress,
    httpReceiveAddress,
    triggerDefault,
    deleteAddress,
    gotoAddressInfo
}

const ACTION_HANDLERS={
    [RECEIVE_ADDRESS]:(state,action)=>{
        return ({...state,list:action.payload})
    }
}

//reducer
const initialState={
    addressList:[]
}

export default function addressReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

