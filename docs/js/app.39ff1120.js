(function(e){function t(t){for(var r,c,u=t[0],o=t[1],i=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a={app:0},s=[];function u(e){return o.p+"js/"+({create:"create",createsubvue:"createsubvue",login:"login","post~subvue~user":"post~subvue~user",post:"post",subvue:"subvue",user:"user",redirect:"redirect",signup:"signup"}[e]||e)+"."+{create:"c21de75e",createsubvue:"fba4f051",login:"1df9df4c","post~subvue~user":"44f8c518",post:"8de4ddd5",subvue:"efa51dd0",user:"a63fb270",redirect:"5a59e466",signup:"3a38a521"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={create:1,createsubvue:1,login:1,"post~subvue~user":1,post:1,subvue:1,user:1,signup:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({create:"create",createsubvue:"createsubvue",login:"login","post~subvue~user":"post~subvue~user",post:"post",subvue:"subvue",user:"user",redirect:"redirect",signup:"signup"}[e]||e)+"."+{create:"7e4861d9",createsubvue:"4ab57012",login:"2de0e623","post~subvue~user":"bef68dfa",post:"07c8e7d3",subvue:"07f928d7",user:"7c7a5439",redirect:"31d6cfe0",signup:"279090d4"}[e]+".css",a=o.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete c[e],b.parentNode.removeChild(b),n(s)},b.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/team3revue/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d0e":function(e,t,n){},"22fd":function(e,t,n){},"2bf2":function(e,t,n){"use strict";n("91b4")},"3de9":function(e,t,n){"use strict";n("0d0e")},"3f4a":function(e,t,n){"use strict";var r=n("bc3a"),c=n.n(r),a=n("4360");t["a"]=function(){return c.a.create({baseURL:"http://174.138.111.113/api",headers:{Authorization:"JWT ".concat(a["a"].state.token)}})}},4360:function(e,t,n){"use strict";var r=n("5502"),c=n("0e44"),a=n("bf80");t["a"]=r["a"].createStore({plugins:[Object(c["a"])()],state:{token:null,user:null,isUserLoggedIn:!1,subscribedSubvues:[]},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t},setSubscribedSubvues:function(e,t){e.subscribedSubvues=t}},actions:{setToken:function(e,t){var n=e.commit;n("setToken",t)},setUser:function(e,t){var n=e.commit;n("setUser",t)},updateSubscribedSubvues:function(e,t){var n=e.commit,r=e.state;r.isUserLoggedIn&&(t?n("setSubscribedSubvues",t):a["a"].username(r.user.username).then((function(e){n("setSubscribedSubvues",e.data.subscribed)})).catch((function(){})))}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"app"};function a(e,t,n,a,s,u){var o=Object(r["y"])("NavBar"),i=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["d"])("div",c,[Object(r["h"])(o),Object(r["h"])("main",null,[Object(r["h"])(i)])])}var s=Object(r["I"])("data-v-1c62fcc3");Object(r["t"])("data-v-1c62fcc3");var u=Object(r["g"])("Spoti-Fi"),o=Object(r["g"])("Sign Up"),i=Object(r["g"])("Login");Object(r["r"])();var l=s((function(e,t,n,c,a,l){var d=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("nav",null,[Object(r["h"])(d,{class:"title",to:{name:"Home",params:{}}},{default:s((function(){return[u]})),_:1}),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(d,{key:0,style:{float:"right"},to:{name:"SignUp",params:{}}},{default:s((function(){return[o]})),_:1})),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(d,{key:1,style:{float:"right"},to:{name:"Login",params:{}}},{default:s((function(){return[i]})),_:1})),e.$store.state.isUserLoggedIn?(Object(r["q"])(),Object(r["d"])("a",{key:2,style:{float:"right"},onClick:t[1]||(t[1]=function(e){return l.logout()})},"Logout")):Object(r["e"])("",!0),e.$store.state.isUserLoggedIn?(Object(r["q"])(),Object(r["d"])(d,{key:3,style:{float:"right"},to:{name:"User",params:{username:e.$store.state.user.username}}},{default:s((function(){return[Object(r["g"])(Object(r["A"])(e.$store.state.user.username),1)]})),_:1},8,["to"])):Object(r["e"])("",!0)])})),d={name:"nav",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Home"})}}};n("bf7a");d.render=l,d.__scopeId="data-v-1c62fcc3";var b=d,f={name:"app",components:{NavBar:b},data:function(){return{}},created:function(){this.$store.dispatch("updateSubscribedSubvues")}};n("cb22");f.render=a;var p=f,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=Object(r["I"])("data-v-388bc04c");Object(r["t"])("data-v-388bc04c");var v={class:"outer-wrapper"},j=Object(r["h"])("h1",null,"Dashboard",-1),O={class:"wrapper"};Object(r["r"])();var g=m((function(e,t,n,c,a,s){var u=Object(r["y"])("FriendLists"),o=Object(r["y"])("CurrentTrack");return Object(r["q"])(),Object(r["d"])("div",v,[j,Object(r["h"])("div",null,[Object(r["h"])("button",null,[Object(r["h"])("a",{href:a.url,target:"_blank"}," Login To Spotify ",8,["href"])])]),Object(r["h"])("div",O,[Object(r["h"])(u,{class:"main-child",friendLists:e.friendLists},null,8,["friendLists"]),Object(r["h"])(o)])])})),y=n("1da1"),k=(n("96cf"),Object(r["I"])("data-v-89e59e6e"));Object(r["t"])("data-v-89e59e6e");var w={class:"Friendlist"},S={class:"current-track"},T={class:"container Friend-1"},L=Object(r["h"])("strong",null,"Bishakha",-1),I={class:"track"},U={class:"hovered currSong"},_=Object(r["h"])("strong",null,"Current Track: ",-1),x={class:"trackName"},C={class:"artistName"},E={class:"playBtnSingle"},N=Object(r["h"])("i",{class:"far fa-play-circle playBtn hovered"},null,-1);Object(r["r"])();var P=k((function(e,t,n,c,a,s){var u=Object(r["y"])("PreviousTracks");return Object(r["q"])(),Object(r["d"])("div",w,[Object(r["h"])("div",S,[Object(r["h"])("div",T,[Object(r["h"])("div",{onClick:t[1]||(t[1]=function(e){return a.showTracks=!a.showTracks}),class:"hovered name"},[L]),Object(r["h"])("div",I,[Object(r["h"])("div",null,[Object(r["h"])("span",U,[_,Object(r["h"])("a",{href:a.url},[Object(r["h"])("span",x,Object(r["A"])(a.trackName),1),Object(r["h"])("span",C,Object(r["A"])(a.artistName),1)],8,["href"])]),Object(r["h"])("span",E,[Object(r["h"])("a",{href:a.url},[N],8,["href"])])])])])]),a.showTracks?(Object(r["q"])(),Object(r["d"])(u,{key:0})):Object(r["e"])("",!0)])})),q=(n("b0c0"),Object(r["I"])("data-v-9d09eb28"));Object(r["t"])("data-v-9d09eb28");var B={class:"prev-tracks"},A={key:0,class:"playBtn"},$=Object(r["h"])("i",{class:"far fa-play-circle playBtn"},null,-1);Object(r["r"])();var F=q((function(e,t,n,c,a,s){return Object(r["q"])(),Object(r["d"])("div",B,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(a.users.items,(function(e,n){return Object(r["q"])(),Object(r["d"])("li",{key:n},[a.showWordIndex===n?(Object(r["q"])(),Object(r["d"])("span",A,[Object(r["h"])("a",{href:a.url},[$],8,["href"])])):Object(r["e"])("",!0),Object(r["h"])("span",{onMouseover:function(e){return a.showWordIndex=n},onMouseout:t[1]||(t[1]=function(e){return a.showWordIndex=null}),class:"tracks"},[Object(r["h"])("a",{href:e.track.external_urls.spotify},[Object(r["h"])("strong",null,Object(r["A"])(e.track.name),1),Object(r["g"])(" "+Object(r["A"])(e.track.artists[0].name),1)],8,["href"])],40,["onMouseover"])])})),128))])})),R={name:"prev-tracks",data:function(){return{users:{},showWordIndex:null,url:"http://174.138.111.113/prevtracks"}},methods:{mouseEnter:function(){this.hovered=!this.hovered},mouseLeave:function(){this.hovered=!1}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.url,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.users=t,console.log("Success:",t)})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("3de9");R.render=F,R.__scopeId="data-v-9d09eb28";var M=R,W={name:"current-track",components:{PreviousTracks:M},data:function(){return{url:"",trackName:"",showTracks:!1,artistName:"",currTracksUrl:"http://174.138.111.113/currtracks"}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.currTracksUrl,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(t){console.log("Success:",t),e.url=t.item.external_urls.spotify,e.trackName=t.item.name,e.artistName=t.item.artists[0].name,console.log("Success:Loaded")})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("7ab2");W.render=P,W.__scopeId="data-v-89e59e6e";var H=W,J={id:"friendList"},D=Object(r["f"])('<ul id="myUL"><li><a href="#">Nick</a></li><li><a href="#">Alex</a></li><li><a href="#">Izn</a></li><li><a href="#">Ben</a></li><li><a href="#">Yohan</a></li><li><a href="#">Jamil</a></li></ul>',1);function G(e,t,n,c,a,s){return Object(r["q"])(),Object(r["d"])("div",J,[Object(r["h"])("input",{type:"text",id:"myInput",onInput:t[1]||(t[1]=function(t){return e.myFunction()}),placeholder:"Search for friends",title:"Type in a name"},null,32),D])}var z={name:"FriendLists",props:{friendLists:Object},components:{},methods:{myFuntion:function(){var e,t,n,r,c,a,s;for(e=document.getElementById("myInput"),t=e.value.toUpperCase(),n=document.getElementById("myUL"),r=n.getElementsByTagName("li"),a=0;a<r.length;a++)c=r[a].getElementsByTagName("a")[0],s=c.textContent||c.innerText,s.toUpperCase().indexOf(t)>-1?r[a].style.display="":r[a].style.display="none"}}};n("ca08");z.render=G;var K=z,Q={name:"home",components:{FriendLists:K,CurrentTrack:H},data:function(){return{friendQueue:[],url:"http://174.138.111.113/spotlogin"}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.url,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("2bf2");Q.render=g,Q.__scopeId="data-v-388bc04c";var Y=Q,V=[{path:"/",name:"Home",component:Y},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("signup").then(n.bind(null,"5c9c"))}},{path:"/s/:name",name:"Subvue",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("subvue")]).then(n.bind(null,"f073"))}},{path:"/s/:subvuePermalink/:id",name:"Post",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("post")]).then(n.bind(null,"37d3"))}},{path:"/u/:username",name:"User",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("user")]).then(n.bind(null,"1511"))}},{path:"/create",name:"CreatePost",component:function(){return n.e("create").then(n.bind(null,"c9c2"))}},{path:"/create/subvue",name:"CreateSubvue",component:function(){return n.e("createsubvue").then(n.bind(null,"ed22"))}},{path:"/spotifyredirect",name:"Redirect",component:function(){return n.e("redirect").then(n.bind(null,"1503"))}}],X=Object(h["a"])({history:Object(h["b"])("/team3revue/"),routes:V}),Z=X,ee=n("4360");n("7d05"),Object(r["c"])(p).use(Z).use(ee["a"]).mount("#app")},"76ca":function(e,t,n){},"7ab2":function(e,t,n){"use strict";n("22fd")},"7d05":function(e,t,n){},"91b4":function(e,t,n){},bf7a:function(e,t,n){"use strict";n("76ca")},bf80:function(e,t,n){"use strict";var r=n("3f4a");t["a"]={username:function(e){return Object(r["a"])().get("users/"+e)}}},c877:function(e,t,n){},ca08:function(e,t,n){"use strict";n("c877")},cb22:function(e,t,n){"use strict";n("f6d9")},f6d9:function(e,t,n){}});
//# sourceMappingURL=app.39ff1120.js.map