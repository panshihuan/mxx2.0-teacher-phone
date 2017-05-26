import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router'
import store from '../../../../../store/createStore'

import QRCode from 'qrcode.react';

import "./bangding.scss"

import imgUrl from "../../../assets/p120.png"


export default class Bangding extends React.Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        this.props.httpBangdingList()
    }

    render(){
        const { httpBangdingList,createBangding,deleteEr,deleteBangding,bangding:{list}} = this.props;
        console.log('list组件:::',list)
        let newBtn="bangding-create";
        let isCreate=false;
        isCreate=(list&&list.lengthT)?false:true;
        newBtn+=(list&&list.lengthT)?" hui":" lv"
        return (
            <div style={{height:'100%'}} className="">
               <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                            绑定微信
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div className="topBar-right">
                        
                    </div>
                </div>
                <div className="bangding mTp">
                {
                    list?
                    list.bangdingwill.map((item,i)=>{
                        let [item1,item2]=["bangding-section-router","bangding-section-router"]
                        if(!item.openid){
                            item1+=" showIm"
                            item2+=" hideIm"
                        }else{
                            item1+=" hideIm"
                            item2+=" showIm"
                        }
                        return(
                            <section key={i} className="bangding-section">
                                <div onClick={()=>deleteBangding({id:item.id})} className={item2}>
                                    <div className="bangding-section-router-one">
                                       {i+1} . {item.wechatName}
                                    </div>
                                    <div className="bangding-section-router-three">
                                        <span style={{fontSize:'22px'}} className="icon-angle_right"></span>
                                    </div>
                                    <div className="bangding-section-router-two">
                                        <img className="bangding-section-router-two-img2" src={item.wechatHead||''} alt=""/>
                                    </div>
                                </div>
                                    
                                <div onClick={()=>deleteEr({id:item.id})} className={item1}>
                                    <div className="bangding-section-router-one">
                                       {i+1} . 待绑定
                                    </div>
                                    <div className="bangding-section-router-three">
                                        <a className="icon-angle_right"></a>
                                    </div>
                                    <div className="bangding-section-router-two">
                                        <a>
                                            <QRCode value={item.url||''} size={120} level='L'/>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        )
                    })
                    :""
                }

                    <div onClick={()=>createBangding(isCreate)} className={newBtn}>
                        <span>
                            新增微信绑定码
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    goBack(){
        history.back();
    }

}

Bangding.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null
}

Bangding.propTypes = {
//   changeAddress: React.PropTypes.object.isRequired
}
