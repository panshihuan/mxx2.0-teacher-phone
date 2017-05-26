import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link ,History} from 'react-router';
import "../../self.scss";
import "../../../../login/components/login.scss";

export default class Item1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selfInfo:{},
            lab:'',
            errorInfo:'',
            error:false
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
        let error="errorInfo";
        this.state.error?error+=' show':error+=' hide';
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
                
                <div className="login-phone">
                    <input ref="parentName" type="text" placeholder="输入姓名"/>
                </div>
                <p style={{paddingLeft:'15px'}} className="errorInfo">{this.state.errorInfo}</p>
                <div onClick={this.sure} className="selfOnly-sure">
                    修改
                </div>
            </div>
        )
    }

    sure(event){
        let obj={
            parentId:this.props.parentId,
            parentName:this.refs.parentName.value
        };


        if(confirm('确认修改?')){
            fetch(`http://115.29.177.200:8080/parent?token=${this.props.tokens}`, {
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

Item1.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  schoolName:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).schoolName:null
}

Item1.contextTypes={
    router: React.PropTypes.object
}


