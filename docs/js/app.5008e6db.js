(function(e){function t(t){for(var r,a,o=t[0],u=t[1],i=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function o(e){return u.p+"js/"+({create:"create",createsubvue:"createsubvue",login:"login","post~subvue~user":"post~subvue~user",post:"post",subvue:"subvue",user:"user",redirect:"redirect",signup:"signup"}[e]||e)+"."+{create:"c21de75e",createsubvue:"fba4f051",login:"1df9df4c","post~subvue~user":"44f8c518",post:"8de4ddd5",subvue:"efa51dd0",user:"a63fb270",redirect:"5a59e466",signup:"3a38a521"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={create:1,createsubvue:1,login:1,"post~subvue~user":1,post:1,subvue:1,user:1,signup:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({create:"create",createsubvue:"createsubvue",login:"login","post~subvue~user":"post~subvue~user",post:"post",subvue:"subvue",user:"user",redirect:"redirect",signup:"signup"}[e]||e)+"."+{create:"7e4861d9",createsubvue:"4ab57012",login:"2de0e623","post~subvue~user":"bef68dfa",post:"07c8e7d3",subvue:"07f928d7",user:"7c7a5439",redirect:"31d6cfe0",signup:"279090d4"}[e]+".css",s=u.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var i=c[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],l=i.getAttribute("data-href");if(l===r||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/team3revue/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d0e":function(e,t,n){},1921:function(e,t,n){},"2bf2":function(e,t,n){"use strict";n("91b4")},"3de9":function(e,t,n){"use strict";n("0d0e")},"3f4a":function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),s=n("4360");t["a"]=function(){return a.a.create({baseURL:"http://174.138.111.113/api",headers:{Authorization:"JWT ".concat(s["a"].state.token)}})}},4360:function(e,t,n){"use strict";var r=n("5502"),a=n("0e44"),s=n("bf80");t["a"]=r["a"].createStore({plugins:[Object(a["a"])()],state:{token:null,user:null,isUserLoggedIn:!1,subscribedSubvues:[]},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t},setSubscribedSubvues:function(e,t){e.subscribedSubvues=t}},actions:{setToken:function(e,t){var n=e.commit;n("setToken",t)},setUser:function(e,t){var n=e.commit;n("setUser",t)},updateSubscribedSubvues:function(e,t){var n=e.commit,r=e.state;r.isUserLoggedIn&&(t?n("setSubscribedSubvues",t):s["a"].username(r.user.username).then((function(e){n("setSubscribedSubvues",e.data.subscribed)})).catch((function(){})))}},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function s(e,t,n,s,c,o){var u=Object(r["y"])("NavBar"),i=Object(r["y"])("router-view");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["h"])(u),Object(r["h"])("main",null,[Object(r["h"])(i)])])}var c=Object(r["I"])("data-v-1c62fcc3");Object(r["t"])("data-v-1c62fcc3");var o=Object(r["g"])("Spoti-Fi"),u=Object(r["g"])("Sign Up"),i=Object(r["g"])("Login");Object(r["r"])();var l=c((function(e,t,n,a,s,l){var d=Object(r["y"])("router-link");return Object(r["q"])(),Object(r["d"])("nav",null,[Object(r["h"])(d,{class:"title",to:{name:"Home",params:{}}},{default:c((function(){return[o]})),_:1}),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(d,{key:0,style:{float:"right"},to:{name:"SignUp",params:{}}},{default:c((function(){return[u]})),_:1})),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])(d,{key:1,style:{float:"right"},to:{name:"Login",params:{}}},{default:c((function(){return[i]})),_:1})),e.$store.state.isUserLoggedIn?(Object(r["q"])(),Object(r["d"])("a",{key:2,style:{float:"right"},onClick:t[1]||(t[1]=function(e){return l.logout()})},"Logout")):Object(r["e"])("",!0),e.$store.state.isUserLoggedIn?(Object(r["q"])(),Object(r["d"])(d,{key:3,style:{float:"right"},to:{name:"User",params:{username:e.$store.state.user.username}}},{default:c((function(){return[Object(r["g"])(Object(r["A"])(e.$store.state.user.username),1)]})),_:1},8,["to"])):Object(r["e"])("",!0)])})),d={name:"nav",methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Home"})}}};n("bf7a");d.render=l,d.__scopeId="data-v-1c62fcc3";var p=d,f={name:"app",components:{NavBar:p},data:function(){return{}},created:function(){this.$store.dispatch("updateSubscribedSubvues")}};n("cb22");f.render=s;var b=f,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=Object(r["I"])("data-v-388bc04c");Object(r["t"])("data-v-388bc04c");var v={class:"outer-wrapper"},O=Object(r["h"])("h1",null,"Dashboard",-1),j={class:"wrapper"};Object(r["r"])();var y=m((function(e,t,n,a,s,c){var o=Object(r["y"])("FriendLists"),u=Object(r["y"])("CurrentTrack");return Object(r["q"])(),Object(r["d"])("div",v,[O,Object(r["h"])("div",null,[Object(r["h"])("button",null,[Object(r["h"])("a",{href:s.url,target:"_blank"}," Login To Spotify ",8,["href"])])]),Object(r["h"])("div",j,[Object(r["h"])(o,{class:"main-child",friendLists:e.friendLists},null,8,["friendLists"]),Object(r["h"])(u)])])})),g=n("1da1"),S=(n("96cf"),Object(r["I"])("data-v-47fed1f4"));Object(r["t"])("data-v-47fed1f4");var T={class:"Friendlist"},L={class:"current-track"},k={class:"container Friend-1"},C=Object(r["h"])("strong",null,"Bishakha",-1),M={class:"track"},P={class:"hovered currSong"},A=Object(r["h"])("strong",null,"Current Track: ",-1),B={class:"trackName"},I={class:"artistName"},N={class:"playBtnSingle"},w=Object(r["h"])("i",{class:"far fa-play-circle playBtn hovered"},null,-1);Object(r["r"])();var R=S((function(e,t,n,a,s,c){var o=Object(r["y"])("PreviousTracks");return Object(r["q"])(),Object(r["d"])("div",T,[Object(r["h"])("div",L,[Object(r["h"])("div",k,[Object(r["h"])("div",{onClick:t[1]||(t[1]=function(e){return s.showTracks=!s.showTracks}),class:"hovered name"},[C]),Object(r["h"])("div",M,[Object(r["h"])("div",null,[Object(r["h"])("span",P,[A,Object(r["h"])("a",{href:s.url},[Object(r["h"])("span",B,Object(r["A"])(s.trackName),1),Object(r["h"])("span",I,Object(r["A"])(s.artistName),1)],8,["href"])]),Object(r["h"])("span",N,[Object(r["h"])("a",{href:s.url},[w],8,["href"])])])])])]),s.showTracks?(Object(r["q"])(),Object(r["d"])(o,{key:0})):Object(r["e"])("",!0)])})),E=(n("b0c0"),n("8ed1")),_=Object(r["I"])("data-v-9d09eb28");Object(r["t"])("data-v-9d09eb28");var G={class:"prev-tracks"},K={key:0,class:"playBtn"},U=Object(r["h"])("i",{class:"far fa-play-circle playBtn"},null,-1);Object(r["r"])();var H=_((function(e,t,n,a,s,c){return Object(r["q"])(),Object(r["d"])("div",G,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(s.users.items,(function(e,n){return Object(r["q"])(),Object(r["d"])("li",{key:n},[s.showWordIndex===n?(Object(r["q"])(),Object(r["d"])("span",K,[Object(r["h"])("a",{href:s.url},[U],8,["href"])])):Object(r["e"])("",!0),Object(r["h"])("span",{onMouseover:function(e){return s.showWordIndex=n},onMouseout:t[1]||(t[1]=function(e){return s.showWordIndex=null}),class:"tracks"},[Object(r["h"])("a",{href:e.track.external_urls.spotify},[Object(r["h"])("strong",null,Object(r["A"])(e.track.name),1),Object(r["g"])(" "+Object(r["A"])(e.track.artists[0].name),1)],8,["href"])],40,["onMouseover"])])})),128))])})),x={name:"prev-tracks",data:function(){return{users:{},showWordIndex:null,url:"http://174.138.111.113/prevtracks"}},methods:{mouseEnter:function(){this.hovered=!this.hovered},mouseLeave:function(){this.hovered=!1}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.url,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.users=t,console.log("Success:",t)})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("3de9");x.render=H,x.__scopeId="data-v-9d09eb28";var Z=x,Y={name:"current-track",components:{PreviousTracks:Z},data:function(){return{data:E.data,url:"",trackName:"",showTracks:!1,artistName:"",currTracksUrl:"http://174.138.111.113/currtracks"}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.currTracksUrl,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(t){e.url=t.item.external_urls.spotify,e.trackName=t.item.name,e.artistName=t.item.artists[0].name,console.log("Success:",t)})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("dfae");Y.render=R,Y.__scopeId="data-v-47fed1f4";var F=Y,D={id:"friendList"},q=Object(r["f"])('<ul id="myUL"><li><a href="#">Nick</a></li><li><a href="#">Alex</a></li><li><a href="#">Izn</a></li><li><a href="#">Ben</a></li><li><a href="#">Yohan</a></li><li><a href="#">Jamil</a></li></ul>',1);function W(e,t,n,a,s,c){return Object(r["q"])(),Object(r["d"])("div",D,[Object(r["h"])("input",{type:"text",id:"myInput",onInput:t[1]||(t[1]=function(t){return e.myFunction()}),placeholder:"Search for friends",title:"Type in a name"},null,32),q])}var J={name:"FriendLists",props:{friendLists:Object},components:{},methods:{myFuntion:function(){var e,t,n,r,a,s,c;for(e=document.getElementById("myInput"),t=e.value.toUpperCase(),n=document.getElementById("myUL"),r=n.getElementsByTagName("li"),s=0;s<r.length;s++)a=r[s].getElementsByTagName("a")[0],c=a.textContent||a.innerText,c.toUpperCase().indexOf(t)>-1?r[s].style.display="":r[s].style.display="none"}}};n("ca08");J.render=W;var V=J,X={name:"home",components:{FriendLists:V,CurrentTrack:F},data:function(){return{friendQueue:[],url:"http://174.138.111.113/spotlogin"}},mounted:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:fetch(e.url,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}));case 1:case"end":return t.stop()}}),t)})))()}};n("2bf2");X.render=y,X.__scopeId="data-v-388bc04c";var $=X,Q=[{path:"/",name:"Home",component:$},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("signup").then(n.bind(null,"5c9c"))}},{path:"/s/:name",name:"Subvue",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("subvue")]).then(n.bind(null,"f073"))}},{path:"/s/:subvuePermalink/:id",name:"Post",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("post")]).then(n.bind(null,"37d3"))}},{path:"/u/:username",name:"User",component:function(){return Promise.all([n.e("post~subvue~user"),n.e("user")]).then(n.bind(null,"1511"))}},{path:"/create",name:"CreatePost",component:function(){return n.e("create").then(n.bind(null,"c9c2"))}},{path:"/create/subvue",name:"CreateSubvue",component:function(){return n.e("createsubvue").then(n.bind(null,"ed22"))}},{path:"/spotifyredirect",name:"Redirect",component:function(){return n.e("redirect").then(n.bind(null,"1503"))}}],z=Object(h["a"])({history:Object(h["b"])("/team3revue/"),routes:Q}),ee=z,te=n("4360");n("7d05"),Object(r["c"])(b).use(ee).use(te["a"]).mount("#app")},"76ca":function(e,t,n){},"7d05":function(e,t,n){},"8ed1":function(e){e.exports=JSON.parse('{"data":{"actions":{"disallows":{"resuming":true,"skipping_prev":true}},"context":null,"currently_playing_type":"track","is_playing":true,"item":{"album":{"album_type":"single","artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5"},"href":"https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5","id":"5cj0lLjcoR7YOSnhnX0Po5","name":"Doja Cat","type":"artist","uri":"spotify:artist:5cj0lLjcoR7YOSnhnX0Po5"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"},"href":"https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP","id":"7tYKF4w9nC0nq9CsPZTHyP","name":"SZA","type":"artist","uri":"spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"}],"available_markets":["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VN","VU","WS","XK","ZA","ZM","ZW"],"external_urls":{"spotify":"https://open.spotify.com/album/1OnzqJTL9bwe4kvaLxRYxt"},"href":"https://api.spotify.com/v1/albums/1OnzqJTL9bwe4kvaLxRYxt","id":"1OnzqJTL9bwe4kvaLxRYxt","images":[{"height":640,"url":"https://i.scdn.co/image/ab67616d0000b273908280d9807127e185b71d56","width":640},{"height":300,"url":"https://i.scdn.co/image/ab67616d00001e02908280d9807127e185b71d56","width":300},{"height":64,"url":"https://i.scdn.co/image/ab67616d00004851908280d9807127e185b71d56","width":64}],"name":"Kiss Me More (feat. SZA)","release_date":"2021-04-09","release_date_precision":"day","total_tracks":1,"type":"album","uri":"spotify:album:1OnzqJTL9bwe4kvaLxRYxt"},"artists":[{"external_urls":{"spotify":"https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5"},"href":"https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5","id":"5cj0lLjcoR7YOSnhnX0Po5","name":"Doja Cat","type":"artist","uri":"spotify:artist:5cj0lLjcoR7YOSnhnX0Po5"},{"external_urls":{"spotify":"https://open.spotify.com/artist/7tYKF4w9nC0nq9CsPZTHyP"},"href":"https://api.spotify.com/v1/artists/7tYKF4w9nC0nq9CsPZTHyP","id":"7tYKF4w9nC0nq9CsPZTHyP","name":"SZA","type":"artist","uri":"spotify:artist:7tYKF4w9nC0nq9CsPZTHyP"}],"available_markets":["AD","AE","AG","AL","AM","AO","AR","AT","AU","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CH","CI","CL","CM","CO","CR","CV","CW","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ES","FI","FJ","FM","FR","GA","GB","GD","GE","GH","GM","GN","GQ","GR","GT","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IN","IS","IT","JM","JO","JP","KE","KG","KH","KI","KM","KN","KR","KW","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","MA","MC","MD","ME","MG","MH","MK","ML","MN","MO","MR","MT","MU","MV","MW","MX","MY","MZ","NA","NE","NG","NI","NL","NO","NP","NR","NZ","OM","PA","PE","PG","PH","PK","PL","PS","PT","PW","PY","QA","RO","RS","RU","RW","SA","SB","SC","SE","SG","SI","SK","SL","SM","SN","SR","ST","SV","SZ","TD","TG","TH","TL","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VC","VN","VU","WS","XK","ZA","ZM","ZW"],"disc_number":1,"duration_ms":208866,"explicit":true,"external_ids":{"isrc":"USRC12100543"},"external_urls":{"spotify":"https://open.spotify.com/track/748mdHapucXQri7IAO8yFK"},"href":"https://api.spotify.com/v1/tracks/748mdHapucXQri7IAO8yFK","id":"748mdHapucXQri7IAO8yFK","is_local":false,"name":"Kiss Me More (feat. SZA)","popularity":95,"preview_url":"https://p.scdn.co/mp3-preview/8b1d00e682179457aed6ea828ef76ff9f3b5027b?cid=0e5b6e912af94415ba75116ea413538e","track_number":1,"type":"track","uri":"spotify:track:748mdHapucXQri7IAO8yFK"},"progress_ms":8341,"timestamp":1620179932431},"logged_in":true}')},"91b4":function(e,t,n){},bf7a:function(e,t,n){"use strict";n("76ca")},bf80:function(e,t,n){"use strict";var r=n("3f4a");t["a"]={username:function(e){return Object(r["a"])().get("users/"+e)}}},c877:function(e,t,n){},ca08:function(e,t,n){"use strict";n("c877")},cb22:function(e,t,n){"use strict";n("f6d9")},dfae:function(e,t,n){"use strict";n("1921")},f6d9:function(e,t,n){}});
//# sourceMappingURL=app.5008e6db.js.map