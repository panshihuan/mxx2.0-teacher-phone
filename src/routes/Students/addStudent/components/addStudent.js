import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link,History } from 'react-router'
import hex_md5 from '../../../../components/md5';
import "../../components/students.scss"

export default class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            roles:1,
            error:false,
            errorInfo:'请填写正确的学生账号和密码!',
            getStudentsList:[]
        }
        this.goBack=this.goBack.bind(this);
        this.sure=this.sure.bind(this);
        this.onRole=this.onRole.bind(this);
    }

    componentWillMount(){

    }

    componentDidMount(){
        
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
        return (
            <div style={{marginTop:'15px'}} className="parentAlter mTp">
                    <div className="topBar">
                        <div className="topBar-content">
                            <div className="topBar-content-main">
                                    绑定学生
                            </div>
                        </div>
                        <div onClick={this.goBack} className="topBar-left">
                            <span>&lt;返回</span> 
                        </div>
                        <div className="topBar-right">
                            
                        </div>
                    </div>
                    <div className="parentAlter-header">
                        <section>
                            <input ref="account" type="text" required name="account" placeholder="填写学生账号"/>
                        </section>
                        <section>
                            <input ref="psw" type="password" required name="psw" placeholder="填写学生登录密码验证"/>
                        </section>
                    </div>
                    <p style={{marginBottom:'10px'}} className={error}>{this.state.errorInfo}</p>

                    <main className="parentAlter-main">
                        <section  onClick={()=>this.onRole(1)}>
                            <input type="radio" name="role"/>
                            <p>我是爸爸</p>
                        </section>
                        <section onClick={()=>this.onRole(2)}>
                            <input type="radio" name="role"/>
                            <p>我是妈妈</p>
                        </section>
                        <section onClick={()=>this.onRole(3)}>
                            <input type="radio" name="role"/>
                            <p>我是爷爷</p>
                        </section>
                        <section onClick={()=>this.onRole(4)}>
                            <input type="radio" name="role"/>
                            <p>我是奶奶</p>
                        </section>
                        <section onClick={()=>this.onRole(5)}>
                            <input type="radio" name="role"/>
                            <p>其他</p>
                        </section>
                    </main>

                    <footer className="parentAlter-footer">
                        <button onClick={this.sure}>
                            确认绑定
                        </button>
                    </footer>   
            </div>
        )
    }

    goBack(){
        history.back();
    }

    onRole(lab){
        this.setState({roles:lab})
    }

    sure(){
        let account=this.refs.account.value;
        let psw=this.refs.psw.value;
        let passw = hex_md5(psw).split('');

        passw[5] = psw.charAt(0);
        passw[10] = psw.charAt(1);
        passw[15] = psw.charAt(2);
        let jsons = {
            password: passw.join('')
        }
        if(!this.refs.account.value||!this.refs.psw.value){
            this.setState({error:true})
            return
        }

        if (/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(account)) {
            jsons['email'] = account
        } else if (/^1[3|4|5|7|8][0-9]{9}$/.test(account)) {
            jsons['phone'] = account
        } else {
            jsons['account'] = account
        }

        fetch(`http://115.29.177.200:8080/get/student/id?token=${this.props.tokens}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsons)
        }).then(function(response) {
                return response.json();
        }).then(function(data) {
                if (data.status==0) {
                    let formData2 = {
                        parentId: this.props.parentId,
                        studentId: data.data.studentId,
                        role: this.state.roles
                    }    

                    fetch(`http://115.29.177.200:8080/parent/student/relation?token=${this.props.tokens}`, {
                        method: 'POST',
                             headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData2)
                    }).then(function(response) {
                            return response.json();
                    }).then(function(data) {
                            if (data.status==0) {
                              alert('绑定成功!')
                              this.context.router.push(`/students`);
                            }else{
                                alert(data.info)
                            }
                    }.bind(this))
            }else{
                this.setState({
                    error:true,
                    errorInfo:data.info
                })
            }
        }.bind(this))


    }

    goBack(){
        history.back();
    }

}

AddStudent.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
}

AddStudent.contextTypes={
    router: React.PropTypes.object
}