import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  
  console.log('地址栏::::',window.location.href)
  if(/state/.test(window.location.href)){
            let str=window.location.href;
            let state='';
            let jsons={
                
            }
            let jsons2={

            }

            let pa=str.split('?');
            for(let j=0;j<pa.length;j++){
                let at=pa[j].split('&');
                for(let i=0;i<at.length;i++){
                    if(/appid/i.test(at[i])){
                        jsons['appid']=at[i].split('=')[1].split('#')[0]
                    }
                    if(/code/.test(at[i])){
                        jsons['code']=at[i].split('=')[1].split('#')[0]
                    }
                    if(/qcCode/.test(at[i])){
                        jsons['qcCode']=at[i].split('=')[1].split('#')[0]
                    }
                    if(/state/.test(at[i])){
                        state=at[i].split('=')[1].split('#')[0]
                    }
                }
            }
            console.log('state的值:::',state)
            if(state=='WeChatBinding'){
              console.log('进了state的binding')
              sessionStorage.setItem('wcode2',JSON.stringify(jsons));
              localStorage.setItem('weixbangding2','true') 
              alert('绑定:'+JSON.stringify(jsons)) 
            }

            if(state=='WeChatLogin'){
              console.log('WeChatLogin的情况....')
              jsons2={
                appid:jsons['appid'],
                userType:2,
                code:jsons['code'],
              }
              alert('登录:'+JSON.stringify(jsons2))
              sessionStorage.setItem('wlogin21',JSON.stringify(jsons2));
              localStorage.setItem('wlogin21','true')  
            }
            
    }


  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
