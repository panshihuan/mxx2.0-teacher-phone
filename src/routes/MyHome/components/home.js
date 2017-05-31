import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router'
import './home.scss'
import p120 from '../assets/p120.png'

export default class Home extends React.Component {
    constructor(props) {
        if (localStorage.getItem('relo2')=='true') {
            localStorage.setItem('relo2','false');
            location.reload();
        }
        super(props);
        this.state={
            parentInfo:{}
        }
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        
        fetch(`http://115.29.177.200:8080/parent?parentId=${this.props.parentId}&token=${this.props.tokens}`)
        .then(function(response) {
                return response.json();
        }).then(function(data) {
                if(data.status==0){
                    
                    if(data.data.email){
                        data.data['myInfo']=data.data.email
                    }else if(data.data.phone){
                        data.data['myInfo']=data.data.phone
                    }else if(data.data.account){
                        data.data['myInfo']=data.data.account
                    }

                    if (!data.photo) {
                        data.data['photo'] = p120;
                    }
                    this.setState({parentInfo:data.data})
                }
                
        }.bind(this))
    }

    render(){
        
        return (
                <div className="menu mTp">

                    <div className="topBar">
                        <div className="topBar-content">
                            <div className="topBar-content-main">
                                    欢迎进入麦学习
                            </div>
                        </div>
                        <div className="topBar-left">
                            <span></span> 
                        </div>
                        <div className="topBar-right">
                            
                        </div>
                    </div>

                    <div className="menu-nav">
                        <div className="menu-nav-img">
                        
                        </div>
                        <div className="menu-nav-info">
                            <img className="menu-nav-info-pic" src={this.state.parentInfo.photo} />
                            <div className="menu-nav-info-font">
                                <p>{this.state.parentInfo.parentName}</p>
                                <p>{this.state.parentInfo.myInfo}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="menu-section">
                        <div className="menu-title">
                            <i style={{paddingRight:'4px'}} className="icon-home menu-title-icon"></i>
                            <span>家长详情</span>
                        </div>
                        <Link to="students">
                            <p className="icon-group"></p>
                            <span>我的孩子</span>
                        </Link>
                        <a href="https://buluo.qq.com/p/barindex.html?bid=233222">
                            <p className="icon-book"></p>
                            <span>学习部落</span>
                        </a>
                        <Link>
                            <p style={{background:'#aaa'}} className="icon-uniF2BB"></p>
                            <span style={{color:'#aaa'}}>家长须知</span>
                        </Link>
                        <Link to="/self">
                            <p className="icon-user2"></p>
                            <span>个人中心</span>
                        </Link>
                    </div>
                </div>
        )
    }

}


Home.defaultProps={
    tokens: localStorage.getItem('tokens2'),
    parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null
}