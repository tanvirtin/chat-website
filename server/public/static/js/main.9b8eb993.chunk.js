(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,a){},230:function(e,t,a){e.exports=a(416)},235:function(e,t,a){},237:function(e,t,a){},239:function(e,t,a){},388:function(e,t){},391:function(e,t,a){},392:function(e,t,a){},412:function(e,t,a){},413:function(e,t,a){e.exports=a.p+"static/media/cancel.fbd28b8b.jpg"},414:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n,r,s,i,o,c,l,u,h,m,p,f,g,b,d=a(0),v=a.n(d),y=a(38),k=a.n(y),O=(a(235),a(30)),w=a(36),E=a(19),j=a(20),N=a(26),S=(a(110),a(10)),x={home:{logout:"Logout",typeMessagePlaceholder:"Type a message",searchPlaceholder:"Search..."},login:{email:"Email",password:"Password",enterEmail:"Enter Email",submit:"Submit",gotoRegistration:"Create an Account"},register:{firstName:"First Name",lastName:"Last Name",gotoLogin:"Already have an account? Sign in"}},M={},C=(n=function(){function e(){Object(E.a)(this,e),Object(w.a)(this,"type",r,this),Object(w.a)(this,"translation",s,this)}return Object(j.a)(e,[{key:"changeTranslations",value:function(e){this.type=e}},{key:"getTranslation",value:function(e,t){var a=t?"?".concat(e,"-").concat(t,"?"):"?".concat(e,"?");if(e&&t&&this.translation[this.type]&&this.translation[this.type][e]&&this.translation[this.type][e][t]){var n=this.translation[this.type][e][t];if("string"===typeof n)return n}else{if(e&&t)return a;if(e){t=e;var r=this.translation[this.type][t];if(r&&"string"===typeof r)return r;for(var s in this.translation[this.type]){var i=this.translation[this.type][s];if("object"===typeof i&&t in i&&"string"===typeof i[t])return i[t]}}}return a}}]),e}(),r=Object(N.a)(n.prototype,"type",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"en-CA"}}),s=Object(N.a)(n.prototype,"translation",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{"en-CA":x,"fr-CA":M}}}),Object(N.a)(n.prototype,"changeTranslations",[S.d],Object.getOwnPropertyDescriptor(n.prototype,"changeTranslations"),n.prototype),n),T=a(221),A=(i=function(){function e(){Object(E.a)(this,e),Object(w.a)(this,"id",o,this),Object(w.a)(this,"email",c,this),Object(w.a)(this,"token",l,this),Object(w.a)(this,"firstName",u,this),Object(w.a)(this,"lastName",h,this),this.nonObservableToken=null,this.cookies=null,this.cookies=new T.a;var t=this.cookies.get("token");this.token=t,this.nonObservableToken=t,this.id=this.cookies.get("id"),this.email=this.cookies.get("email"),this.firstName=this.cookies.get("firstName"),this.lastName=this.cookies.get("lastName")}return Object(j.a)(e,[{key:"storeAuthentication",value:function(e){for(var t in this.nonObservableToken=e.token,e)this[t]=e[t],this.cookies.set(t,e[t],{path:"/",maxAge:"18000"})}},{key:"refreshAuthentication",value:function(){this.token=null,this.cookies.remove("token"),this.id=null,this.cookies.remove("id"),this.email=null,this.cookies.remove("email"),this.firstName=null,this.cookies.remove("firstName"),this.lastName=null,this.cookies.remove("lastName")}}]),e}(),o=Object(N.a)(i.prototype,"id",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=Object(N.a)(i.prototype,"email",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=Object(N.a)(i.prototype,"token",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=Object(N.a)(i.prototype,"firstName",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),h=Object(N.a)(i.prototype,"lastName",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(N.a)(i.prototype,"storeAuthentication",[S.d],Object.getOwnPropertyDescriptor(i.prototype,"storeAuthentication"),i.prototype),Object(N.a)(i.prototype,"refreshAuthentication",[S.d],Object.getOwnPropertyDescriptor(i.prototype,"refreshAuthentication"),i.prototype),i),U=(m=function(){function e(){Object(E.a)(this,e),Object(w.a)(this,"messages",p,this)}return Object(j.a)(e,[{key:"storeMessage",value:function(e){this.messages=e}}]),e}(),p=Object(N.a)(m.prototype,"messages",[S.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(N.a)(m.prototype,"storeMessage",[S.d],Object.getOwnPropertyDescriptor(m.prototype,"storeMessage"),m.prototype),m),D=a(72),L=a(28),R=a(27),P=a(29),I=a(197),z=a.n(I),W=(a(237),function(e){return v.a.createElement("label",{className:"translation-switch-container"},v.a.createElement("span",null,e.label),v.a.createElement(z.a,{className:"translation-switch",checked:e.checked,onChange:e.handleChange,onColor:"#86d3ff",offColor:"#86d3ff",handleDiameter:25,uncheckedIcon:!1,checkedIcon:!1,boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:20,width:48}))}),X=Object(O.b)(function(e){return{translation:e.translation}})(f=Object(O.c)(f=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(L.a)(this,Object(R.a)(t).call(this,e))).state={checked:!1},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"handleChange",value:function(){var e=this,t=this.props.translation;this.setState({checked:!this.state.checked},function(){e.state.checked?t.changeTranslations("fr-CA"):t.changeTranslations("en-CA")})}},{key:"render",value:function(){var e=this.props.translation;return v.a.createElement(W,{label:e.type,checked:this.state.checked,handleChange:this.handleChange.bind(this)})}}]),t}(d.Component))||f)||f,G=a(48),_=a(18),q=a.n(_),B=a(25),F=function(){function e(){Object(E.a)(this,e)}return Object(j.a)(e,null,[{key:"getRandomNumber",value:function(e,t){return Math.ceil(Math.random()*(t+1-e))}},{key:"decorateWithMobX",value:function(e){return Object(O.b)("message","authentication","translation")(Object(O.c)(function(t){return e(t)}))}}]),e}(),H=a(423),J=a(424),V=a(203),K=a(428),$=a(417),Q=a(430),Y=(a(239),F.decorateWithMobX(function(e){return v.a.createElement(Q.a,{style:{visibility:e.show?"visible":"hidden"},compact:!0,className:"notify",floating:!0,content:e.message})})),Z=(a(170),F.decorateWithMobX(function(e){var t=e.translation;return v.a.createElement(H.a,null,v.a.createElement(Y,{show:e.showNotify,message:e.message}),v.a.createElement(J.a,{className:"justify-content-md-center login-container"},v.a.createElement(V.a,{md:4},v.a.createElement(K.a,{onSubmit:e.onSubmit},v.a.createElement(K.a.Group,{controlId:"email"},v.a.createElement(K.a.Label,null,t.getTranslation("email")),v.a.createElement(K.a.Control,{type:"email",placeholder:t.getTranslation("enterEmail")})),v.a.createElement(K.a.Group,{controlId:"password"},v.a.createElement(K.a.Label,null,t.getTranslation("password")),v.a.createElement(K.a.Control,{type:"password",placeholder:t.getTranslation("password")})),v.a.createElement($.a,{type:"submit",loading:e.formSubmitted,primary:!0},t.getTranslation("submit")),v.a.createElement(K.a.Text,{className:"text-muted authentication-link"},v.a.createElement("a",{href:"/register"},t.getTranslation("gotoRegistration")))))))})),ee=F.decorateWithMobX(function(e){var t=e.translation;return v.a.createElement(H.a,null,v.a.createElement(Y,{show:e.showNotify,message:e.message}),v.a.createElement(J.a,{className:"justify-content-md-center register-container"},v.a.createElement(V.a,{md:4},v.a.createElement(K.a,{onSubmit:e.onSubmit},v.a.createElement(K.a.Group,{controlId:"email"},v.a.createElement(K.a.Label,null,t.getTranslation("email")),v.a.createElement(K.a.Control,{type:"email",placeholder:t.getTranslation("enterEmail")})),v.a.createElement(K.a.Group,{controlId:"password"},v.a.createElement(K.a.Label,null,t.getTranslation("password")),v.a.createElement(K.a.Control,{type:"password",placeholder:t.getTranslation("password")})),v.a.createElement(K.a.Group,{controlId:"firstName"},v.a.createElement(K.a.Label,null,t.getTranslation("firstName")),v.a.createElement(K.a.Control,{type:"text",placeholder:t.getTranslation("firstName")})),v.a.createElement(K.a.Group,{controlId:"lastName"},v.a.createElement(K.a.Label,null,t.getTranslation("lastName")),v.a.createElement(K.a.Control,{type:"text",placeholder:t.getTranslation("lastName")})),v.a.createElement($.a,{type:"submit",loading:e.formSubmitted,primary:!0},t.getTranslation("submit")),v.a.createElement(K.a.Text,{className:"text-muted authentication-link"},v.a.createElement("a",{href:"/login"},t.getTranslation("gotoLogin")))))))}),te=a(206),ae=a.n(te),ne=function(){function e(){Object(E.a)(this,e)}return Object(j.a)(e,null,[{key:"request",value:function(e){var t=e.method,a=e.url,n=e.data,r=e.token,s={method:t,url:"".concat("","/").concat(a)};return r&&(s.headers={authorization:"Bearer ".concat(r)}),n&&(s.data=n),ae()(s)}},{key:"post",value:function(e){var t=e.url,a=e.data,n=e.token;return this.request({method:"POST",url:t,data:a,token:n})}},{key:"get",value:function(e){var t=e.url,a=e.data,n=e.token;return this.request({method:"GET",url:t,data:a,token:n})}}]),e}(),re=function(e){function t(){return Object(E.a)(this,t),Object(L.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,null,[{key:"parseFormData",value:function(e){var t=e.elements,a={},n=!0,r=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var c=i.value,l=c.id,u=c.value;l&&(a[l]=u)}}catch(h){r=!0,s=h}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return a}},{key:"login",value:function(e){var t=this.parseFormData(e);return this.post({url:"login",data:t})}},{key:"register",value:function(e){var t=this.parseFormData(e);return this.post({url:"register",data:t})}},{key:"logout",value:function(e){return this.post({url:"logout",token:e})}}]),t}(ne),se=function(e){function t(){return Object(E.a)(this,t),Object(L.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,null,[{key:"search",value:function(){var e=Object(B.a)(q.a.mark(function e(t,a){var n,r,s,i;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:"api/search/user",token:a,data:{query:{bool:{should:[{match_phrase_prefix:{firstName:t}},{match_phrase_prefix:{lastName:t}}]}}}},e.next=3,this.post(n);case 3:return r=e.sent,s=r.data.body.hits.hits,i=s.map(function(e){return e._source}),e.abrupt("return",i);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),t}(ne),ie=function(e){function t(){return Object(E.a)(this,t),Object(L.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,null,[{key:"getConversation",value:function(){var e=Object(B.a)(q.a.mark(function e(t,a,n,r){var s;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get({url:"api/conversation?with=".concat(t,"&page=").concat(a,"&limit=").concat(n),token:r});case 2:return s=e.sent,e.abrupt("return",s&&s.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}()},{key:"sendMessage",value:function(e,t){return this.post({url:"api/message",data:e,token:t})}}]),t}(ne),oe=Object(O.b)("authentication")(g=Object(O.c)(g=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(L.a)(this,Object(R.a)(t).call(this,e))).state={formSubmitted:!1,showNotify:!1,message:""},a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"showNotification",value:function(e,t){var a=this;this.setState({showNotify:!0,formSubmitted:!1,message:e},function(){var e=setTimeout(function(){a.setState({showNotify:!1,message:""})},3e3);"function"===typeof t&&(clearTimeout(e),t())})}},{key:"storeAuthentication",value:function(e){var t=e.data;this.props.authentication.storeAuthentication(t)}},{key:"authenticate",value:function(){var e=Object(B.a)(q.a.mark(function e(t){var a,n,r=this;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.register){e.next=8;break}return e.next=3,re.register(t);case 3:a=e.sent,this.storeAuthentication(a),this.showNotification("Registration successful!",function(){setTimeout(function(){r.props.history.push("/home")},1e3)}),e.next=13;break;case 8:return e.next=10,re.login(t);case 10:n=e.sent,this.storeAuthentication(n),this.showNotification("Login successful!",function(){setTimeout(function(){r.props.history.push("/home")},700)});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"onSubmit",value:function(e){var t=this;if(!0!==this.state.formSubmitted){e.preventDefault();var a=e.target;this.setState({formSubmitted:!0},Object(B.a)(q.a.mark(function e(){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.authenticate(a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.showNotification(e.t0.message);case 8:case"end":return e.stop()}},e,null,[[0,5]])})))}}},{key:"render",value:function(){return this.props.register?v.a.createElement(ee,{message:this.state.message,showNotify:this.state.showNotify,formSubmitted:this.state.formSubmitted,onSubmit:this.onSubmit.bind(this)}):v.a.createElement(Z,{message:this.state.message,showNotify:this.state.showNotify,formSubmitted:this.state.formSubmitted,onSubmit:this.onSubmit.bind(this)})}}]),t}(d.Component))||g)||g,ce=Object(G.g)(oe),le=a(209),ue=a(106),he=a(210),me=a.n(he),pe=a(429),fe=a(425),ge=a(426),be=(a(391),F.decorateWithMobX(function(e){var t="medium"===e.size?"medium":"small";return v.a.createElement("div",{className:"avatar-container avatar-".concat(t)},e.firstLetter)})),de=(a(392),F.decorateWithMobX(function(e){var t=e.translation,a=e.user,n=e.recipient,r=e.selectedUsers,s=e.messages,i=e.onLogout,o=e.onSendMessage;return v.a.createElement(H.a,{className:"home-container"},v.a.createElement(J.a,{className:"profile-tab user-profile-tab"},v.a.createElement(V.a,{className:"profile-avatar"},v.a.createElement(be,{firstLetter:a.firstName[0].toUpperCase()})),v.a.createElement(pe.a,{labeled:!0,button:!0,icon:"setting"},v.a.createElement(pe.a.Menu,null,v.a.createElement(pe.a.Item,{onClick:i,text:t.getTranslation("logout")})))),v.a.createElement(J.a,{className:"row-container"},v.a.createElement(V.a,{className:"scrollable user-container",xs:3},v.a.createElement(J.a,{className:"user-search"},v.a.createElement(V.a,null,v.a.createElement(pe.a,{onSearchChange:e.onUserSearch,onChange:e.onUserDropdownOptionSelect,placeholder:t.getTranslation("searchPlaceholder"),fluid:!0,search:!0,selection:!0,value:"",options:e.userDropdownOptions,loading:e.userSearchLoading}))),r),v.a.createElement(V.a,{className:"message-container",xs:9},n&&v.a.createElement(J.a,{className:"profile-tab chat-profile-tab"},v.a.createElement(V.a,null,v.a.createElement(be,{firstLetter:n.firstName[0].toUpperCase()}))),n&&v.a.createElement(J.a,{onScroll:e.onMessageScroll,className:"scrollable messages"},v.a.createElement(V.a,null,v.a.createElement(fe.a,{className:"message-loader",active:e.loaderActive}),s)),n&&v.a.createElement(J.a,{className:"send-message"},v.a.createElement(V.a,null,v.a.createElement(ge.a,{onKeyDown:o,className:"message-input",size:"mini",placeholder:t.getTranslation("typeMessagePlaceholder")}))))))})),ve=(a(412),F.decorateWithMobX(function(e){var t=e.user,n="".concat(t.firstName," ").concat(t.lastName);return n.length>15&&(n="".concat(n.substring(0,15),"...")),v.a.createElement(J.a,{style:{backgroundColor:e.selected?"#f7f7f7":"white"},className:"user-card-container"},v.a.createElement(V.a,null,v.a.createElement("div",{onClick:function(){return e.onClick(t.email)},className:"user-card"},v.a.createElement(be,{firstLetter:n[0].toUpperCase(),size:"medium"}),v.a.createElement("div",{className:"user-card-text-group"},v.a.createElement("h1",null," ",n," ")),v.a.createElement("div",{className:"user-card-options"},e.unseenMessages>0&&v.a.createElement("div",{className:"count-bubble"},e.unseenMessages),v.a.createElement("img",{onClick:function(a){a.stopPropagation(),e.onCloseUserCard(t.email)},className:"close-user-card",src:a(413)})))))})),ye=(a(414),function(e){function t(){return Object(E.a)(this,t),Object(L.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){return v.a.createElement(J.a,null,v.a.createElement("div",{ref:this.props.messageRef,className:this.props.left?"message-card-container-left":"message-card-container-right",xs:1},v.a.createElement(V.a,{className:"message-card ".concat(this.props.left?"message-card-left":"message-card-right")},this.props.username&&v.a.createElement("h6",{className:"message-user"}," ",this.props.username," "),v.a.createElement("p",null,this.props.message,v.a.createElement("small",null,this.props.timestamp)))))}}]),t}(d.Component)),ke=a(75),Oe=a.n(ke);function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(a,!0).forEach(function(t){Object(le.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var je=Object(O.b)("authentication")(b=Object(O.c)(b=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(L.a)(this,Object(R.a)(t).call(this,e))).currentPage=0,a.unseenMessagesMap={},a.state={messages:[],userDropdownOptions:{},selectedUsers:{},userSearchLoading:!1,recipient:null,loaderActive:!1},a.attachSocketIOHandler(),a}return Object(P.a)(t,e),Object(j.a)(t,[{key:"attachSocketIOHandler",value:function(){var e=this,t=window.location,a=t.protocol,n=t.hostname,r=t.port,s="".concat(a,"//").concat(n,":").concat(parseInt(r,10)+1);this.socket=me()(s),this.socket.on(this.props.authentication.token,function(t){if(e.state.recipient&&(e.state.recipient.email===t.to||e.state.recipient.email===t.from&&t.to===e.props.authentication.email)&&e.state.recipient.email!==e.props.authentication.email){var a=Object(ue.a)(e.state.messages);a.push(v.a.createElement(ye,{messageRef:e.messageRef,key:Math.random(),message:t.message,timestamp:Oe()().format("hh:mm a"),right:t.from===e.props.authentication.email,left:t.from!==e.props.authentication.email})),e.setMessagesState(a)}else t.from!==e.props.authentication.email&&(t.from in e.unseenMessagesMap?e.unseenMessagesMap[t.from]+=1:e.unseenMessagesMap[t.from]=1,e.forceUpdate())})}},{key:"onLogout",value:function(){var e=Object(B.a)(q.a.mark(function e(){var t;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.authentication,e.prev=1,e.next=4,re.logout(t.token);case 4:t.refreshAuthentication(),e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(1),!e.t0||!e.t0.response||403!==e.t0.response.status){e.next=13;break}this.props.history.push("/login"),e.next=15;break;case 13:if(!e.t0){e.next=15;break}throw e.t0;case 15:case"end":return e.stop()}},e,this,[[1,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"onMessageScroll",value:function(e){var t=this,a=e.target&&e.target.scrollTop;this.scrollHeight=e.target&&e.target.scrollHeight,this.currentPage>0&&0===a&&this.state.recipient&&!this.state.recipient.allMessagesRetrieved&&this.state.messages&&this.state.messages.length>="15"&&this.setState({loaderActive:!0},Object(B.a)(q.a.mark(function e(){var a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.getConversation(t.state.recipient.email,++t.currentPage,"15",t.props.authentication.token);case 3:if(a=e.sent,t.unseenMessagesMap[t.state.recipient.email]=a.unseenItems,!(a=a.items)||0!==a.length){e.next=8;break}return e.abrupt("return",t.setState({loaderActive:!1,recipient:Ee({},t.state.recipient,{allMessagesRetrieved:!0})}));case 8:t.setState({loaderActive:!1},function(){for(var e=Object(ue.a)(t.state.messages),n=[],r=a.length-1;r>=0;--r){var s=a[r];t.messageRef=v.a.createRef(),n.push(v.a.createElement(ye,{messageRef:t.messageRef,key:Math.random(),message:s.message,timestamp:Oe()().format("hh:mm a"),right:s.from===t.props.authentication.email,left:s.from!==t.props.authentication.email}))}t.state.recipient&&!t.state.recipient.allMessagesRetrieved&&t.setState({messages:n.concat(e)},function(){t.messageRef.current.scrollIntoView()})}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t.setState({loaderActive:!1},function(){if(e.t0&&e.t0.response&&403===e.t0.response.status)t.props.history.push("/login");else if(e.t0)throw e.t0});case 14:case"end":return e.stop()}},e,null,[[0,11]])})))}},{key:"onUserSearch",value:function(e){var t=this,a=e.currentTarget.value;a&&this.setState({userSearchLoading:!0},Object(B.a)(q.a.mark(function e(){var n,r,s;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.authentication,e.prev=1,e.next=4,se.search(a,n.token);case 4:r=e.sent,s={},r.forEach(function(e){var t=e.email;s[t]=e}),t.setState({userSearchLoading:!1,userDropdownOptions:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.setState({userSearchLoading:!1},function(){if(e.t0&&e.t0.response&&403===e.t0.response.status)t.props.history.push("/login");else if(e.t0)throw e.t0});case 13:case"end":return e.stop()}},e,null,[[1,10]])})))}},{key:"onUserDropdownOptionSelect",value:function(){var e=Object(B.a)(q.a.mark(function e(t,a){var n,r,s,i,o;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.value,"ArrowDown"!==(r=t.key)&&"ArrowUp"!==r&&(s=this.state.userDropdownOptions[n],i=Ee({},this.state.selectedUsers),o={recipient:s,userDropdownOptions:{}},s.email in this.state.selectedUsers||(i[n]=s,o.selectedUsers=i),this.setMessages(n,o));case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"onUserClick",value:function(){var e=Object(B.a)(q.a.mark(function e(t){return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({recipient:this.state.selectedUsers[t]}),this.setMessages(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"setMessagesState",value:function(e,t){var a=this;this.setState(Ee({messages:e},t),function(){a.messageRef&&a.messageRef.current&&a.messageRef.current.scrollIntoView()})}},{key:"setMessages",value:function(e,t){var a=this;this.setState({loaderActive:!0},Object(B.a)(q.a.mark(function n(){var r;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ie.getConversation(e,1,"15",a.props.authentication.token);case 3:r=n.sent,a.unseenMessagesMap[e]=r.unseenItems,r=r.items,a.setState({loaderActive:!1},function(){a.currentPage=1;for(var e=[],n=r.length-1;n>=0;--n){var s=r[n];a.messageRef=v.a.createRef(),e.push(v.a.createElement(ye,{messageRef:a.messageRef,key:Math.random(),message:s.message,timestamp:Oe()().format("hh:mm a"),right:s.from===a.props.authentication.email,left:s.from!==a.props.authentication.email}))}a.setMessagesState(e,t)}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),a.setState({loaderActive:!0},function(){if(n.t0&&n.t0.response&&403===n.t0.response.status)a.props.history.push("/login");else if(n.t0)throw n.t0});case 12:case"end":return n.stop()}},n,null,[[0,9]])})))}},{key:"sendMessage",value:function(){var e=Object(B.a)(q.a.mark(function e(t){var a,n;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.currentTarget.value,t.currentTarget.value="",a){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,ie.sendMessage({to:this.state.recipient.email,message:a},this.props.authentication.token);case 7:e.sent.status>=200&&(this.messageRef=v.a.createRef(),(n=Object(ue.a)(this.state.messages)).push(v.a.createElement(ye,{messageRef:this.messageRef,key:Math.random(),message:a,timestamp:Oe()().format("hh:mm a"),right:!0})),this.setMessagesState(n)),e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(4),!e.t0||!e.t0.response||403!==e.t0.response.status){e.next=17;break}this.props.history.push("/login"),e.next=19;break;case 17:if(!e.t0){e.next=19;break}throw e.t0;case 19:case"end":return e.stop()}},e,this,[[4,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"onSendMessage",value:function(e){"Enter"===e.key&&this.sendMessage(e)}},{key:"onCloseUserCard",value:function(e){var t=Ee({},this.state.selectedUsers);delete t[e];var a=this.state.recipient;a&&"object"===typeof a&&a.email===e&&(a=null,this.currentPage=0),this.setState({selectedUsers:t,recipient:a})}},{key:"render",value:function(){var e=this,t=this.props.authentication,a=t.id,n=t.email,r=t.firstName,s=t.lastName;return v.a.createElement(de,{user:{id:a,email:n,firstName:r,lastName:s},recipient:this.state.recipient,selectedUsers:Object.keys(this.state.selectedUsers).map(function(t){var a=e.state.selectedUsers[t],n=e.unseenMessagesMap[a.email];return v.a.createElement(ve,{onClick:e.onUserClick.bind(e),key:a.id,user:a,selected:a.email===(e.state.recipient&&e.state.recipient.email),onCloseUserCard:e.onCloseUserCard.bind(e),unseenMessages:n})}),userDropdownOptions:Object.keys(this.state.userDropdownOptions).map(function(t){var a=e.state.userDropdownOptions[t],n=a.id,r=a.email,s=a.firstName,i=a.lastName;return{key:n,value:r,text:"".concat(s," ").concat(i)}}),userSearchLoading:this.state.userSearchLoading,messages:this.state.messages,onSendMessage:this.onSendMessage.bind(this),onLogout:this.onLogout.bind(this),onUserSearch:this.onUserSearch.bind(this),onUserDropdownOptionSelect:this.onUserDropdownOptionSelect.bind(this),onMessageScroll:this.onMessageScroll.bind(this),loaderActive:this.state.loaderActive})}}]),t}(d.Component))||b)||b,Ne=Object(G.g)(je),Se=F.decorateWithMobX(function(e){var t=e.authentication;return v.a.createElement(G.d,null,v.a.createElement(G.b,{path:"/login"},v.a.createElement(ce,null)),v.a.createElement(G.b,{path:"/register"},v.a.createElement(ce,{register:!0})),v.a.createElement(G.b,{path:"/home"},t.token?v.a.createElement(Ne,null):v.a.createElement(G.a,{to:"/login"})),v.a.createElement(G.b,{path:"/"},t.nonObservableToken?v.a.createElement(G.a,{to:"/home"}):v.a.createElement(G.a,{to:"login"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(415);k.a.render(v.a.createElement(function(){return v.a.createElement(D.a,null,v.a.createElement(O.a,{message:new U,authentication:new A,translation:new C},v.a.createElement(X,null),v.a.createElement(Se,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[230,1,2]]]);
//# sourceMappingURL=main.9b8eb993.chunk.js.map