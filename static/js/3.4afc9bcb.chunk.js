(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{371:function(e,t,s){e.exports={item:"Post_item__1Z591"}},372:function(e,t,s){e.exports={profile:"Profile_profile__IcKa2",descriptionBlock:"Profile_descriptionBlock__ttvQM",mainPhoto:"Profile_mainPhoto__3FfWe",contact:"Profile_contact__NI75p"}},373:function(e,t,s){e.exports={postsBlock:"MyPosts_postsBlock__2OPYS",posts:"MyPosts_posts__3IZfQ"}},374:function(e,t,s){"use strict";s.r(t);var i=s(6),o=s(1),c=s(147),r=s(148),n=s(182),a=s(180),l=s(0),j=s.n(l),u=s(144),d=s(372),b=s.n(d),p=s(104),f=function(e){var t=Object(l.useState)(!1),s=Object(u.a)(t,2),i=s[0],c=s[1],r=Object(l.useState)(e.status),n=Object(u.a)(r,2),a=n[0],j=n[1];Object(l.useEffect)((function(){j(e.status)}),[e.status]);return Object(o.jsxs)("div",{children:[!i&&Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Status: "})," ",Object(o.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"-------"})]}),i&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(a)},value:a})})]})},h=s.p+"static/media/IMG-cc6fce77d19c2c7cdaacc19191b9f671-V.3fb08792.jpg",O=s(53),v=s(179),x=s(83),m=s.n(x),P=Object(v.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.error,i=e.profile;return Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){},children:"save"})}),s&&Object(o.jsx)("div",{className:m.a.formSummaryError,children:s}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Full name"}),":",Object(O.c)("Full name","fullName",[],O.a)]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Looking for a job"}),": ",Object(O.c)("","lookingForAJob",[],O.a,{type:"checkbox"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"My professional skills"}),":",Object(O.c)("My professional skills","lookingForAJobDescription",[],O.b)]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"About me"}),":",Object(O.c)("About me","aboutMe",[],O.b)]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Contacts"}),":",Object.keys(i.contacts).map((function(e){return Object(o.jsx)("div",{className:b.a.contact,children:Object(o.jsxs)("b",{children:[e,":",Object(O.c)(e,"contacts."+e,[],O.a)]})},e)}))]})]})})),k=function(e){var t,s,i,c,r;return Object(o.jsxs)("div",{children:[e.isOwner&&Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:e.goToEditMode,children:"edit"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Full name"}),":",null===(t=e.profile)||void 0===t?void 0:t.fullName]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Looking for a job"}),":",(null===(s=e.profile)||void 0===s?void 0:s.lookingForAJob)?"yes":"no"]}),(null===(i=e.profile)||void 0===i?void 0:i.lookingForAJob)&&Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"My professional skills"}),":",null===(c=e.profile)||void 0===c?void 0:c.lookingForAJobDescription]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"About me"}),":",null===(r=e.profile)||void 0===r?void 0:r.aboutMe]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("b",{children:"Contacts"}),":",e.profile.contacts&&Object.keys(e.profile.contacts).map((function(t){return Object(o.jsx)(g,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},g=function(e){return Object(o.jsxs)("div",{className:b.a.contact,children:[Object(o.jsx)("b",{children:e.contactTitle}),":",e.contactValue]})},S=function(e){var t,s=Object(l.useState)(!1),i=Object(u.a)(s,2),c=i[0],r=i[1];if(!e.profile)return Object(o.jsx)(p.a,{});return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(o.jsx)("img",{src:(null===(t=e.profile.photos)||void 0===t?void 0:t.small)||h,className:b.a.mainPhoto}),e.isOwner&&Object(o.jsx)("input",{type:"file",onChange:function(t){var s;(null===(s=t.currentTarget.files)||void 0===s?void 0:s.length)&&e.savePhoto(t.currentTarget.files[0])}}),c?Object(o.jsx)(P,{profile:e.profile,initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){r(!1)}))}}):Object(o.jsx)(k,{goToEditMode:function(){return r(!0)},profile:e.profile,isOwner:e.isOwner}),Object(o.jsx)(f,{status:e.status,updateStatus:e.updateStatus})]})})},_=s(68),y=s(373),I=s.n(y),M=s(371),A=s.n(M),C=function(e){return Object(o.jsxs)("div",{className:A.a.item,children:[Object(o.jsx)("img",{src:"https://i.dailymail.co.uk/1s/2020/05/12/05/28284602-0-image-a-47_1589256454760.jpg"}),e.message,Object(o.jsx)("div",{children:Object(o.jsxs)("span",{children:["like ",e.likesCount]})})]})},N=s(102),w=Object(v.a)({form:"profile-add-post"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(O.c)("Your post","newPostText",[N.b],O.a)}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Add post"})})]})})),F=function(e){var t=Object(_.a)(e.posts).reverse().map((function(e){return Object(o.jsx)(C,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(o.jsxs)("div",{className:I.a.postsBlock,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsx)(w,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(o.jsx)("div",{className:I.a.posts,children:t})]})},T=j.a.memo(F),B=s(14),J=s(145),U=Object(B.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:J.a.addPostActionCreator})(T),D=function(e){return Object(o.jsxs)("div",{className:b.a.profile,children:[Object(o.jsx)(S,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(o.jsx)(U,{})]})},E=s(17),V=s(15),z=function(e){Object(n.a)(s,e);var t=Object(a.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state(autorizedUserId)")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(o.jsx)(D,Object(i.a)(Object(i.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(j.a.Component);t.default=Object(V.d)(E.h,Object(B.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:J.d,getStatus:J.c,updateStatus:J.g,savePhoto:J.e,saveProfile:J.f}))(z)}}]);
//# sourceMappingURL=3.4afc9bcb.chunk.js.map