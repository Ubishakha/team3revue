(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5c9c":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["H"])("data-v-099c847f");Object(a["s"])("data-v-099c847f");var s={class:"signup"},o=Object(a["g"])("h1",null,"Sign Up",-1),c={key:0,class:"error"},p=Object(a["g"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1),u=Object(a["f"])("Already have an account? "),i=Object(a["f"])("Login");Object(a["q"])();var d=n((function(e,t,r,d,l,b){var f=Object(a["x"])("router-link");return Object(a["p"])(),Object(a["d"])("div",s,[Object(a["g"])("form",{onSubmit:t[5]||(t[5]=Object(a["G"])((function(){return b.signUp&&b.signUp.apply(b,arguments)}),["prevent"]))},[o,Object(a["g"])("p",{class:["error",{"deprecated-error":l.deprecatedError}]},Object(a["z"])(l.error),3),Object(a["F"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.username=e}),placeholder:"Username",ref:"username"},null,512),[[a["B"],l.username]]),Object(a["F"])(Object(a["g"])("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.email=e}),placeholder:"E-Mail"},null,512),[[a["B"],l.email]]),Object(a["F"])(Object(a["g"])("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.password=e}),placeholder:"Password"},null,512),[[a["B"],l.password]]),Object(a["F"])(Object(a["g"])("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[a["B"],l.passwordRepeat]]),b.passwordsMatch?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])("p",c,"Passwords do not match!")),p,Object(a["g"])("p",null,[u,e.$store.state.isUserLoggedIn?Object(a["e"])("",!0):(Object(a["p"])(),Object(a["d"])(f,{key:0,to:{name:"Login",params:{}}},{default:n((function(){return[i]})),_:1}))])],32)])})),l=r("c5b9"),b={name:"signup",data:function(){return{error:"",deprecatedError:!1,username:"",password:"",passwordRepeat:"",email:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,l["a"].signup({username:this.username,password:this.password,email:this.email}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};r("d579");b.render=d,b.__scopeId="data-v-099c847f";t["default"]=b},"6f8a":function(e,t,r){},c5b9:function(e,t,r){"use strict";var a=r("3f4a");t["a"]={signup:function(e){return Object(a["a"])().post("signup",e)},login:function(e){return Object(a["a"])().post("login",e)}}},d579:function(e,t,r){"use strict";r("6f8a")}}]);
//# sourceMappingURL=signup.10700d8e.js.map