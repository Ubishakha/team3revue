<template lang="html">
  <div class="outer-wrapper"> 
    <div class="dashboard">
      <h1>Dashboard</h1>
      <div>
        <!-- <button class="button connect" @click = "getUsers">Get all users</button> -->
        <!-- <input class="button connect" @click="connectToSpotify" type="submit" value="Get Data">
        
        <input class="button connect" @click = "fn2" type="submit" value="Get"> -->
      </div>
    </div>

    <div class="content">
        <div class="container col-3 friend-wrapper"> 
          <!-- <p>abc</p> -->
            <FriendLists class="main-child" :friendLists="friendLists" />
        </div>
        <div class="container tracks-wrapper">
            <CurrentTrack/>
            <!-- <FriendQueue class="main-child" :friendQueue="friendQueue" /> This is the list of friend's currently playing songs -->
          
        </div>
    </div>
    
  </div>
 
</template>

<script>

import CurrentTrack from '@/components/CurrentTrack'
import Spotify from '@/services/Spotify'
import FriendLists from '@/components/FriendLists'


export default {
  name: 'home',

  components: { FriendLists, CurrentTrack },
  
  data() {
    return {
      friendQueue: [], //This needs to be filled with the data from the spotify api
      url: process.env.VUE_APP_API_ENDPOINT + "/spotlogin",
      url2: process.env.VUE_APP_API_ENDPOINT + "/prevtracks",
      url3: process.env.VUE_APP_API_ENDPOINT + "/users",
      username: this.$store.state.user.username,
      array: {},
      all: null
    }
  },

  methods:{

    getUsers(){
      Spotify.index().then(response=>{
        this.all = response.data
        console.log("Users: "+this.all)
    })
    }
    
  },
  
  mounted(){
    
    // alert(this.username);
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${this.$store.state.token}`
      },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(this.username),
      
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      // fetch(this.url3, {
      // method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `JWT ${this.$store.state.token}`
      // },
      // mode: 'cors',
      // credentials: 'include',
      // body: JSON.stringify(this.username),
      
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });
    },

}
</script>

<style scoped lang="css">
/* Is the scoped lang part needed? */
.player{
  display: block;
}
.all-friends {
  /* display: grid; */
  /* grid-template-columns: 1fr 4fr; */
  /* grid-gap: 15px; */
  float:left;
  width: 20%;
}
/* .outer-wrapper{
  /* display: grid;
  grid-template-rows: 30px 1fr; */
  /* width: auto; */
  

.dashboard{
  padding-left: 1em;
  font-size: 1.5em;
  color: aliceblue;
  height: 15%;
  width: 100%;
}
.friend-wrapper{
  float: left;
}

.content {
  display: flex;
  /* flex-wrap: wrap; */
  /* align-content: space-between; */
}

.tracks-wrapper{
  width: 80%;
}
</style>
