import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'

import './copyLogin.scss';
import './login.scss';

// import 'whatwg-fetch';
import hex_md5 from '../../../components/md5';
import { History  } from 'react-router';

import me_bg from './assets/me_bg.png'
import me_close from './assets/me_close.png'
import me_footer_logo from './assets/me_footer_logo.png'
import me_logo from './assets/me_logo.png'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            getCode:'',
            codeKey:'',
            label:1,
            errorInfo:'请正确填写账号/密码/验证码',
            error:false,
            formData:{
                userType:'2'
            },
            loginWay:false,  
            showDuan:false,
            sid:'',
            school:{}  
        }
        this.codeClick=this.codeClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillMount(){
        let url=location.href;

        if(/sid/.test(url)){
            this.setState({sid:url.split('=')[1]});
        }else{
            this.setState({sid:100000});
        }
    }

    componentDidMount(){
        fetch('http://115.29.177.200:8080/image/code')
        .then(function(response) {
                return response.json();
        }).then(function(body) {
                this.setState({getCode:body.data.image});
                this.setState({codeKey:body.data.codeKey});
        }.bind(this))


        fetch(`http://115.29.177.200:8080/school/public/info?sid=${this.state.sid}&token=1120010070000050018104848`)
        .then(function(response) {
            return response.json();
        }).then(function(body) {
            this.setState({school:body.data});
        }.bind(this))

    }

    //组件是否应该做更新
    shouldComponentUpdate(nextProps,nextState){
        return true
    }

    render(){

        let error="errorInfo";
        if(this.state.error){
            error+=" show"
        }else{
            error+=" hide"
        }

        let wayStyle='';
        let wayStyle2='';
        if(this.state.loginWay){
            wayStyle='hide'
            wayStyle2='show'
        }else{
            wayStyle='show'
            wayStyle2='hide'
        }

        let loginAlert="loginAlert";
        if(this.state.showDuan){
            loginAlert+=" loginAlertHover"
        }else{
            loginAlert+=" loginAlertHide"
        }

        return (
            <div className="" style={{background:'#fff',height:'100%'}}>
                <div className="login pLogin mTp">
                    <div className="lrIcon"></div>
                    <div className="login-zheTop">
                    </div>
                    <section>
                        <div className="login-title">
                                <div className="login-title-img">
                                    <img src={this.state.school.headImgLocal} />
                                </div>

                                <div style={{textAlign:'center',marginTop:'6px'}} className="login-title-span">
                                    <span>{this.state.school.schoolName}</span>
                                </div>
                             
                        </div>
                        <div className="login-jiao">
                            家长登录
                        </div>
                    </section>

                    <section>
                        <form>
                            <div className={wayStyle}>
                                <div className="login-phone">
                                    <span className="icon-yonghuming04"></span>
                                    <input ref="phone" id="email" type="text" placeholder="邮箱/手机/账号" />
                                </div>
                                <div className="login-validate">
                                    <mark className="icon-key"></mark>
                                    <input ref="psw" id="password" className="login-validate-input" type="password" placeholder="密码" />
                                </div>

                                <div className="login-code">
                                    <label className="login-code-input" style={{position:'relative'}}>
                                        <span className="icon-yangzhengma04"></span>
                                        <input style={{width:'60%'}} ref="code" type="text" placeholder="验证码" />
                                    </label>
                                    <label onClick={()=>this.codeClick()} className="login-code-btn">
                                        <img src={'data:image/jpg;base64,'+this.state.getCode} alt="" />
                                    </label>
                                    <div className="floatMyCode" onClick={()=>this.codeClick()}></div>
                                </div>
                                <p className={error}>
                                    {this.state.errorInfo}
                                </p>

                                <div className="floatMyCode" onClick={e=>this.onSubmit(event,1)} className="login-submit">
                                    <span>登 录</span>
                                </div>

                                <div className="login-twoP">
                                    <p>
                                        <a href="http://www.maixuexi.cn/register.html?userType=2">快速注册</a>
                                    </p>
                                    <p>
                                        <a href="http://www.maixuexi.cn/forget.html?uerType=2" target="_blank">
                                            找回密码
                                        </a>
                                    </p>
                                </div>

                            </div>

                            <div className="login-threeP">
                                <span>
                                    其它登录方式
                                </span>
                            </div>

                            <div className="login-fourP">
                                <div className="login-fourP-logo">
                                    <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf305ea0876e9955e&redirect_uri=http%3A%2F%2Fmaixuexi.cn%2Fparent%2F&response_type=code&scope=snsapi_base&state=WeChatLogin&component_appid=wxadd06c23643a76c8#wechat_redirect" className="icon-comments"></a>
                                </div>
                                <div className="login-fourP-span">
                                    微信登录
                                </div>
                            </div>

                        </form>
                    </section>

                    
                </div>

                <div className={loginAlert}>
                    <a onClick={()=>this.onClose()}>
                        <span>
                            关闭
                            <i className="icon-cross"></i>
                        </span>

                    </a>
                    <a href="http://www.maixuexi.cn" target="_blank">
                        首页
                    </a>
                    <a href="http://www.maixuexi.cn/help.html" target="_blank">
                        常见问题
                    </a>
                    <a href="http://blog.maixuexi.cn/" target="_blank">
                        互动讨论
                    </a>
                    <a style={{color:'#00a451!important'}} href="http://www.maixuexi.cn/school" target="_blank">
                        学校版登录
                    </a>
                    <a style={{color:'#00a451!important'}} href="http://www.maixuexi.cn/teacher" target="_blank">
                        教师登录
                    </a>
                    <a style={{color:'#00a451!important'}} href="http://www.maixuexi.cn/student" target="_blank">
                        学生登录
                    </a>
                    <a></a>
                </div>

                <div className="loginCtrl common">
                    <header className="me_header me_nav">
                        <div className="container fn">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-logo" href="#">
                                
                                    <img alt="Brand" src={me_logo} />
                                </a>
                            </div>
                            <div style={{fontSize: '16px'}} className="me_list collapse navbar-collapse fr" id="bs-example-navbar-collapse-1">
                                <a href="http://www.maixuexi.cn">首页</a>
                                <a href="http://www.tmaixuexi.cn/help.html" target="_blank">常见问题</a>
                                <a href="http://www.blog.maixuexi.cn/" target="_blank">互动讨论</a>
                                <a className="a_log" href="http://www.maixuexi.cn/school" target="_blank">学校版登录</a>
                                <a className="a_log" href="http://www.maixuexi.cn/teacher" id="teacher-login" target="_blank">教师登录</a>
                                <a className="a_log" href="http://www.maixuexi.cn/student" target="_blank">学生登录</a>
                            </div>
                            <a href="#" className="close click_tracking" data-label="Close header menu" tabIndex="1"></a>
                        </div>
                    </header>
                    <div className="me_content">
                        <div className="container">
                            <div className="me_form fl">
                                <form className="form1 form_login" >
                                    <h4>家长登录</h4>
                                    <p>
                                        <input ref="phone2" type="text" id="email" placeholder="邮 箱/手 机 号/账 号" />
                                    </p>
                                    <p>
                                        <input ref="psw2" type="password" id="password" placeholder="密 码" />
                                    </p>
                                    <p>
                                        <input ref="code2" className="inp_yzm" type="text" id="captcha" placeholder="验证码" />
                                        <img onClick={e=>this.codeClick(event)} src={'data:image/jpg;base64,'+this.state.getCode} className="inp_code" id="code" />
                                    </p>
                                    <p className="errorInfo"></p>
                                    <p onClick={e=>this.onSubmit(event,2)} className="me_p"><a className="login_btn" >登&nbsp;&nbsp;&nbsp;录</a></p>
                                    <p className="me_p2">
                                        <input type="checkbox" />
                                        <span className="continu">保持登录</span>
                                        <a className="me_look" href="http://www.maixuexi.cn/forget.html?uerType=2">找回密码</a>
                                    </p>
                                </form>
                            </div>
                            <div className="me_info fr">
                                <h4>没有账号？</h4>
                                <p>家长免费试用，快来注册吧。</p>
                                <div>
                                    <a href="http://www.maixuexi.cn/register.html?userType=2" className="me_regster">注&nbsp;&nbsp;&nbsp;册</a>
                                    <a href="http://www.maixuexi.cn/resource/麦学习LMS简介.pdf" className="me_download" target="_blank">麦学习文档下载</a>
                                </div>
                                <p className="me_mess">
                                  
                                </p>
                            </div>
                        </div>
                    </div>
                    <footer className="footer foot">
                        <div className="me_footer"><img  src={me_footer_logo} /></div>
                        <p >
                            <a href="http://www.m-cookies.com/" target="_blank">关于我们</a>|
                            <a href="#" target="_blank">问题反馈</a>
                        </p>
                        <p>
                            <span>友情链接：</span>
                            <a href="#">亲子早教</a>
                            <a href="#">试题库</a>
                        </p>
                        <p style={{fontSize: '14px'}}>市场合作：mstudy@m-cookies.com &nbsp;客服电话：027-87298233（工作时间09:00-18:00）&nbsp;公司地址：武汉市东湖西路114号景天楼2-11-2室</p>
                        <p style={{fontSize: '14px'}} className="me_p1"><span>©2015&nbsp;麦学习作业软件&nbsp;WWW.MAIXUEXI.CN&nbsp;鄂ICP备12001098号-5</span></p>
                    </footer>
                </div>
            </div>
        )
        
    }

    // 获取验证码
    codeClick(){
        console.log(123333)
        fetch('http://115.29.177.200:8080/image/code')
        .then(function(response) {
            return response.json();
        }).then(function(body) {
            this.setState({getCode:body.data.image});
            this.setState({codeKey:body.data.codeKey});
        }.bind(this))
    }

   

    onClose(){
       this.setState({showDuan:false}) 
    }

    onShowDuan(){
        this.setState({showDuan:true})
    }

    onChangeLogin(){
        this.setState({loginWay:!this.state.loginWay})
    }

    onHideWayLogin(){
        this.setState({loginWay:false})
    }

    onSubmit(e,lab){
        let user;
        let pswUser;
        let code;
        if(lab==1){
            user=this.refs.phone.value;
            pswUser=this.refs.psw.value;
            code=this.refs.code.value;
        }
        if(lab==2){
            user=this.refs.phone2.value;
            pswUser=this.refs.psw2.value;
            code=this.refs.code2.value;
        }
        if(!user&&!pswUser&&!code){
            this.setState({error:true})
            return;
        }
        if(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(user)){
            this.setState({label:2});
        }else if(/^(13[0-9]|15[0|3|6|7|8|9]|17[d]|18[6|7|8|9])\d{8}$/.test(user)){
            this.setState({label:3});
        }else if(/^[a-zA-Z]/.test(user)){
            this.setState({label:1});
        }
        let passw = hex_md5(pswUser).split('');
        passw[5] = pswUser.charAt(0);
        passw[10] = pswUser.charAt(1);
        passw[15] = pswUser.charAt(2);
        let formData1 = {};
        if (this.state.label == 1) {
            formData1 = {
                clientType: "1",
                userType: "2",
                account: user + '',
                password: passw.join(''),
                codeKey: this.state.codeKey,
                code: code
            }
            if (!user || !pswUser) {
                this.setState({error:true});
                this.setState({errorInfo:"请填写正确的账号和密码"});
                return;
            }
            if (!code) {
                this.setState({error:true});
                this.setState({errorInfo:"验证码错误"});
                return;
            }
        }

        if (this.state.label == 2) {
            formData1 = {
                clientType: "1",
                userType: "2",
                email: user + '',
                password: passw.join(''),
                codeKey: this.state.codeKey,
                code: code
            }
            if (!user || !pswUser) {
                this.setState({error:true});
                this.setState({errorInfo:"请填写正确的邮箱和密码"});
                return;
            }
            if (!code) {
                this.setState({error:true});
                this.setState({errorInfo:"验证码错误"});
                return;
            }
        }

        if(this.state.label ==3){
           formData1 = {
                clientType: "1",
                userType: "2",
                phone: user + '',
                password:passw.join(''),
                codeKey: this.state.codeKey,
                code: code
            } 
            if (!user || !pswUser) {
                this.setState({error:true});
                this.setState({errorInfo:"请填写正确的手机号和验证码"});
                return;
            }
        }


        fetch('http://115.29.177.200:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData1)
        }).then(function(response) {
                return response.json();
        }).then(function(data) {
                let mings = data.data;
                if (data.status == 0) {
                localStorage.setItem('mySid2', mings.school[0].sid);
                localStorage.setItem('myUid2', mings.uid);
                if (mings.school.length > 1) {
                    localStorage.setItem('schools2', JSON.stringify(mings.school));
                    localStorage.setItem('TemporaryToken2', mings.token);
                    this.context.router.push(`/loginMultipleSchooles`);
                    return mings.school;
                } else {
                    // localStorage.setItem('tokens2', JSON.stringify(mings.token));
                    localStorage.setItem('tokenTime2', JSON.stringify(new Date().getTime()));
                    localStorage.setItem('schools2', JSON.stringify(mings.school));
                    let jsons = {
                        sid: '' + mings.school[0].sid,
                        userType: '2',
                        uid: '' + mings.uid,
                        token: mings.token
                    };

                    fetch('http://115.29.177.200:8080/login/in', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jsons)
                    }).then(function(response) {
                            return response.json();
                    }).then(function(res) {
                        if(res.data.voucher){
                            window.location.href=`http://www.maixuexi.cn/completion.html?parentId=${res.data.parentId}&voucher=${res.data.voucher}`
                            return;
                        }
                        
                        localStorage.setItem('relo2','true');
                        localStorage.setItem('parentInfo', JSON.stringify(res.data));
                        localStorage.setItem('tokens2', res.data.token);
                        
                        this.context.router.push(`/home/${jsons.sid}`)
                        
                    }.bind(this)).then(function(){
                        
                    }.bind(this))
                }
            } else {
               
            }
            return data;
        }.bind(this))

    }

}

Login.contextTypes={
    router: React.PropTypes.object
}

