<template lang="html">
  <div class="home-container">
    
    <h1>Dashboard</h1>
    <div class="main">
      <Friends class="main-child" />
      <FriendQueue class="main-child" :friendQueue="friendQueue" :friendInfo="friendInfo" />
    </div>
    <!--<CurrentTrack>
    </CurrentTrack>-->
  </div>
    
  <input class="button connect" @click="connectToSpotify" type="submit" value="Connect To Spotify">
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
//import CurrentTrack from '@/components/CurrentTrack'
import PostsService from '@/services/PostsService'
import FriendQueue from '@/components/FriendQueue'
import Friends from '@/components/Friends'

// import Spotify from '@/services/Spotify'

export default {
  name: 'home',

  components: { FriendQueue, Friends,/* CurrentTrack */},

  data() {
    return {
      friendQueue: [] //This needs to be filled with the data from the spotify api
    }
  },
  methods: {

        connectToSpotify() {
          window.open("http://localhost:80/api/auth-login", '_blank');
        }
        // async connectToSpotify() {
        //   try{
        //     const url = await Spotify.spotifyLogin();
        //     console.log(url);
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
        // }
      // connectToSpotify: function () {   
      //     window.open("https://accounts.spotify.com/authorize", "_blank");    
      // }
  },

  mounted() {
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
  },
  created() {
    this.friendQueue = [
      {
        id: 1,
        name: 'Justin Garcia'
      },
      {
        id: 2,
        name: 'DK'
      },
      {
        id: 3,
        name: 'Bishakha'
      },
      {
        id: 4,
        name: 'Khue'
      }
    ]
  }

}
</script>

<style scoped lang="css">
/* Is the scoped lang part needed? */
.player{
  display: block;
}
.main {
  max-width: 500px;
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
}
</style>
