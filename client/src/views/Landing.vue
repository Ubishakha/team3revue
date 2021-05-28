<template lang="html">
  <div class="landing parent">
    <div class="welcome">
        <h1>Welcome to Spoti-Fi</h1>
    </div>
    <div class="child">
        <div class="info">
            <span>
                <h3>
                   Discover, connect and share new music on Spotify through your friends. 
                </h3>
            </span>
        </div>
        <div class="buttons">
            
            <button @click="redirectToLogin()" type="button" class="btn btn-primary">Log in</button>
        
            <button @click="redirectToSignup()" type="button" class="btn btn-success">Sign Up</button>
        
        </div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'landing',
    methods:{
        redirectToSignup(){
            this.$router.push({path: '/signup'});
        },
        redirectToLogin(){
            this.$router.push({path: '/login'});
        }
    }
}
</script>

<style scoped lang="css">

h3{
    color:aliceblue;
}
.parent {
    background: linear-gradient(0deg, rgba(30,32,30,1) 8%, rgba(48,133,60,1) 100%);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
}

.welcome{
    display: flex;
    font-size: 2em;
    color: aliceblue;
    margin: 0.5em;
}
.child{
    float: left;
    margin-left: 1em;
}
.info{
    width: 500px;;
}
.devs{
    margin: 1em;
    color: aliceblue;
    width: 600px;
    float: left;
}
.title{
    font-size: 1.5em;
}

.description{
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 30%;
    justify-content: space-between;
}
.info span{
    color: aliceblue;
    font-size: 1.5em;
}
.btn{
    display: inline-block;
    padding: 0.7em 1.7em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.2em;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255, 255, 255, 0.014);
    font-family:'Avenir', Helvetica, Arial, sans-serif;
    font-weight:bolder;
    font-size: 16px;
    color: #0c0c0c;
    background-color: #e6e9e7;
}

.btn:hover{
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
}
.flex-grid{
    /* display: inline-block;
  width: 100px;
  height: 100px;
  background: url(https://image.shutterstock.com/image-photo/closeup-portrait-funny-ginger-cat-260nw-1563541219.jpg);
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%; */
  display: flex;
  justify-content: space-between;
}
.col{
    flex:1;
}
@media (max-width: 400px) {
  .flex-grid {
    display: block;  
  }
  .col {
      width: 100%;
      margin: 0 0 10px 0;
    }
}
</style>
