(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["redirect"],{1503:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"redirect"},o=Object(r["h"])("p",null,"Close the window",-1);function u(e,t,n,u,i,a){return Object(r["q"])(),Object(r["d"])("div",c,[o])}var i=n("3f4a"),a={completeLogin:function(e){return Object(i["a"])().post("/redirect",{content:e})},getCurrentTrack:function(){return Object(i["a"])().get("/current-track")}},d={name:"redirect",data:function(){return{}},mounted:function(){var e=this.$route.query.code;a.completeLogin(e)}};d.render=u;t["default"]=d}}]);
//# sourceMappingURL=redirect.5a59e466.js.map