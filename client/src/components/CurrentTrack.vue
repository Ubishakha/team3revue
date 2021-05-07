<template lang="html">
<div class="Friendlist">
    <div class="current-track">
        <div class="container Friend-1">
            <div @click="showTracks=!showTracks" class="hovered name">
                <strong>Bishakha</strong>
            </div>
            <div class="track">
                <div>
                    <span class="hovered currSong"><strong>Current Track: </strong>
                        <a v-bind:href="url">
                            <span class="trackName">
                                {{trackName}}
                            </span>
                            <span class="artistName">
                                {{artistName}}
                            </span>
                        </a>
                    </span>
                
                    <span class= "playBtnSingle">
                        <a v-bind:href="url" >
                            <i class="far fa-play-circle playBtn hovered"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div> 
    </div>
     <PreviousTracks v-if="showTracks"></PreviousTracks>
  </div>
</template>

<script>
// import Spotify from '@/services/Spotify'
import spot from '../json/curr-track.json'
import PreviousTracks from '@/components/PreviousTracks'

export default {
    name: 'current-track',
    
    components: { PreviousTracks },

    data() {
        return {
            data: spot.data,
            url : spot.data.item.external_urls.spotify,
            trackName: spot.data.item.name,
            showTracks : false,
            artistName: spot.data.item.artists[0].name,
            currTracksUrl: process.env.VUE_APP_API_ENDPOINT + "/currtracks"
        }
    },

    // async mounted(){
    //     fetch(this.currTracksUrl, {
    //         method: 'GET',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         mode: 'cors',
    //         credentials: 'include',
    //         // body: JSON.stringify(data),
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             this.url = data.item.external_urls.spotify
    //             this.trackName= data.item.name
    //             this.artistName = data.item.artists[0].name
    //             console.log('Success:', data);
    //         })
    //         .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // },
    
    
}

    
</script>

<style scoped>

.hovered:hover, .playBtnSingle:hover {
    color: #43af55;
}

.currSong{
    padding-bottom: 1em;

}
/* .UserInfo{
    background: #333;
    color: aliceblue;
    border-radius: 2px;
    float:left;
    margin: 2%;
    width: 20%; */
/* } */

.Friendlist{
    margin-right: 2%;
    width: 70%;
    float:right;
    background: #333;
    color: aliceblue;
    border-radius: 4px;
}

strong{
    font-size: 1.05em;
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

.currSong{
    padding-left: 1em;
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


</style>
