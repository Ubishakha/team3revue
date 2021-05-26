<template lang="html">
  <div class="prev-tracks">
      <!-- <button @click="prevTracks">Click me</button> -->
        <div v-for="(item, index) in users.items" v-bind:key="index">
            <!-- <span v-if="showWordIndex === index" class= "playBtn">
                    <a v-bind:href="url">
                        <i class="far fa-play-circle playBtn"></i>
                    </a>
            </span> -->
            
            <div @mouseover="showWordIndex = index" @mouseout="showWordIndex = null" class="row tracks">
                <span class="idx">{{index+1}}</span>
                <img :src="item.track.album.images[1].url" alt="" width="40" height="40">
                <div class="track-info">
                    <a v-bind:href="item.track.external_urls.spotify">
                            <span class="track-name">{{item.track.name}}</span>
                    </a>
                    <div class="grid">
                        
                            <aside class="artist-name">
                                <a v-bind:href="item.track.artists[0].external_urls.spotify">
                                    {{item.track.artists[0].name}}
                                    </a>
                            </aside>
                                
                            <aside class="dot">
                                <span class="album-name">
                                    <a v-bind:href="item.track.album.external_urls.spotify">
                                        {{item.track.album.name}}
                                    </a>
                                </span>
                            </aside>
                    </div>
                    
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// import Spotify from '@/services/Spotify'
// import spot from '../json/prev-tracks.json'

export default {
    name: 'prev-tracks',
    
    data() {
    return {
      users: {},
      showWordIndex: null,
      url: process.env.VUE_APP_API_ENDPOINT + "/mainpageorsmth"
    };
  },
    mounted(){
        fetch(this.url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${this.$store.state.token}`,
            },
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(this.username),
            })
            .then(response => response.json())
            .then(data => {
                this.users = data
                // console.log(this.users)
                console.log('Success:', data.items[0].track.album.images[1].url);
            })
            .catch((error) => {
            console.error('Error:', error);
        });
    },
}

    
</script>

<style scoped>
.tracks:hover {
    background-color: rgba(167, 165, 165, 0.281);
}
.prev-tracks{
    overflow: auto;
    max-height: 200px;
    background-color: #181818;
}
 strong{
     font-size: 1.05em;
     padding: 0.5em;
 }
.tracks{
    display: grid;
    padding: 0.5em;
    margin-left: 2em;
    grid-template-columns: 3rem 10% 2fr
}
.track-info {
    padding-left: 0.5em;
    display: flex;
    flex-direction: column;  
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
.track-name{
    font-weight: bold;
}
.track-name:hover, .artist-name:hover, .album-name:hover{
 color: #43af55;
}
.dot{
    display: list-item;          /* This has to be "list-item"                                               */
    list-style-type: disc;       /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
}
.grid{
    display: grid;
    grid-template-columns: 150px auto 60px;
    
}

aside{
    display: flex;
    align-items: left;
    /* justify-content: center; */
}
</style>
