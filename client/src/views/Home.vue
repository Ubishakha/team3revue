<template lang="html">
  <div class="home container">
    <h1>Dashboard</h1>
    
    <CurrentTrack>
    </CurrentTrack>
     </div>
  <input class="button connect" @click="connectToSpotify" type="submit" value="Connect To Spotify">
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
import CurrentTrack from '@/components/CurrentTrack'
import PostsService from '@/services/PostsService'
import Spotify from '@/services/Spotify'

export default {
  name: 'home',

  components: { CurrentTrack },

  methods: {
        connectToSpotify() {
          window.open(Spotify.spotifyLogin(), "_blank");
        }
      // connectToSpotify: function () {   
      //     window.open("https://accounts.spotify.com/authorize", "_blank");    
      // }
  },

  mounted() {
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
    
  }

}
</script>

<style scoped lang="css">
.player{
  display: block;
}
</style>
