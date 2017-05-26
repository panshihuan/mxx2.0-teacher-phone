import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link ,History} from 'react-router';
import hex_md5 from '../../../../../components/md5';
import "../../self.scss";
import "../../../../login/components/login.scss";

export default class Item7 extends React.Component {
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
                                个人中心
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div className="topBar-right">
                        
                    </div>
                </div>

                <div className="selfEmail-psw">
                    <section className="selfEmail-psw-section">
                        <input ref="oldPsw" type="password" placeholder="旧密码"/>
                    </section>
                    <section className="selfEmail-psw-section">
                        <input ref="newPsw" type="password" placeholder="新密码"/>
                    </section>
                    <section className="selfEmail-psw-section">
                        <input ref="surePsw" type="password" placeholder="确认密码"/>
                    </section>
                </div>

                <p style={{padding:'0 15px'}} className="errorInfo"></p>

                <div style={{margin:"0 auto",width:'90%',marginTop:'30px'}} onClick={this.sure} className="selfOnly-sure">
                    确认修改
                </div>

        </div>
        )
    }

    sure(event){
        let oldPsw=this.refs.oldPsw.value;
        let newPsw=this.refs.newPsw.value;
        let passw = hex_md5(oldPsw).split('');
        passw[5] = oldPsw.charAt(0);
        passw[10] = oldPsw.charAt(1);
        passw[15] = oldPsw.charAt(2);
        let passw2 = hex_md5(newPsw).split('');
        passw2[5] = newPsw.charAt(0);
        passw2[10] = newPsw.charAt(1);
        passw2[15] = newPsw.charAt(2);

        let jsons = {
            oldpassword: passw.join(''),
            newpassword: passw2.join('')
        }
        if(confirm('确认修改?')){
            fetch(`http://115.29.177.200:8080/changePassword?token=${this.props.tokens}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsons)
            }).then(function(response) {
                    return response.json();
            }).then(function(data) {
                if (data.status == 0) {
                    alert('密码修改成功！')
                    this.context.router.push(`self`);  
                }
            }.bind(this))
        }
    }

    goBack(){
        history.back();
    }
            
}

Item7.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  uid:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).userId:null
}

Item7.contextTypes={
    router: React.PropTypes.object
}
