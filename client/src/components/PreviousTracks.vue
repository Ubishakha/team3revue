<template lang="html">
  <div class="prev-tracks">
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
      
    };
  },
  methods:{
      mouseEnter: function(){
            this.hovered = !this.hovered;   
        },
        mouseLeave: function(){
            this.hovered = false;   
        }
  }
    
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
