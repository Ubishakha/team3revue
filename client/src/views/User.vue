<template lang="html">
  <div class="user">

    <div class="container">
      <div>
        <h1>Top 10 Tracks</h1>
          <PreviousTracks/>
      </div>
      <div>
        <h1>Top 10 Artists</h1>
        <TopArtists/>
      </div>
    </div>
            
            <!-- <FriendQueue class="main-child" :friendQueue="friendQueue" /> This is the list of friend's currently playing songs -->
          

    <div class="info">
      <img :src="'https://www.gravatar.com/avatar/' + this.hashedEmail + '?s=200'" />
      <h1>{{ username }}</h1>
      <button class="spotify-button" @click="connectToSpotify">Connect to Spotify</button>
    </div>

    
  </div>
</template>

<script>
import TopArtists from '@/components/TopArtists'
// import CreateButton from '@/components/CreateButton'
import PostsService from '@/services/PostsService'
import UsersService from '@/services/UsersService'
import PreviousTracks from '@/components/PreviousTracks'

export default {
  name: 'user',

  components: { PreviousTracks, TopArtists},

  data() {
    return {
      username: this.$route.params.username,
      url: process.env.VUE_APP_API_ENDPOINT + "/spotlogin",
      posts: [],
      hashedEmail: ''
    }
  },

  mounted() {
    this.fetchData()
  },

  watch: {
    $route() {
      this.username = this.$route.params.username
      this.fetchData()
    }
  },

  methods: {
    fetchData() {
      UsersService.username(this.username)
        .then(response => {
          this.hashedEmail = response.data.hashedEmail
        })

      PostsService.user(this.username)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.error = e.response.data.error
        })
    }, 
    connectToSpotify(){
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
      removDupes(arr){
        let uniqueChars = [...new Set(arr)];

        console.log(uniqueChars);
      },
  }
}
</script>

<style lang="css">
.container {
  width: 80%;
  float: left;
  color: aliceblue;
}

.info {
  width: 20%;
  float: right;
  padding-top: 20px;
}

.info img {
  display: block;
  margin: 0 auto;
}

.button {
  background: blue;
  display: inline;
  padding: 10px 20px;
}

.post-preview:first-of-type {
  margin-top: 25px;
}

.spotify-button{
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

.spotify-button:hover{
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
}
</style>
