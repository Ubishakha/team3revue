<template lang="html">
  <div class="outer-wrapper"> 
      <h1>Dashboard</h1>
       <div>
    <!-- <input class="button connect" @click="connectToSpotify" type="submit" value="Get Data"> -->
    <input class="button connect" @click = "fn" type="submit" value="Login To Spotify">
  </div>
      <div class="wrapper"> 
        
          <FriendLists class="main-child" :friendLists="friendLists" />
          <CurrentTrack/>
          <!-- <FriendQueue class="main-child" :friendQueue="friendQueue" /> This is the list of friend's currently playing songs -->
        
      </div>
  </div>
 
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
import CurrentTrack from '@/components/CurrentTrack'
// import PostsService from '@/services/PostsService'
// import FriendQueue from '@/components/FriendQueue'
import FriendLists from '@/components/FriendLists'

// import CurrentTrack from '@/components/CurrentTrack'
// import PostsService from '@/services/PostsService'
// import Spotify from '@/services/Spotify'

export default {
  name: 'home',

  components: { FriendLists,CurrentTrack },
  
  data() {
    return {
      friendQueue: [], //This needs to be filled with the data from the spotify api
      url: process.env.VUE_APP_API_ENDPOINT + "/spotlogin",
      username: this.$store.state.user.username
    }
  },
  methods:{
    fn(){
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
          window.open(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      },
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
.outer-wrapper{
  width: auto;
}

.friend-wrapper{
  width: 70%;
  background: #333;
  margin: 2%;
  color: aliceblue;
  border-radius: 2px;
  /* float:right; */
}
</style>
