webpackJsonp([15],{20:255,25:255,472:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(24),o=n(l),r=a(12),s=n(r),u=a(13),c=n(u),i=a(14),p=n(i),d=a(16),f=n(d),m=a(15),h=n(m),v=a(2),k=n(v),g=a(19);n(g),a(9);a(20),a(25);var I=function(e){function t(e){(0,c.default)(this,t);var a=(0,f.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.state={selfInfo:{},lab:""},a.sure=a.sure.bind(a),a.goBack=a.goBack.bind(a),a}return(0,h.default)(t,e),(0,p.default)(t,[{key:"componentWillMount",value:function(){this.setState({lab:this.props.params.lab})}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return k.default.createElement("div",{className:"selfOnly mTp"},k.default.createElement("div",{className:"topBar"},k.default.createElement("div",{className:"topBar-content"},k.default.createElement("div",{className:"topBar-content-main"},"个人中心")),k.default.createElement("div",{onClick:this.goBack,className:"topBar-left"},k.default.createElement("span",null,"<返回")),k.default.createElement("div",{className:"topBar-right"})),k.default.createElement("div",{className:"lrIcon"}),k.default.createElement("div",{className:"login-phone"},k.default.createElement("input",{ref:"position",type:"text",placeholder:"请输入工作职位"})),k.default.createElement("p",{style:{paddingLeft:"15px"},className:"errorInfo"}),k.default.createElement("div",{onClick:this.sure,className:"selfOnly-sure"},"修改"))}},{key:"sure",value:function(e){var t={parentId:this.props.parentId,position:this.refs.position.value};confirm("确认修改?")&&fetch("http://115.29.177.200:8080/parent?token="+this.props.tokens,{method:"PUT",headers:{"Content-Type":"application/json"},body:(0,o.default)(t)}).then(function(e){return e.json()}).then(function(e){0==e.status&&this.context.router.push("self")}.bind(this))}},{key:"goBack",value:function(){history.back()}}]),t}(k.default.Component);t.default=I,I.defaultProps={tokens:localStorage.getItem("tokens2"),parentId:JSON.parse(localStorage.getItem("parentInfo"))?JSON.parse(localStorage.getItem("parentInfo")).parentId:null,uid:JSON.parse(localStorage.getItem("parentInfo"))?JSON.parse(localStorage.getItem("parentInfo")).userId:null},I.contextTypes={router:k.default.PropTypes.object}}});