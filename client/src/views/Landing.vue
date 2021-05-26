<template lang="html">
  <div class="landing parent">
    <div class="container welcome">
        <h1>Welcome to Spoti-Fi</h1>
    </div>
    <div class="container child">
        <div class="container info">
            <span>
                <h3>
                   Discover, connect and share new music on Spotify through your friends. 
                </h3>
            </span>
        </div>
        <div class="container buttons">
            
            <button @click="redirectToLogin()" type="button" class="btn btn-primary">Log in</button>
        
            <button @click="redirectToSignup()" type="button" class="btn btn-success">Sign Up</button>
        
            <button type="button" class="btn btn-success">About Us</button>
        </div>
    </div>

    <div class="container dev">
        <span class="title">
            <h2>
                Meet the Devs
            </h2>
        </span>
        <div class="container flex-grid">
            <!-- <h3>
            Spoti-Fi was build as a project for Software Engineering class(CS 322) at Knox College.
            </h3> -->
            <div class="col">
                
                Bishakha
            </div>
            <div class="col">
                Dikshant
            </div>
            <div class="col">
                Justin
            </div>
        </div>
    </div>
  </div>

</template>

<script>
// import SubvueInfo from '@/components/SubvueInfo'
// import CreateButton from '@/components/CreateButton'
// import PostPreview from '@/components/PostPreview'
// import SubvuesService from '@/services/SubvuesService'
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
    background-image: linear-gradient(#00240c, #0d8a35, #4f8c99);
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
}
.info{
    width: 500px;;
}
.dev{
    color: aliceblue;
    width: 600px;
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
