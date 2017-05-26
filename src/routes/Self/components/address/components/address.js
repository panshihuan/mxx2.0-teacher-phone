import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory,Link } from 'react-router'
import store from '../../../../../store/createStore'

import "./address.scss"

import imgUrl from "../../../assets/p120.png"

export default class Address extends React.Component {
    constructor(props) {
        super(props);
        this.goBack=this.goBack.bind(this);
    }

    componentWillMount(){
        
    }

    componentDidMount(){
        this.props.httpReceiveAddress()
    }

    //组件是否应该做更新
    // shouldComponentUpdate(nextProps,nextState){
    //     return true
    // }

    render(){
        const { httpReceiveAddress,triggerDefault,deleteAddress,gotoAddressInfo,address:{list}} = this.props;
        console.log('address:::',list)
        let isDefault='address-section-btn-checkbox-mark';
        return (
            <div className="">
                <div className="topBar">
                    <div className="topBar-content">
                        <div className="topBar-content-main">
                                邮寄地址
                        </div>
                    </div>
                    <div onClick={this.goBack} className="topBar-left">
                        <span>&lt;返回</span> 
                    </div>
                    <div className="topBar-right">
                        
                    </div>
                </div>
                <div className="address mTp">
                    {
                        list?
                        list.addressList.map((item,i)=>{
                            item['isDefaultStyle']=item.isDefault==1?
                            'address-section-btn-checkbox-mark icon-check':
                            'address-section-btn-checkbox-mark icon-checkbox-unchecked';
                            return(
                            <section key={i} className="address-section">
                                <div className="address-section-content">
                                    <div className="address-section-content-name">
                                        <p className="address-section-content-name-left">{item.name}</p>
                                        <p className="address-section-content-name-right">{item.phone}</p>
                                    </div>
                                    <div className="address-section-content-address">
                                        {item.address}
                                    </div>
                                </div>
                                <div className="address-section-btn">
                                    <div onClick={()=>triggerDefault({mailId:item.mailId,isDefault:item.isDefault})} className="address-section-btn-checkbox">
                                        <mark className={item.isDefaultStyle}></mark>        
                                        <span>设为默认</span>
                                    </div>
                                    <div className="address-section-btn-func">
                                        <p onClick={()=>deleteAddress({mailId:item.mailId})}>
                                            <mark className='icon-trash'></mark>
                                            <span>删除</span>
                                        </p>
                                        <p>
                                            <mark className='icon-edit'></mark>
                                            <Link onClick={()=>gotoAddressInfo({
                                                name:item.name,
                                                address:item.address,
                                                phone:item.phone,
                                            })} to={`changeAddress/1/${item.mailId}`}>编辑</Link>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        )})
                        :<div>没数据</div>
                    }

                    <div className="address-add">
                        <span>
                            <Link  className="address-add-link" to={`changeAddress/2/000`}>新增邮寄地址</Link>
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


Address.defaultProps = {
  tokens: localStorage.getItem('tokens2'),
  parentId:JSON.parse(localStorage.getItem('parentInfo'))?JSON.parse(localStorage.getItem('parentInfo')).parentId:null
}

Address.propTypes = {
  address: React.PropTypes.object.isRequired
}
