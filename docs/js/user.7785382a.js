(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{1511:function(t,e,s){"use strict";s.r(e);var a=s("7a23"),n={class:"user"},c={class:"container"},r={class:"post-list"},u={class:"info"},i={class:"len-posts button"};function o(t,e,s,o,h,d){var b=Object(a["x"])("PostPreview"),f=Object(a["x"])("CreateButton");return Object(a["p"])(),Object(a["d"])("div",n,[Object(a["g"])("div",c,[Object(a["g"])("div",r,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(h.posts,(function(t){return Object(a["p"])(),Object(a["d"])(b,{hideUser:"true",key:t.id,post:t},{default:Object(a["E"])((function(){return[Object(a["f"])(Object(a["z"])(t.title),1)]})),_:2},1032,["post"])})),128))])]),Object(a["g"])("div",u,[Object(a["g"])("img",{src:"https://www.gravatar.com/avatar/"+this.hashedEmail+"?s=200"},null,8,["src"]),Object(a["g"])("h1",null,Object(a["z"])(h.username),1),Object(a["g"])("div",i,Object(a["z"])(h.posts.length)+" Posts",1)]),Object(a["g"])(f)])}var h=s("1c16"),d=s("3ffe"),b=s("46fe"),f=s("bf80"),j={name:"user",components:{CreateButton:d["a"],PostPreview:h["a"]},data:function(){return{username:this.$route.params.username,posts:[],hashedEmail:""}},mounted:function(){this.fetchData()},watch:{$route:function(){this.username=this.$route.params.username,this.fetchData()}},methods:{fetchData:function(){var t=this;f["a"].username(this.username).then((function(e){t.hashedEmail=e.data.hashedEmail})),b["a"].user(this.username).then((function(e){t.posts=e.data})).catch((function(e){t.error=e.response.data.error}))}}};s("33d9");j.render=o;e["default"]=j},"33d9":function(t,e,s){"use strict";s("567c")},"567c":function(t,e,s){}}]);
//# sourceMappingURL=user.7785382a.js.map