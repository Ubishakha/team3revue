<template lang="html">
  <div class="top-artists">
        <div v-for="(item, index) in artists" v-bind:key="index">
            <div @mouseover="showWordIndex = index" @mouseout="showWordIndex = null" class="row tracks">
                <span class="idx">{{index+1}}</span>
                <img :src="item.images[1].url" alt="" width="40" height="40">
                <div class="artist-info">
                    <a v-bind:href="item.external_urls.spotify">
                            <span class="artist-name">{{item.name}}</span>
                    </a>
                    <!-- <div class="grid">
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
                    </div> -->
                    
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// import Spotify from '@/services/Spotify'
// import spot from '../json/prev-tracks.json'

export default {
    name: 'top-artists',
    
    data() {
    return {
      artists: {},
      showWordIndex: null,
      url: process.env.VUE_APP_API_ENDPOINT + "/artists"
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
                // let arr = data.items
                // let uniqueArtists = new Map()
                
                // arr.forEach(element => {
                    
                //     if (!uniqueTracks.has(element.track.id)){
                //     uniqueTracks[element.track.id] = element
                //     }
                // });

                this.artists = data.items
                console.log('Success:', data.items);
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
.top-artists{
    overflow: auto;
    max-height: 200px;
    background-color: #181818;
    color: aliceblue;
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
.artist-info {
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
.artist-name{
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
