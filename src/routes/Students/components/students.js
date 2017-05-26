import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router'
import store from '../../../store/createStore'

import "./students.scss"

import imgUrl from "../assets/p120.png"

export default class Students extends React.Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        this.props.httpStudents()
    }

    //组件是否应该做更新
    // shouldComponentUpdate(nextProps,nextState){
    //     return true
    // }

    render(){
        const { httpStudents, students: {text} } = this.props;
        console.log('text:',text)
        // const getStudentsList=text.getStudentsList;
        return (
            <div className="students mTp">
                <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                                我的孩子
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <Link to="/addStudent"  className="topBar-right">
                        <span className="icon-plus-circle" style={{color:'#10b065',lineHeight:"40px"}}></span>
                    </Link>
                </div>
                <div className="paddingBottom">
                {
                   text?
                   text.getStudentsList.map((item,i)=>(
                       <Link key={i} className="students-href">
                            <div className="students-href-img">
                                <img src={item.photo} alt="" />
                            </div>
                            <div className="students-href-content">
                                <p>
                                    <span>{item.studentName}</span>
                                </p>
                                <p>学号 : {item.number}</p>
                                <p><span>{item.myInfoLeft}</span> {item.myInfo2}</p>
                            </div>
                            <div className="students-href-mark">
                                <mark style={{fontSize:'22px'}} className="icon-angle_right"></mark>
                            </div>
                        </Link>
                   )) :
                   <div>没数据</div>
                }
                    
                </div>
            </div>
        )
    }

    goBack(){
        history.back();
    }


}


Students.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null
}

Students.propTypes = {
  students: React.PropTypes.object.isRequired
}
