(this["webpackJsonpevent-client"]=this["webpackJsonpevent-client"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(32),i=n.n(r),c=(n(62),n(59)),o=n(9),l=n(10),d=n(13),h=n(12),u=n(14),j=n(119),m=n(2),b=n(3),p=n(0),v=["user","component","render"],g=function(e){var t=e.user,n=e.component,a=e.render,s=Object(b.a)(e,v);return t&&a?Object(p.jsx)(u.b,Object(m.a)(Object(m.a)({},s),{},{render:a})):Object(p.jsx)(u.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(n,Object(m.a)({},e)):Object(p.jsx)(u.a,{to:"/"})}}))},O=n(66),x=(n(92),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(O.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(O.a.Heading,{children:n}),Object(p.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),f=n(79),w=n(49),C=n(11),y=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/my-events",className:"nav-link",children:"My Events"}),Object(p.jsx)(C.c,{to:"/create-event",className:"nav-link",children:"Create Event"}),Object(p.jsx)(C.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(C.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),S=Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(C.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(C.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),N=Object(p.jsx)(a.Fragment,{children:Object(p.jsx)(C.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),k=function(e){var t=e.user;return Object(p.jsxs)(w.a,{className:"navbar-style",style:{backgroundColor:"#64b6ac"},variant:"dark",expand:"md",children:[Object(p.jsx)(w.a.Brand,{children:Object(p.jsx)(C.b,{to:"/",children:Object(p.jsx)("span",{className:"gather-style",children:"Gather"})})}),Object(p.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(f.a,{className:"ml-auto",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),N,t?y:S]})})]})},A=n(7),E="https://cryptic-brushlands-17541.herokuapp.com",P="http://localhost:4741",I="localhost"===window.location.hostname?P:E,D=n(28),T=n.n(D),L=function(e){return T()({url:I+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},M=n(5),G=n(22),Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,i=n.setUser;(t=a.state,T()({method:"POST",url:I+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",password:"",passwordConfirmation:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.passwordConfirmation;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"page-title",children:"Sign Up"}),Object(p.jsxs)(M.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(M.a.Group,{controlId:"email",children:[Object(p.jsx)(M.a.Label,{children:"Email address"}),Object(p.jsx)(M.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"password",children:[Object(p.jsx)(M.a.Label,{children:"Password"}),Object(p.jsx)(M.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(M.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(M.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),U=Object(u.f)(Y),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;L(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={email:"",password:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"page-title",children:"Sign In"}),Object(p.jsxs)(M.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(M.a.Group,{controlId:"email",children:[Object(p.jsx)(M.a.Label,{children:"Email address"}),Object(p.jsx)(M.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"password",children:[Object(p.jsx)(M.a.Label,{children:"Password"}),Object(p.jsx)(M.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),F=Object(u.f)(q),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return T()({url:I+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),_=Object(u.f)(B),H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return T()({url:I+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"page-title",children:"Change Password"}),Object(p.jsxs)(M.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(M.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(M.a.Label,{children:"Old password"}),Object(p.jsx)(M.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(M.a.Label,{children:"New Password"}),Object(p.jsx)(M.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),z=Object(u.f)(H),R=function(e,t){return T()({method:"GET",url:I+"/events/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})},W=n(17),J=n(78),V=n(44),K=n(45),Q=n.n(K),X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={events:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=(t.user,t.msgAlert);T()({method:"GET",url:I+"/events"}).then((function(t){return e.setState({events:t.data.events})})).then((function(){n({heading:"Index Success",message:"Yippie indexed!",variant:"success"})})).catch((function(e){n({heading:"Index Failed",message:"Index Error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this.state.events,n=this.props,a=n.userOnly,s=n.user;return null===t?"Loading...":(0===t.length&&(e="No events, create some so we can gather"),null===s?e=t.map((function(e){return Object(p.jsx)(V.a,{children:Object(p.jsxs)(W.a,{border:"secondary",children:[Object(p.jsx)(W.a.Header,{children:Object(p.jsx)(C.b,{className:"event-link",to:"/sign-in",children:e.title})}),Object(p.jsxs)(W.a.Body,{children:[Object(p.jsx)(W.a.Title,{children:e.location}),Object(p.jsxs)(W.a.Subtitle,{children:[Q()(e.date).format("MMMM Do YYYY")," at ",e.time]}),Object(p.jsxs)(W.a.Text,{children:[e.rsvps.length," people attending"]})]})]})},e._id)})):a?0===(e=t.filter((function(e){return e.owner===s._id})).map((function(e){return Object(p.jsx)(V.a,{children:Object(p.jsxs)(W.a,{border:"secondary",children:[Object(p.jsx)(W.a.Header,{children:Object(p.jsx)(C.b,{className:"event-link",to:"/events/".concat(e._id),children:e.title})}),Object(p.jsxs)(W.a.Body,{children:[Object(p.jsx)(W.a.Title,{children:e.location}),Object(p.jsxs)(W.a.Subtitle,{children:[Q()(e.date).format("MMMM Do YYYY")," at ",e.time]}),Object(p.jsxs)(W.a.Text,{children:[e.rsvps.length," people attending"]})]})]})},e._id)}))).length&&(e="You have not created any events, create some so we can gather"):e=t.map((function(e){return Object(p.jsx)(V.a,{children:Object(p.jsxs)(W.a,{border:"secondary",children:[Object(p.jsx)(W.a.Header,{children:Object(p.jsx)(C.b,{className:"event-link",to:"/events/".concat(e._id),children:e.title})}),Object(p.jsxs)(W.a.Body,{children:[Object(p.jsx)(W.a.Title,{children:e.location}),Object(p.jsxs)(W.a.Subtitle,{children:[Q()(e.date).format("MMMM Do YYYY")," at ",e.time]}),Object(p.jsxs)(W.a.Text,{children:[e.rsvps.length," people attending"]})]})]})},e._id)})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"hero",children:Object(p.jsx)("img",{className:"hero-img",src:"/event-client/hero1.jpg"})}),Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)("h3",{className:"page-title",children:a?"My Gatherings":"Current Gatherings"}),Object(p.jsx)(J.a,{xs:1,md:3,className:"g-4",children:e})]})]}))}}]),n}(a.Component),Z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history;(function(e,t){return T()({method:"POST",url:I+"/events",data:{event:e},headers:{Authorization:"Bearer ".concat(t.token)}})})(a.state,n).then((function(e){return r.push("/events/"+e.data.event._id)})).then((function(){return s({heading:"Event Created!",message:"Party Time!",variant:"success"})})).catch((function(e){s({heading:"Event creation failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={title:"",location:"",date:"",time:"",description:"",owner:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"form-box",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"page-title",children:"Create Event"}),Object(p.jsxs)(M.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(M.a.Group,{controlId:"title",children:[Object(p.jsx)(M.a.Label,{children:"Event Title"}),Object(p.jsx)(M.a.Control,{required:!0,name:"title",value:this.state.title,placeholder:"Event title",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"location",children:[Object(p.jsx)(M.a.Label,{children:"Location"}),Object(p.jsx)(M.a.Control,{required:!0,name:"location",value:this.state.location,placeholder:"Event Location",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"date",children:[Object(p.jsx)(M.a.Label,{children:"Date"}),Object(p.jsx)(M.a.Control,{required:!0,name:"date",type:"date",value:this.state.date,placeholder:"Event Date",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"time",children:[Object(p.jsx)(M.a.Label,{children:"Time"}),Object(p.jsx)(M.a.Control,{required:!0,name:"time",value:this.state.time,placeholder:"Event Time",onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"description",children:[Object(p.jsx)(M.a.Label,{children:"Description"}),Object(p.jsx)(M.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:"Event Description",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{type:"submit",children:"Submit"})]})]})})})})}}]),n}(a.Component),$=Object(u.f)(Z),ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleDelete=function(){var e=a.props,t=e.match,n=e.user,s=e.msgAlert,r=e.history;(function(e,t){return T()({method:"DELETE",url:I+"/events/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,n).then((function(){return r.push("/")})).then((function(){s({heading:"Event deleted",message:"Yippe! Event deleted!",variant:"success"})})).catch((function(e){s({heading:"Event deletion failed",message:"Event Delete Error: "+e.message,variant:"danger"})}))},a.handleRsvp=function(){var e=a.props,t=e.match,n=e.user,s=e.msgAlert,r=!1,i=a.state.event.rsvps.filter((function(e){return e.user===n._id})).pop();i&&(r=i.rsvpStatus),r?s({heading:"Oops!",message:"Looks like you are already rsvpd",variant:"warning"}):function(e,t,n,a){return T()({method:"PATCH",url:I+"/rsvp/"+e,data:{rsvps:{user:t,rsvpStatus:a}},headers:{Authorization:"Bearer ".concat(n.token)}})}(t.params.id,n._id,n,!0).then((function(){return a.componentDidMount()})).then((function(){s({heading:"Event rsvp success",message:"Yippie! Success!",variant:"success"})})).catch((function(e){s({heading:"Event rsvp failed",message:"Event rsvp Error: "+e.message,variant:"danger"})}))},a.state={event:null},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,s=t.msgAlert;R(n.params.id,a).then((function(t){return e.setState({event:t.data.event})})).then((function(){s({heading:"Show event success",message:"Yippie! Success!",variant:"success"})})).catch((function(e){s({heading:"Show event failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.event)return"loading...";var e=this.state.event,t=e.title,n=e.location,a=e.date,s=e.time,r=e.description,i=e.owner,c=e.rsvps,o=this.props,l=o.user,d=o.history,h=o.match,u=c.map((function(e){return Object(p.jsx)("li",{children:e.user},e._id)}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{className:"event-title",children:t}),Object(p.jsxs)("div",{className:"event-details",children:[Object(p.jsx)("h6",{className:"event-details-title",children:"Where:"}),Object(p.jsxs)("p",{className:"event-details-info",children:[" ",n]}),Object(p.jsx)("h6",{className:"event-details-title",children:"When:"}),Object(p.jsxs)("p",{className:"event-details-info",children:[Q()(a).format("MMMM Do YYYY")," at ",s]}),Object(p.jsx)("h6",{className:"event-details-title",children:"Desciption:"}),Object(p.jsx)("p",{className:"event-details-info",children:r}),Object(p.jsx)("h6",{className:"event-details-title",children:"RSVP:"}),u,l._id===i&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G.a,{onClick:this.handleDelete,children:"Delete"}),Object(p.jsx)(G.a,{onClick:function(){return d.push("/events/".concat(h.params.id,"/update-event"))},children:"Update"})]}),Object(p.jsx)(G.a,{onClick:this.handleRsvp,children:"RSVP"})]})]})}}]),n}(a.Component),te=Object(u.f)(ee),ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(A.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.user,s=t.msgAlert,r=t.history,i=t.match;(function(e,t,n){return T()({method:"PATCH",url:I+"/events/"+t,data:{event:{title:e.title,location:e.location,date:e.date,time:e.time,description:e.description}},headers:{Authorization:"Bearer ".concat(n.token)}})})(a.state,i.params.id,n).then((function(e){return r.push("/events/"+i.params.id)})).then((function(){return s({heading:"Event Updated!",message:"Nice work, go check out your event.",variant:"success"})})).catch((function(e){s({heading:"Event update failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))},a.state={title:"",location:"",date:"",time:"",description:"",owner:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,a=t.user,s=t.msgAlert;R(n.params.id,a).then((function(t){return e.setState({event:t.data.event})})).then((function(){return s({heading:"Show event success",message:"Check out the event",variant:"success"})})).catch((function(e){return s({heading:"Show event failed :(",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t,n,a,s;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"form-box",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{className:"page-title",children:"Update Event"}),Object(p.jsxs)(M.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(M.a.Group,{controlId:"title",children:[Object(p.jsx)(M.a.Label,{children:"Event Title"}),Object(p.jsx)(M.a.Control,{required:!0,name:"title",value:this.state.title,placeholder:null===(e=this.state.event)||void 0===e?void 0:e.title,onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"location",children:[Object(p.jsx)(M.a.Label,{children:"Location"}),Object(p.jsx)(M.a.Control,{required:!0,name:"location",value:this.state.location,placeholder:null===(t=this.state.event)||void 0===t?void 0:t.location,onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"date",children:[Object(p.jsx)(M.a.Label,{children:"Date"}),Object(p.jsx)(M.a.Control,{required:!0,name:"date",type:"date",value:this.state.date,placeholder:null===(n=this.state.event)||void 0===n?void 0:n.date,onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"time",children:[Object(p.jsx)(M.a.Label,{children:"Time"}),Object(p.jsx)(M.a.Control,{required:!0,name:"time",value:this.state.time,placeholder:null===(a=this.state.event)||void 0===a?void 0:a.time,onChange:this.handleChange})]}),Object(p.jsxs)(M.a.Group,{controlId:"description",children:[Object(p.jsx)(M.a.Label,{children:"Description"}),Object(p.jsx)(M.a.Control,{required:!0,name:"description",value:this.state.description,placeholder:null===(s=this.state.event)||void 0===s?void 0:s.description,onChange:this.handleChange})]}),Object(p.jsx)(G.a,{type:"submit",children:"Submit"})]})]})})})})}}]),n}(a.Component),ae=Object(u.f)(ne),se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(j.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(k,{user:s}),n.map((function(t){return Object(p.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(u.b,{path:"/sign-up",render:function(){return Object(p.jsx)(U,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{path:"/sign-in",render:function(){return Object(p.jsx)(F,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(u.b,{exact:!0,user:s,path:"/",render:function(){return Object(p.jsx)(X,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{exact:!0,user:s,path:"/events/:id",render:function(){return Object(p.jsx)(te,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(_,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(g,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(z,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/create-event",render:function(){return Object(p.jsx)($,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/events/:id/update-event",render:function(){return Object(p.jsx)(ae,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(g,{user:s,path:"/my-events",render:function(){return Object(p.jsx)(X,{msgAlert:e.msgAlert,user:s,userOnly:!0})}})]})]})}}]),n}(a.Component),re=Object(p.jsx)(C.a,{basename:"/event-client",children:Object(p.jsx)(se,{})});i.a.render(re,document.getElementById("root"))},62:function(e,t,n){},92:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.8f77e2f5.chunk.js.map