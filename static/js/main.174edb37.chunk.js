(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(8),s=n.n(c),a=n(7),r=n.n(a),o=n(9),i=n(2),u=n(3),l=n(5),h=n(4),j=n(1),b=n.n(j),d=(n(15),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={date:(new Date).toLocaleTimeString()},t.timerId=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){return this.timerId}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t="Loading...";if(this.props.user){var e=this.props.user.name,n=e.title,c=e.first,s=e.last;t="".concat(n,". ").concat(c," ").concat(s)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:this.state.date}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:t})]})}}]),n}(b.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={isClockVisible:!0,user:void 0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.changingUser=function(){var e="(there was no name for this user yet...)",n="(new user name is loading....)";if(t.state.user){var c=t.state.user.name,s=c.title,a=c.first,r=c.last;e="".concat(s,". ").concat(a," ").concat(r)}t.getUser(),setTimeout((function(){if(t.state.user){var c=t.state.user.name,s=c.title,a=c.first,r=c.last;n="".concat(s,". ").concat(a," ").concat(r)}console.log("then user name was changed from ".concat(e," to ").concat(n))}),800)},t.getUser=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://randomuser.me/api").then((function(t){return t.json()})).then((function(e){t.setState({user:e.results[0]})}));case 2:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var t=this.state,e=t.isClockVisible,n=t.user;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsxs)("p",{children:["Current time:"," ",e&&Object(d.jsx)(f,{user:n})]}),Object(d.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(d.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"}),Object(d.jsx)("button",{type:"button",onClick:this.changingUser,children:"Change user"}),this.state.user&&Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"".concat(this.state.user.picture.large),alt:"".concat(this.state.user.name.first)})})]})}}]),n}(b.a.Component),m=p;s.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.174edb37.chunk.js.map