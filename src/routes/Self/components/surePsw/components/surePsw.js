import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link ,History} from 'react-router';
import hex_md5 from '../../../../../components/md5';
import "../../self.scss";

export default class SurePsw extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selfInfo:{},
            lab:''
        };
        this.sure=this.sure.bind(this);
        this.goBack=this.goBack.bind(this);
    }

    componentWillMount(){
        this.setState({lab:this.props.params.lab})
    }

    componentDidMount(){
       
    }

    //组件是否应该做更新
    shouldComponentUpdate(nextProps,nextState){
        return true
    }

    render(){
        return (
            <div className="selfEmail mTp">
                <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                                密码确认
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div onClick={()=>this.sure()} className="topBar-right">
                        确认
                    </div>
                </div>
                <div className="selfEmail-input">
                    <input ref="psw" type="password" placeholder="请填写密码" />
                </div>
                <p style={{paddingLeft:'15px'}}  className="errorInfo"></p>
            </div>
        )
    }

    sure(event){
        if(!this.refs.psw.value){
            return;
        }
        let pswUser=this.refs.psw.value;
        let passw = hex_md5(pswUser).split('');
        passw[5] = pswUser.charAt(0);
        passw[10] = pswUser.charAt(1);
        passw[15] = pswUser.charAt(2);
        let obj = {
            uid: this.props.uid,
            password: passw.join('')
        }
        fetch(`http://115.29.177.200:8080/user/confirmation?token=${this.props.tokens}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(function(response) {
                return response.json();
        }).then(function(data) {
            if (data.status == 0) {
                this.context.router.push(`item${this.state.lab}`);
                // this.props.history.pushState(null, `/item${this.state.lab}`);    
            }
        }.bind(this))
        
    }

    goBack(){
        history.back();
    }
            
}

SurePsw.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  uid:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).userId:null,
  schoolName:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).schoolName:null
}

SurePsw.contextTypes={
    router: React.PropTypes.object
}

