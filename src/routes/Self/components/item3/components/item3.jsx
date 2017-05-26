import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link ,History} from 'react-router';
import "../../self.scss";
import "../../../../login/components/login.scss";

export default class Item3 extends React.Component {
    constructor(props) {
        super(props);
        this.shu=60;
        this.state={
            selfInfo:{},
            lab:'',
            isYan:true,
            shu:60
        };
        this.sure=this.sure.bind(this);
        this.changeYan=this.changeYan.bind(this);
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
        let yan='';
        let miao='';
        if(this.state.isYan){
            yan="show";
            miao="hide";
        }else{
            yan="hide"
            miao="show";
        }
        return (
            <div className="selfOnly mTp">
                <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                                个人中心
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div className="topBar-right">
                        
                    </div>
                </div>
                <div className="lrIcon">
                </div>
                <div className="login-phone">
                    <input ref="email" type="text" placeholder="输入新邮箱"/>
                </div>
                <div className="login-validate">
                    <label>
                        <input ref="code" type="text" placeholder="邮箱验证码"/>
                    </label>
                    <span onClick={this.changeYan}>
                        <span className={yan}>获取验证码</span>
                        <span className={miao}>{this.state.shu}秒</span>
                    </span>
                </div>
                <p style={{paddingLeft:'15px'}} className="errorInfo"></p>
                <div onClick={this.sure} className="selfOnly-sure">
                    修改
                </div>
            </div>
        )
    }


    //获取验证码
    changeYan(){
        let obj={
            email:this.refs.email.value
        }

        if (this.shu < 60) {
            return;
        }
        this.setState({isYan:false});
        let setIn = setInterval(() => {
            if (this.shu > 0) {
                this.shu--;
            } else {
                this.setState({isYan:true});
                this.shu=60;
                clearInterval(setIn);
            }
            this.setState({shu:this.shu})
        }, 1000)

        //获取验证码
        
        fetch(`http://115.29.177.200:8080/email/captcha/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(function(response) {
                return response.json();
        }).then(function(data) {
            if (data.status == 0) {
                  alert('验证码已发送至您的邮箱,请注意查收!')
            }else{

            }
        }.bind(this))
    }

    //提交
    sure(event){
        let obj={
            uid: this.props.uid,
            captcha: this.refs.code.value,
            email:this.refs.email.value
        }
        if(confirm('确认修改?')){
            fetch(`http://115.29.177.200:8080/modify/email?token=${this.props.tokens}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(function(response) {
                    return response.json();
            }).then(function(data) {
                if (data.status == 0) {
                    this.context.router.push(`self`);   
                }
            }.bind(this))
        }
    }

    goBack(){
        history.back();
    }
            
}

Item3.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  uid:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).userId:null
}

Item3.contextTypes={
    router: React.PropTypes.object
}
