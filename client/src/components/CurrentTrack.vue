<template lang="html">
<div class="Friendlist">
    <div class="current-track">
        <div class="Friend">
            <div @click="showTracks=!showTracks" class="hovered name">
                <div class="friend-name">Bishakha</div>
            </div>
            <div v-if="isPlaying" class="tracks">
                <img class="_5814e6eb4f933d11bfa18c01b92eff76-scss" width="14" height="14" alt="" src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif">
                <a v-bind:href="url">
                            <img :src="currTracksImg" alt="" width="40" height="40">
                </a>
                <div class="track-info">
                    <a v-bind:href="url">
                        <span class="trackName">
                            {{trackName}}
                        </span>
                    </a>
                    <div class="grid">
                        <aside class="hovered currSong">
                            {{artistName}}
                        </aside>

                        <aside class="dot">
                            <span class="album-name">
                                {{albumName}}
                            </span>
                        </aside>
                    </div>
                </div>
            </div>
        </div> 
    </div>
     <PreviousTracks v-if="showTracks"></PreviousTracks>
  </div>
</template>

<script>
import PreviousTracks from '@/components/PreviousTracks'

export default {
    name: 'current-track',
    
    components: { PreviousTracks },

    data() {
        return {
            // data: spot.data,
            url : '',
            trackName: "",
            showTracks : false,
            artistName: "",
            albumName: "",
            urllog: process.env.VUE_APP_API_ENDPOINT + "/spotlogin",
            currTracksUrl: process.env.VUE_APP_API_ENDPOINT + "/currtracks",
            username: this.$store.state.user.username,
            currTracksImg:"",
            isPlaying: false,
        }
    },

    methods:{
        fn(){
      
            fetch(this.urllog, {
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
    },

    mounted(){
        fetch(this.currTracksUrl, {
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
                if (data.is_playing){
                    this.url = data.item.external_urls.spotify
                    this.trackName= data.item.name
                    this.artistName = data.item.artists[0].name
                    this.currTracksImg = data.item.album.images[1].url
                    this.isPlaying = data.is_playing
                    this.albumName = data.item.album.name
                }
                else{
                    this.isPlaying = data.is_playing
                }
                console.log(this.isPlaying);
            })
            .catch((error) => {
            console.error(error);
        });
    },
    
    
}

    
</script>

<style scoped>

.hovered:hover, .playBtnSingle:hover {
    color: #43af55;
}

/* .currSong{
    padding-bottom: 1em;

} */
.track-info{
    padding: 0.5em;
}

.Friendlist{
    margin-right: 2%;
    background: #333;
    color: aliceblue;
    border-radius: 4px;
}

.friend-name{
    padding-left: 2em;
    padding-top: 1em;
    font-size: 1.05em;
    font-weight: bold;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}
.searchTerm {
  width: 100%;
  border: 3px solid #43af55;
  border-right: none;
  padding: 5px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}
.searchButton {
  width: 30px;
  height: 30px;
  border: 1px ;
  background: #43af55;
  text-align: center;
  color: black;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}
.playBtnSingle{
    float: right;
}
.playBtn{
    font-size: 28px;
    background: transparent;
    border-radius: 0 5px 5px 0;
    color: aliceblue;
} 

.name{
    font-size: 20px;
    /* width: 25%; */
    margin-bottom: 0.5em;
}
a{
     color: inherit;
 }

.trackName{
    margin-right: 0.5em;
}

.grid{
    display: grid;
    grid-template-columns: 150px auto 60px;
}
.tracks{
    display: grid;
    padding: 0.5em;
    margin-left: 2em;
    grid-template-columns: 3rem 10% 2fr;
    
}
aside{
    display: flex;
    align-items: left;
}
.dot{
    display: list-item;          /* This has to be "list-item"                                               */
    list-style-type: disc;       /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
}
.Friend{
    padding: 0em;
}
</style>
