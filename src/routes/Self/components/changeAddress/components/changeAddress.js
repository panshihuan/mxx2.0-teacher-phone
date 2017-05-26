import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router'
import store from '../../../../../store/createStore'

import "./changeAddress.scss"

import imgUrl from "../../../assets/p120.png"

export default class ChangeAddress extends React.Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
    }

    componentWillMount(){
        
    }

    componentDidMount(){

    }

    render(){
        const { changeDefault,sureAddress,changeAddress:result} = this.props;
        console.log('result::::',result)
        let isDefault='changeAddress-radio-mark';
        isDefault+=result.isDefault==1?' icon-check':' icon-checkbox-unchecked'
        return (
            <div className="">
                <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                            {this.props.params.label==1?'编辑邮箱地址':'新建邮箱地址'}
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div className="topBar-right">
                        
                    </div>
                </div>
                <div className="changeAddress mTp">
                    <div className="changeAddress-input">
                        <section>
                            <input ref="name" type="text" defaultValue={JSON.parse(sessionStorage.getItem('addressInfo')).name} placeholder="请填写收货人" />
                        </section>
                        <section>
                            <input ref="phone" defaultValue={JSON.parse(sessionStorage.getItem('addressInfo')).phone} type="text" placeholder="请填写联系电话" />
                        </section>
                        <section>
                            <textarea ref="address" defaultValue={JSON.parse(sessionStorage.getItem('addressInfo')).address} type="text" placeholder="请填写收货地址"></textarea>
                        </section>
                    </div>

                    <div className="changeAddress-radio">
                        <div onClick={()=>changeDefault(result.isDefault)} className="">
                            <mark className={isDefault}></mark>        
                            <span>设为默认</span>
                        </div>
                    </div>

                    <div onClick={()=>sureAddress(
                        this.props.params.label,
                        {
                            mailId:this.props.params.mailId,
                            name:this.refs.name.value,
                            phone:this.refs.phone.value,
                            address:this.refs.address.value
                        }
                        )}
                     className="changeAddress-footer">
                        <span>确 定</span>
                    </div>

                </div>
            </div>
        )
    }

    goBack(){
        history.back();
    }

}

ChangeAddress.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null
}

ChangeAddress.propTypes = {
//   changeAddress: React.PropTypes.object.isRequired
}
