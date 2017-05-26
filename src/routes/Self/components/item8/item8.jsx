import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link ,History} from 'react-router';


export default class Item8 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selfInfo:{},
            lab:''
        };
        this.sure=this.sure.bind(this);
        
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
                <div className="trIcon studentsAlter-trIcon changeTask-trIcon">
                    <a>确认</a>
                </div>

                <div  className="lrIcon">
                </div>

                <div className="selfEmail-psw">
                    <section className="selfEmail-psw-section">
                        <input type="password" placeholder="旧密码"/>
                    </section>
                    <section className="selfEmail-psw-section">
                        <input type="password" placeholder="新密码"/>
                    </section>
                    <section className="selfEmail-psw-section">
                        <input type="password" placeholder="确认密码"/>
                    </section>
                </div>

                <p style={{padding:'0 15px'}} className="errorInfo"></p>

        </div>
        )
    }

    sure(event){
        this.props.history.pushState(null, `/home/123`);
    }
            
}

Item8.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null,
  uid:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).userId:null
}


