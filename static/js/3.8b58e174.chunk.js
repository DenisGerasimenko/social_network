(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{293:function(t,e,s){t.exports={item:"Post_item__1Z591"}},294:function(t,e,s){t.exports={dedescriptionBlock:"Profile_dedescriptionBlock__18twv",mainPhoto:"Profile_mainPhoto__3FfWe"}},295:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2OPYS",posts:"MyPosts_posts__3IZfQ"}},296:function(t,e,s){"use strict";s.r(e);var o=s(5),i=s(1),n=s(37),c=s(38),a=s(40),r=s(39),u=s(0),p=s.n(u),j=s(294),d=s.n(j),l=s(43),b=s(131),f=function(t){var e=Object(u.useState)(!1),s=Object(b.a)(e,2),o=s[0],n=s[1],c=Object(u.useState)(t.status),a=Object(b.a)(c,2),r=a[0],p=a[1];Object(u.useEffect)((function(){p(t.status)}),[t.status]);return Object(i.jsxs)("div",{children:[!o&&Object(i.jsx)("div",{children:Object(i.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"-------"})}),o&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(r)},value:r})})]})},h=s(108),O=function(t){var e;return t.profile?Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(i.jsx)("img",{src:(null===(e=t.profile.photos)||void 0===e?void 0:e.small)||h.a,className:d.a.mainPhoto}),Object(i.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})}):Object(i.jsx)(l.a,{})},m=s(97),x=s(42),v=s(295),P=s.n(v),g=s(293),k=s.n(g),S=function(t){return Object(i.jsxs)("div",{className:k.a.item,children:[Object(i.jsx)("img",{src:"https://i.dailymail.co.uk/1s/2020/05/12/05/28284602-0-image-a-47_1589256454760.jpg"}),t.message,Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["like ",t.likesCount]})})]})},_=s(89),y=s(130),B=s(86),w=s(34),C=p.a.memo((function(t){var e=Object(x.a)(t.posts).reverse().map((function(t){return Object(i.jsx)(S,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(i.jsxs)("div",{className:P.a.postsBlock,children:[Object(i.jsx)("h3",{children:"My posts"}),Object(i.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(i.jsx)("div",{className:P.a.posts,children:e})]})})),N=Object(B.a)(10),I=Object(y.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(i.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(i.jsx)("div",{children:Object(i.jsx)(_.a,{name:"newPostText",component:w.b,placeholder:"Post message",validate:[B.b,N]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Add post"})})]})})),A=C,M=s(15),U=Object(M.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(m.a)(e))}}}))(A),F=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(i.jsx)(U,{})]})},T=s(11),z=s(9),D=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(i.jsx)(F,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(p.a.Component);e.default=Object(z.d)(Object(M.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:m.d,getStatus:m.c,updateStatus:m.e}),T.f)(D)}}]);
//# sourceMappingURL=3.8b58e174.chunk.js.map