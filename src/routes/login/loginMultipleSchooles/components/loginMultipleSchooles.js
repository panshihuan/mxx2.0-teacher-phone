import React from 'react';
import ReactDOM from 'react-dom';

// import 'whatwg-fetch';
import hex_md5 from '../../../../components/md5';
import { History  } from 'react-router'

export default class LoginMultipleSchooles extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            getCode:'',
            codeKey:'',
            label:1,
            errorInfo:'请正确填写账号/密码/验证码',
            error:false,
            schools:[],
            formData:{
                userType:'2'
            }    
        }
        this.codeClick=this.codeClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillMount(){
        this.setState({schools:JSON.parse(localStorage.getItem('schools'))});
    }

    componentDidMount(){
        fetch('http://115.29.177.200:8080/image/code')
        .then(function(response) {
                return response.json();
        }).then(function(body) {
                this.setState({getCode:body.data.image});
                this.setState({codeKey:body.data.codeKey});
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

        return (
            <div class="mTp">
                <div class="self-block">
                    <section>
                        {
                            schools.map(function(item){
                                return(
                                    <a onClick={()=>onToHome(item.sid)} className="self-block-lr">
                                        <p></p>
                                        <p>
                                            <mark>></mark>
                                        </p>
                                    </a>
                                )
                                
                            })
                        }
                        
                    </section>
                </div>
            </div>
        )
        
    }


    onToHome(sid){
        let formData={
            sid:''+sid,
            userType:'2',
            uid:''+localStorage.getItem('myUid2'),
            token:localStorage.getItem('TemporaryToken2')
        };

        // 获取真实token 接口
        fetch('http://115.29.177.200:8080/login/in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(function(response) {
                return response.json();
        }).then(function(res) {
             localStorage.setItem('parentInfo',JSON.stringify(res.data));
            localStorage.setItem('tokens2',res.data.token);
            localStorage.setItem('tokenTime2', JSON.stringify(new Date().getTime()));
            localStorage.setItem('relo','true');
            this.context.router.push(`/home/${jsons.sid}`)
        }.bind(this))
        
    }

}

LoginMultipleSchooles.contextTypes={
    router: React.PropTypes.object
}


