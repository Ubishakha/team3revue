(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["post"],{"0d48":function(e,t,n){"use strict";n("b0c0"),n("a4d3"),n("e01a");var c=n("7a23"),r={class:"subvue-info"},u=Object(c["g"])("p",null,[Object(c["g"])("strong",null,"Moderators")],-1);function s(e,t,n,s,o,a){var b=Object(c["x"])("router-link");return Object(c["p"])(),Object(c["d"])("div",r,[Object(c["g"])(b,{class:"heading",to:{name:"Subvue",params:{name:n.subvue.permalink}}},{default:Object(c["E"])((function(){return[Object(c["g"])("h2",null,Object(c["z"])(n.subvue.name),1)]})),_:1},8,["to"]),Object(c["g"])("p",null,Object(c["z"])(n.subvue.description),1),o.subscribed?Object(c["e"])("",!0):(Object(c["p"])(),Object(c["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return a.subscribe&&a.subscribe.apply(a,arguments)}),class:"subscribe-button"},"Subscribe")),o.subscribed?(Object(c["p"])(),Object(c["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return a.unsubscribe&&a.unsubscribe.apply(a,arguments)}),class:"subscribe-button"},"Unsubscibe")):Object(c["e"])("",!0),u,Object(c["g"])("ul",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.subvue.moderators,(function(e){return Object(c["p"])(),Object(c["d"])("li",{key:e.username},[Object(c["g"])(b,{to:{name:"User",params:{username:e.username}}},{default:Object(c["E"])((function(){return[Object(c["f"])(Object(c["z"])(e.username),1)]})),_:2},1032,["to"])])})),128))])])}n("4de4");var o=n("aaff"),a=n("bf80"),b={name:"subvue-info",props:["subvue"],data:function(){return{subscribed:!1}},methods:{subscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;o["a"].subscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},unsubscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;o["a"].unsubscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},checkSubscribed:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return!1;a["a"].username(this.$store.state.user.username).then((function(t){var n=t.data.subscribed.filter((function(t){return t.permalink==e.subvue.permalink}));e.subscribed=n.length>0}))}},mounted:function(){this.checkSubscribed()},watch:{subvue:function(){this.checkSubscribed()}}};n("6469");b.render=s;t["a"]=b},"37d3":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["H"])("data-v-5a07073d");Object(c["s"])("data-v-5a07073d");var u={class:"post"},s={class:"main-container"},o={class:"body container"},a={class:"content"},b=Object(c["g"])("title",null,"Delete Post",-1),i=Object(c["g"])("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},null,-1),d=Object(c["g"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),l=Object(c["g"])("title",null,"Cancel",-1),j=Object(c["g"])("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},null,-1),O=Object(c["g"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),m={class:"error"},f=Object(c["f"])("by "),v={class:"post-id"},p={class:"container"},h={class:"error"},g=Object(c["g"])("input",{class:"button",type:"submit",value:"Create comment"},null,-1),C={key:1};Object(c["q"])();var w=r((function(e,t,n,w,k,y){var z=Object(c["x"])("Vote"),S=Object(c["x"])("router-link"),x=Object(c["x"])("Comment"),H=Object(c["x"])("SubvueInfo"),I=Object(c["x"])("CreateButton");return Object(c["p"])(),Object(c["d"])("div",u,[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])(z,{upvotes:k.upvotes,downvotes:k.downvotes,postId:k.id,onError:t[1]||(t[1]=function(e){k.error=e})},null,8,["upvotes","downvotes","postId"]),Object(c["g"])("div",a,[(Object(c["p"])(),Object(c["d"])("svg",{id:"delete-button",onClick:t[2]||(t[2]=function(){return y.deletePost&&y.deletePost.apply(y,arguments)}),fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[b,i,d])),Object(c["F"])((Object(c["p"])(),Object(c["d"])("svg",{id:"verify-delete-button",onClick:t[3]||(t[3]=function(e){return k.deleteVerify=!1}),fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[l,j,O],512)),[[c["C"],k.deleteVerify]]),Object(c["g"])("p",m,Object(c["z"])(k.error),1),Object(c["g"])("h1",null,Object(c["z"])(k.title),1),Object(c["g"])("h3",null,[f,Object(c["g"])(S,{to:{name:"User",params:{username:k.user.username}}},{default:r((function(){return[Object(c["f"])(Object(c["z"])(k.user.username),1)]})),_:1},8,["to"]),Object(c["f"])(" on "+Object(c["z"])(k.created),1)]),Object(c["g"])("p",{innerHTML:k.content},null,8,["innerHTML"]),Object(c["g"])("i",v,"ID "+Object(c["z"])(k.id),1)])]),Object(c["g"])("div",p,[Object(c["F"])(Object(c["g"])("h2",null,"Comments",512),[[c["C"],k.comments==[]]]),Object(c["g"])("form",{id:"comment-form",onSubmit:t[5]||(t[5]=Object(c["G"])((function(){return y.createComment&&y.createComment.apply(y,arguments)}),["prevent"]))},[Object(c["g"])("p",h,Object(c["z"])(k.errorCreateComment),1),Object(c["F"])(Object(c["g"])("textarea",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return k.newCommentContent=e}),name:"name",placeholder:"Content",rows:"5",cols:"80"},null,512),[[c["B"],k.newCommentContent]]),g],32),(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(k.comments,(function(e){return Object(c["p"])(),Object(c["d"])(x,{key:e.id,user:e.user,created:e.created,content:e.content},null,8,["user","created","content"])})),128))])]),k.subvue?(Object(c["p"])(),Object(c["d"])(H,{key:0,class:"subvue-info",subvue:k.subvue},null,8,["subvue"])):(Object(c["p"])(),Object(c["d"])("div",C)),Object(c["g"])(I)])})),k=Object(c["H"])("data-v-ad05aa1c");Object(c["s"])("data-v-ad05aa1c");var y={class:"comment"},z=Object(c["f"])("by "),S={href:""};Object(c["q"])();var x=k((function(e,t,n,r,u,s){return Object(c["p"])(),Object(c["d"])("div",y,[Object(c["g"])("h4",null,[z,Object(c["g"])("a",S,Object(c["z"])(n.user.username),1),Object(c["f"])(" on "+Object(c["z"])(n.created),1)]),Object(c["g"])("p",{innerHTML:n.content},null,8,["innerHTML"])])})),H={name:"comment",props:["user","created","content"],data:function(){return{}}};n("bd4e");H.render=x,H.__scopeId="data-v-ad05aa1c";var I=H,L=n("0d48"),M=n("3ffe"),V=n("e70a"),$=n("46fe"),U={name:"post",components:{Comment:I,Vote:V["a"],SubvueInfo:L["a"],CreateButton:M["a"]},data:function(){return{error:null,id:this.$route.params.id,title:"",user:"",subvue:null,created:"",content:"",comments:[],upvotes:[],downvotes:[],deleteVerify:!1,newCommentContent:"",errorCreateComment:null}},methods:{deletePost:function(){var e=this;this.deleteVerify?$["a"].delete(this.id).then((function(){e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})):this.deleteVerify=!0},createComment:function(){var e=this;$["a"].addComment(this.id,this.newCommentContent).then((function(t){e.comments=t.data,e.newCommentContent="",e.errorCreateComment=null})).catch((function(t){e.errorCreateComment=t.response.data.error}))}},mounted:function(){var e=this;$["a"].item(this.id).then((function(t){e.title=t.data.title,e.user=t.data.user,e.created=t.data.created,e.content=t.data.content,e.comments=t.data.comments,e.upvotes=t.data.upvotes,e.downvotes=t.data.downvotes,e.subvue=t.data.subvue})).catch((function(t){e.error=t.response.data.error}))}};n("f65e");U.render=w,U.__scopeId="data-v-5a07073d";t["default"]=U},"4de4":function(e,t,n){"use strict";var c=n("23e7"),r=n("b727").filter,u=n("1dde"),s=n("ae40"),o=u("filter"),a=s("filter");c({target:"Array",proto:!0,forced:!o||!a},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"5bcb":function(e,t,n){},6469:function(e,t,n){"use strict";n("92e5")},"92e5":function(e,t,n){},aaff:function(e,t,n){"use strict";var c=n("3f4a");t["a"]={item:function(e){return Object(c["a"])().get("subvues/"+e)},create:function(e){return Object(c["a"])().post("subvues",e)},posts:function(e){return Object(c["a"])().get("subvues/"+e+"/posts")},subscribe:function(e){return Object(c["a"])().post("subvues/"+e+"/subscribe")},unsubscribe:function(e){return Object(c["a"])().post("subvues/"+e+"/unsubscribe")}}},bd4e:function(e,t,n){"use strict";n("ed1c")},ed1c:function(e,t,n){},f65e:function(e,t,n){"use strict";n("5bcb")}}]);
//# sourceMappingURL=post.25b45803.js.map