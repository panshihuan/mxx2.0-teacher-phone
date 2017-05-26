import React, { Component, PropTypes } from 'react'
import { browserHistory, hashHistory,Router } from 'react-router'
import { Provider } from 'react-redux'

class AppContainer extends Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    // console.log('地址栏::::',window.location.href)
    // if(/state/.test(window.location.href)){
    //         let str=window.location.href;
    //         let state='';
    //         let jsons={
                
    //         }
    //         let jsons2={

    //         }

    //         let pa=str.split('?');
    //         for(let j=0;j<pa.length;j++){
    //             let at=pa[j].split('&');
    //             for(let i=0;i<at.length;i++){
    //                 if(/appid/i.test(at[i])){
    //                     jsons['appid']=at[i].split('=')[1].split('#')[0]
    //                 }
    //                 if(/code/.test(at[i])){
    //                     jsons['code']=at[i].split('=')[1].split('#')[0]
    //                 }
    //                 if(/qcCode/.test(at[i])){
    //                     jsons['qcCode']=at[i].split('=')[1].split('#')[0]
    //                 }
    //                 if(/state/.test(at[i])){
    //                     state=at[i].split('=')[1].split('#')[0]
    //                 }
    //             }
    //         }
    //         console.log('state的值:::',state)
    //         if(state=='WeChatBinding'){
    //           console.log('进了state的if')
    //           sessionStorage.setItem('wcode2',JSON.stringify(jsons));
    //           localStorage.setItem('weixbangding2','true') 
    //           alert('绑定:'+JSON.stringify(jsons)) 
    //         }

    //         if(state=='WeChatLogin'){
    //           console.log('WeChatLogin的情况')
    //           jsons2={
    //             appid:jsons['appid'],
    //             userType:2,
    //             code:jsons['code'],
    //           }
    //           alert('登录:'+JSON.stringify(jsons2))
    //           sessionStorage.setItem('wlogin21',JSON.stringify(jsons2));
    //           localStorage.setItem('wlogin21','true')  
    //         }
            
    // }



    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={hashHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
