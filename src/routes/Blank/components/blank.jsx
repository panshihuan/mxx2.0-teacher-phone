import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory ,History} from 'react-router'

export default class Blank extends React.Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount(){

        //微信绑定
        if(localStorage.getItem('weixbangding2')=='true'){
            let jsons=JSON.parse(sessionStorage.getItem('wcode2'));
            localStorage.setItem('weixbangding2','false');
            fetch(`http://115.29.177.200:8080/personal/wx/binding`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsons)
                }).then(function(response) {
                    return response.json();
                }).then(function(data){
                    if(data.status==0){
                        alert('绑定成功!')
                        localStorage.setItem('relo2','true');
                        localStorage.setItem('parentInfo', JSON.stringify(data.data));
                        localStorage.setItem('tokens2', data.data.token);
                        localStorage.setItem('tokenTime2', JSON.stringify(new Date().getTime()));
                        localStorage.setItem('mySid2', data.data.schoolId);
                        localStorage.setItem('myUid2', data.data.userId);
                        this.context.router.push(`/home/${data.data.schoolId}`);
                    }else{
                        alert('info:'+data.info)
                        this.context.router.push(`/login`);
                    }
            }.bind(this))
        }else if(localStorage.getItem('wlogin21')=='true'){
            let jsons4=JSON.parse(sessionStorage.getItem('wlogin21'));
            localStorage.setItem('wlogin21','false');
            fetch(`http://115.29.177.200:8080/login/wx/code`, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsons4)
                }).then(function(response) {
                    return response.json();
                }).then(function(data){
                    if(data.status==0){
                        alert('登录成功!')
                        localStorage.setItem('relo2','true');
                        localStorage.setItem('parentInfo', JSON.stringify(data.data));
                        localStorage.setItem('tokens2', data.data.token);
                        localStorage.setItem('tokenTime2', JSON.stringify(new Date().getTime()));
                        localStorage.setItem('mySid2', data.data.schoolId);
                        localStorage.setItem('myUid2', data.data.userId);
                        this.context.router.push(`/home/${data.data.schoolId}`);
                    }else{
                        alert('info:'+data.info)
                        this.context.router.push(`/login`);
                    }
            }.bind(this))

        }else if (!this.props.tokens||this.props.tokens==undefined) {
            
            this.context.router.push(`/login`)

        }else if (this.props.tokens&&this.props.tokens!=undefined) {
            if (Number(this.props.tokenTime) + this.props.sixDaiesTime > this.props.nowTime) {
                //token还没到期
                this.context.router.push(`/home/${localStorage.getItem('mySid2')}`)
            } else {
                //token到期(刷新token)
                fetch(`http://115.29.177.200:8080/component?token=${this.props.tokens}`, {
                    method: 'get'
                }).then(function(response) {
                        return response.json();
                }).then(function(data) {
                    if (data.status==0) {
                    
                    }
                }.bind(this))
                
            }
        } else{
            
        }
    }

    render(){
        return (
            null
        )
    }

}

Blank.defaultProps={
    tokens: localStorage.getItem('tokens2'),
    nowTime:new Date().getTime(),
    sixDaiesTime: 6 * 24 * 60 * 60 * 1000,
    tokenTime:localStorage.getItem('tokenTime2')
}

Blank.contextTypes={
    router: React.PropTypes.object
}

