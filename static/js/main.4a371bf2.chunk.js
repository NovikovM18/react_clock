(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),l=c(3),s=c(5),i=c(4),r=c(1),u=c.n(r),m=c(0),h=function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={currentTime:"load...",timerId:setTimeout((function(){}),0)},t}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=setInterval((function(){var e=new Date;t.setState({currentTime:e.toLocaleTimeString()}),console.log(e.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"Clock name: ".concat(this.props.name)}),Object(m.jsx)("p",{children:this.state.currentTime})]})}}]),c}(u.a.Component),k=h,b=(c(13),function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={clockVisible:!0,clockName:"..."},t.showClock=function(){t.setState({clockVisible:!0})},t.hideClock=function(){t.setState({clockVisible:!1})},t.changeName=function(){var e=Math.floor(999*Math.random()).toString();t.setState({clockName:e})},t}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App clock",children:[Object(m.jsx)("h1",{className:"clock__title",children:"React clock"}),Object(m.jsx)("h2",{className:"clock__block",children:this.state.clockVisible&&Object(m.jsx)(k,{name:this.state.clockName})}),Object(m.jsxs)("div",{className:"clock__controls",children:[Object(m.jsx)("button",{className:"clock__controls__button",type:"button",onClick:this.showClock,children:"Show Clock"}),Object(m.jsx)("button",{className:"clock__controls__button",type:"button",onClick:this.hideClock,children:"Hide Clock"})]}),Object(m.jsx)("div",{className:"clock__input",id:"setNameFromForm",children:Object(m.jsx)("button",{className:"clock__input__button",type:"button",onClick:this.changeName,children:"Set new Clocks name"})})]})}}]),c}(u.a.Component)),j=b;o.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4a371bf2.chunk.js.map