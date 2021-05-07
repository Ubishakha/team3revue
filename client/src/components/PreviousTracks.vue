<template lang="html">
  <div class="prev-tracks">
      <!-- <button @click="prevTracks">Click me</button> -->
        <li v-for="(item, index) in users.items" v-bind:key="index">
            <span v-if="showWordIndex === index" class= "playBtn">
                    <a v-bind:href="url">
                        <i class="far fa-play-circle playBtn"></i>
                    </a>
            </span>
            <span @mouseover="showWordIndex = index" @mouseout="showWordIndex = null" class="tracks">
                <a v-bind:href="item.track.external_urls.spotify">
                    <strong>{{item.track.name}}</strong>
                    {{item.track.artists[0].name}}
                </a>
            </span>
        </li>
  </div>
</template>

<script>
// import Spotify from '@/services/Spotify'
import spot from '../json/prev-tracks.json'

export default {
    name: 'prev-tracks',
    
    data() {
    return {
      users: spot,
      showWordIndex: null,
      url: process.env.VUE_APP_API_ENDPOINT + "/prevtracks"
    };
  },
  methods:{
        mouseEnter: function(){
            this.hovered = !this.hovered;   
        },
        mouseLeave: function(){
            this.hovered = false;   
        },
  },
        async mounted(){
        fetch(this.url, {
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
                this.users = data
                // console.log(this.users)
                console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    },
}

    
</script>

<style scoped>
.tracks:hover {
    color: #43af55;
      }
.prev-tracks{
    overflow: auto;
    max-height: 200px;
}
 strong{
     font-size: 1.05em;
     padding: 0.5em;
 }

 span{
     display: inline-block;
 }

 a{
     color: inherit;
 }

 li{
     list-style-type: none;
     padding: 0.5em;
 }

 .tracks{
     margin-left: 2em;
 }
</style>
