webpackJsonp([17],{20:255,25:255,468:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(24),s=n(l),o=a(12),r=n(o),u=a(13),c=n(u),i=a(14),d=n(i),f=a(16),p=n(f),h=a(15),m=n(h),v=a(2),g=n(v),y=a(19);n(y),a(9);a(20),a(25);var k=function(e){function t(e){(0,c.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.shu=60,a.state={selfInfo:{},lab:"",isYan:!0,shu:60},a.sure=a.sure.bind(a),a.changeYan=a.changeYan.bind(a),a.goBack=a.goBack.bind(a),a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){this.setState({lab:this.props.params.lab})}},{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){var e="",t="";return this.state.isYan?(e="show",t="hide"):(e="hide",t="show"),g.default.createElement("div",{className:"selfOnly mTp"},g.default.createElement("div",{className:"topBar"},g.default.createElement("div",{className:"topBar-content"},g.default.createElement("div",{className:"topBar-content-main"},"个人中心")),g.default.createElement("div",{onClick:this.goBack,className:"topBar-left"},g.default.createElement("span",null,"<返回")),g.default.createElement("div",{className:"topBar-right"})),g.default.createElement("div",{className:"lrIcon"}),g.default.createElement("div",{className:"login-phone"},g.default.createElement("input",{ref:"email",type:"text",placeholder:"输入新手机"})),g.default.createElement("div",{className:"login-validate"},g.default.createElement("label",null,g.default.createElement("input",{ref:"code",type:"text",placeholder:"手机验证码"})),g.default.createElement("span",{onClick:this.changeYan},g.default.createElement("span",{className:e},"获取验证码"),g.default.createElement("span",{className:t},this.state.shu,"秒"))),g.default.createElement("p",{style:{paddingLeft:"15px"},className:"errorInfo"}),g.default.createElement("div",{onClick:this.sure,className:"selfOnly-sure"},"修改"))}},{key:"changeYan",value:function(){var e=this,t={phone:this.refs.email.value};if(!(this.shu<60)){this.setState({isYan:!1});var a=setInterval(function(){e.shu>0?e.shu--:(e.setState({isYan:!0}),e.shu=60,clearInterval(a)),e.setState({shu:e.shu})},1e3);fetch("http://115.29.177.200:8080/captcha/create",{method:"POST",headers:{"Content-Type":"application/json"},body:(0,s.default)(t)}).then(function(e){return e.json()}).then(function(e){0==e.status&&alert("验证码已发送至您的手机,请注意查收!")}.bind(this))}}},{key:"sure",value:function(e){var t={uid:this.props.uid,captcha:this.refs.code.value,phone:this.refs.email.value};confirm("确认修改?")&&fetch("http://115.29.177.200:8080/modify/phone?token="+this.props.tokens,{method:"PUT",headers:{"Content-Type":"application/json"},body:(0,s.default)(t)}).then(function(e){return e.json()}).then(function(e){0==e.status&&this.context.router.push("self")}.bind(this))}},{key:"goBack",value:function(){history.back()}}]),t}(g.default.Component);t.default=k,k.defaultProps={tokens:localStorage.getItem("tokens2"),parentId:JSON.parse(localStorage.getItem("parentInfo"))?JSON.parse(localStorage.getItem("parentInfo")).parentId:null,uid:JSON.parse(localStorage.getItem("parentInfo"))?JSON.parse(localStorage.getItem("parentInfo")).userId:null},k.contextTypes={router:g.default.PropTypes.object}}});