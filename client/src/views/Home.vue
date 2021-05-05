<template lang="html">
  <div class="home-container">
    
    <h1>Dashboard</h1>
    <div class="main">
      <FriendLists class="main-child" :friendLists="friendLists" />
      <FriendQueue class="main-child" :friendQueue="friendQueue" /> <!-- This is the list of friend's currently playing songs-->
    </div>
    <!--<CurrentTrack>
    </CurrentTrack>-->
  </div>
    
  <input class="button connect" @click="connectToSpotify" type="submit" value="Connect To Spotify">
    <CurrentTrack>
    </CurrentTrack>
    <input class="button connect" @click="connectToSpotify" type="submit" value="Get Data">
    <button> <a href="http://localhost:5000/spotlogin"> Login </a> </button>
     </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
//import CurrentTrack from '@/components/CurrentTrack'
import PostsService from '@/services/PostsService'
import FriendQueue from '@/components/FriendQueue'
import FriendLists from '@/components/FriendLists'

import CurrentTrack from '@/components/CurrentTrack'
// import PostsService from '@/services/PostsService'
// import Spotify from '@/services/Spotify'

export default {
  name: 'home',

  components: { FriendQueue, FriendLists,/* CurrentTrack */},

  methods:{
    connectToSpotify(){
      fetch("http://localhost:5000/mainpageorsmth").then(response => response.json())
        .then(data => console.log(data));
    }
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
    this.friendQueue = [ //Fill in this array with the information from the user
      {
        id: 1, //user id
        name: 'Justin Garcia', //friend's name, potentially register the user as one of these objects
        currSong: 'Mood Swings by A Boogie',
      },
      {
        id: 2,
        name: 'DK',
        currSong: 'Up by Dro Kenji'
      },
      {
        id: 3,
        name: 'Bishakha',
        currSong: 'El Portal by Caleborate'
      },
      {
        id: 4,
        name: 'Khue',
        currSong: 'Ruby Red by Smino'
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
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
}
</style>
