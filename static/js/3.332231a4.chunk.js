(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(t,e,s){t.exports={item:"Post_item__1Z591"}},293:function(t,e,s){},294:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2OPYS",posts:"MyPosts_posts__3IZfQ"}},295:function(t,e,s){"use strict";s.r(e);var n=s(5),i=s(1),c=s(37),o=s(38),a=s(40),u=s(39),r=s(0),j=s.n(r),p=s(293),d=s.n(p),l=s(43),b=s(130),O=function(t){var e=Object(r.useState)(!1),s=Object(b.a)(e,2),n=s[0],c=s[1],o=Object(r.useState)(t.status),a=Object(b.a)(o,2),u=a[0],j=a[1];Object(r.useEffect)((function(){j(t.status)}),[t.status]);return Object(i.jsxs)("div",{children:[!n&&Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"-------"})}),n&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(u)},value:u})})]})},f=function(t){var e;return t.profile?Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(i.jsx)("img",{src:null===(e=t.profile.photos)||void 0===e?void 0:e.small}),Object(i.jsx)(O,{status:t.status,updateStatus:t.updateStatus})]})}):Object(i.jsx)(l.a,{})},h=s(97),m=s(42),x=s(294),v=s.n(x),g=s(292),P=s.n(g),S=function(t){return Object(i.jsxs)("div",{className:P.a.item,children:[Object(i.jsx)("img",{src:"https://i.dailymail.co.uk/1s/2020/05/12/05/28284602-0-image-a-47_1589256454760.jpg"}),t.message,Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["like ",t.likesCount]})})]})},k=s(89),y=s(129),_=s(86),C=s(34),w=j.a.memo((function(t){var e=Object(m.a)(t.posts).reverse().map((function(t){return Object(i.jsx)(S,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(i.jsxs)("div",{className:v.a.postsBlock,children:[Object(i.jsx)("h3",{children:"My posts"}),Object(i.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(i.jsx)("div",{className:v.a.posts,children:e})]})})),B=Object(_.a)(10),I=Object(y.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(i.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(i.jsx)("div",{children:Object(i.jsx)(k.a,{name:"newPostText",component:C.b,placeholder:"Post message",validate:[_.b,B]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Add post"})})]})})),N=w,A=s(15),M=Object(A.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(h.a)(e))}}}))(N),U=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(i.jsx)(M,{})]})},T=s(11),z=s(9),D=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(i.jsx)(U,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(j.a.Component);e.default=Object(z.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:h.d,getStatus:h.c,updateStatus:h.e}),T.f)(D)}}]);
//# sourceMappingURL=3.332231a4.chunk.js.map