<template lang="html">
  <div class="home container">
<<<<<<< HEAD
    <h1>Active Friends</h1>
    <FriendQueue :friendQueue="friendQueue" :friendInfo="friendInfo" />
    <PostPreview v-for="post in posts" :key="post.id" :post="post">
      {{ post.title }}
    </PostPreview>

    <CreateButton></CreateButton>
  </div>
=======
    <h1>Dashboard</h1>
    
    <CurrentTrack>
    </CurrentTrack>
     </div>
  <input class="button connect" @click="connectToSpotify" type="submit" value="Connect To Spotify">
>>>>>>> Sprint1
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
import CurrentTrack from '@/components/CurrentTrack'
import PostsService from '@/services/PostsService'
<<<<<<< HEAD
import CreateButton from '@/components/CreateButton'
import FriendQueue from '@/components/FriendQueue'

=======
// import Spotify from '@/services/Spotify'
>>>>>>> Sprint1

export default {
  name: 'home',

<<<<<<< HEAD
  components: { PostPreview, CreateButton, FriendQueue },

  data() {
    return {
      posts: null,
      friendQueue: [] //This needs to be filled with the data from the 
    }
=======
  components: { CurrentTrack },

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
>>>>>>> Sprint1
  },

  mounted() {
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
<<<<<<< HEAD
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
=======
    
>>>>>>> Sprint1
  }

}
</script>

<style scoped lang="css">
.player{
  display: block;
}
</style>
