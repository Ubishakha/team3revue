<template lang="html">
  <div class="outer-wrapper"> 
      <h1>Dashboard</h1>
       <div>
    <input class="button connect" @click="connectToSpotify" type="submit" value="Get Data">
    <button> <a :href="url"> Login To Spotify </a> </button>
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
      url: process.env.VUE_APP_API_ENDPOINT + "/spotlogin"
    }
  },

  methods:{
    // async connectToSpotify(){
    //   fetch('http://localhost:5000/current-track', {
    //     method: 'POST',
    //     body: JSON.stringify({token: 'BQDVNTuSTn3m3aFdrQaoy26hPzD4vIj2okXy773N17cSdgKbWRo_e3xNHefvJ7PtOLO1GrqVqZhdrtPMSpzqM7wAOWx2mEm409jtHTWle_u2iPc8yI5RBmJ7cka1iZRAd_1Cr7F3QFsK-7RPhP73z6NFJZ3k1GT_6JgaPTUji6zmOJf3VMA'}),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     credentials: "same-origin",
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //     console.log('Success:', data);
    //     })
    //     .catch((error) => {
    //     console.error('Error:', error);
    //     });
    async connectToSpotify(){
      fetch('http://localhost:5000/mainpageorsmth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        // body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
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
