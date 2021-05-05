<template lang="html">
  <div class="home container">
    <h1>Dashboard</h1>
    <CurrentTrack>
    </CurrentTrack>
    <input class="button connect" @click="connectToSpotify" type="submit" value="Get Data">
    <button> <a href="http://localhost:5000/spotlogin"> Login </a> </button>
     </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import PostPreview from '@/components/PostPreview'
import CurrentTrack from '@/components/CurrentTrack'
// import PostsService from '@/services/PostsService'
// import Spotify from '@/services/Spotify'

export default {
  name: 'home',

  components: { CurrentTrack },

  methods:{
    connectToSpotify(){
      fetch("http://localhost:5000/mainpageorsmth").then(response => response.json())
        .then(data => console.log(data));
    }
  }

}
</script>

<style scoped lang="css">
.player{
  display: block;
}
</style>
