import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router';
import imgUrl from "../assets/p120.png";
import "./self.scss";

export default class Self extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selfInfo:{}
        };
        this.fileChange=this.fileChange.bind(this);
        this.goBack=this.goBack.bind(this);
        this.backLogin=this.backLogin.bind(this);
    }

    componentDidMount(){
        
        fetch(`http://115.29.177.200:8080/parent?parentId=${this.props.parentId}&token=${this.props.tokens}`)
        .then(function(response) {
                return response.json();
        }).then(function(data) {
                if (!data.data.photo) {
                    data.data['photo'] = imgUrl;
                }
                this.setState({selfInfo:data.data});
        }.bind(this))
    }

    //组件是否应该做更新
    shouldComponentUpdate(nextProps,nextState){
        return true
    }

    render(){
        return (
            <div className="">
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
                    <div className="self mTp">
                        <div className="self-block">
                            <section style={{height:'70px'}}>
                                <form ref="uploadForm" encType="multipart/form-data">
                                    <Link style={{height:'70px'}} className="self-block-lr">
                                        <p>个人头像</p>
                                        <p style={{marginTop:'14px'}}>
                                                <input onChange={this.fileChange} ref="file"  type="file" capture="camera" name="resource" className="self-block-lr-file" accept="image/*" />
                                            <img src={this.state.selfInfo.photo} alt="" />
                                            <mark style={{lineHeight: "70px"}} className="icon-angle_right"></mark>
                                        </p>
                                    </Link>
                                </form>
                            </section>
                            <section>
                                <Link to="surePsw/1" className="self-block-lr">
                                    <p>真实姓名 :</p>
                                    <p>
                                        <span>{this.state.selfInfo.parentName}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link to="surePsw/2" className="self-block-lr">
                                    <p>用户名 :</p>
                                    <p>
                                        <span>{this.state.selfInfo.account}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link to="surePsw/3" className="self-block-lr">
                                    <p>邮箱绑定 :</p>
                                    <p>
                                        <span>{this.state.selfInfo.email}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                        </div>

                        <div className="self-block">
                            <section>
                                <Link to="bangding" className="self-block-lr">
                                    <p>微信绑定 :</p>
                                    <p>
                                        <span></span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <div className="self-block-input">
                                    <div>
                                        学校 :
                                    </div>
                                    <div>
                                        <input disabled style={{backgroundColor:'#fff'}} type="text" value={this.props.schoolName} />
                                    </div>
                                </div>
                            </section>
                            <section>
                                <Link to="surePsw/4" className="self-block-lr">
                                    <p>联系电话</p>
                                    <p>
                                        <span>{this.state.selfInfo.phone}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                        </div>

                        <div className="self-block">
                            <section>
                                <Link to="surePsw/5" className="self-block-lr">
                                    <p>工作单位:</p>
                                    <p>
                                        <span>{this.state.selfInfo.workUnit}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link to="surePsw/6" className="self-block-lr">
                                    <p>工作职位:</p>
                                    <p>
                                        <span>{this.state.selfInfo.position}</span>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                        </div>

                        <div className="self-block">
                            <section>
                                <Link to="surePsw/7" className="self-block-lr">
                                    <p>密码修改</p>
                                    <p>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link to="address" className="self-block-lr">
                                    <p>邮寄地址:</p>
                                    <p>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link className="self-block-lr">
                                    <p>功能设置</p>
                                    <p>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                            <section>
                                <Link className="self-block-lr">
                                    <p>意见反馈</p>
                                    <p>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                        </div>

                        <div className="self-block">
                            <section>
                                <div className="self-block-in">
                                    <div className="self-block-in-left">
                                        版本说明 :
                                    </div>
                                    <div className="self-block-in-right">
                                        麦学习2.1
                                    </div>
                                </div>
                            </section>
                            <section>
                                <Link className="self-block-lr">
                                    <p>关于</p>
                                    <p>
                                        <mark className="icon-angle_right"></mark>
                                    </p>
                                </Link>
                            </section>
                        </div>
                    </div>

                    <div className="self-backLogin">
                        <section onClick={this.backLogin}>
                            退出登录
                        </section>
                    </div>
            </div>
        )
    }


    //图片上传
    fileChange(event){
        let file=event.target.files[0];
        let fd = new FormData(); 
        fd.append('resource',file,file.name);
        fetch(`http://115.29.177.200:8080/upload?w=120&h=120&type=1&token=${this.props.tokens}`, {
            method: 'POST',
            body: fd
        }).then(function(response) {
                return response.json();
        }).then(function(data) {
               if (data.status==0) {
                   let selfInfo=this.state.selfInfo;
                   selfInfo['photo']=data.data.url;
                    this.setState({selfInfo:selfInfo});
                    let photo = data.data.url;
                    let jsons = {
                        parentId: this.props.parentId,
                        photo: photo
                    }
                    fetch(`http://115.29.177.200:8080/parent?token=${this.props.tokens}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(jsons)
                    }).then(function(response) {
                            return response.json();
                    }).then(function(data) {
                        if (data.status == 0) {
                                
                        }
                    }.bind(this))
                }
        }.bind(this))
        
    }

    goBack(){
        history.back();
    }

    backLogin(){
        if(confirm('确认退出登录?')){
            localStorage.setItem('tokens2', '');
            localStorage.setItem('tokenTime2', '');
            this.context.router.push(`/login`)
        }  
    }

}

Self.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  schoolName:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).schoolName:null
}

Self.contextTypes={
    router: React.PropTypes.object
}


