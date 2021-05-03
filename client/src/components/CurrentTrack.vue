<template lang="html">
  <div class="container UserInfo">
      <h2>Bishakha Upadhyaya</h2>
      <div class="search">
          <input type="text" class="searchTerm" placeholder="Search">
            <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
      </div>
      <div class="all-friends">
          <h3>F1</h3>
          <h3>F2</h3>
          <h3>F3</h3>
          <h3>F4</h3>
      </div>
  </div>
  <div class="FriendList">
    <div class="current-track">
        <div class="container Friend-1">
            <h3>
                Dikshyant Pradhan
            </h3>
            <div>
                <span>Current Track: {{item.name}}</span>
                <span class= "playBtnSingle">
                   
                        <i class="far fa-play-circle playBtn"></i>
                    
                </span>
            </div>
            <PreviousTracks></PreviousTracks>
            <div>
                <p>
                    {{items}}
                </p>
            </div>
        </div> 
        <div class="container Friend-2">
            <h3>
                Khue Le
            </h3>
            <div>
                <span>Current Track: {{}}</span>
                <span class= "playBtnSingle">
                    
                        <i class="far fa-play-circle playBtn"></i>
                   
                </span>
            </div>
            <PreviousTracks></PreviousTracks>
        </div> 
        <div class="container Friend-3">
            <h3>
                Justin Garcia
            </h3>
            <div>
                 <span>Current Track: {{}}</span>
                 <span class= "playBtnSingle">
                    
                        <i class="far fa-play-circle playBtn"></i>
                    
                </span>
            </div>
            <PreviousTracks></PreviousTracks>
        </div> 
    </div>
  </div>
</template>

<script>
// import Spotify from '@/services/Spotify'
import PreviousTracks from '@/components/PreviousTracks'

export default {
    name: 'current-track',
    
    components: { PreviousTracks },
    
    data() {
        return {
        "context": {
            "external_urls": {
                "spotify": "http://open.spotify.com/user/spotify/playlist/49znshcYJROspEqBoHg3Sv"
            },
            "href": "https://api.spotify.com/v1/users/spotify/playlists/49znshcYJROspEqBoHg3Sv",
            "type": "playlist",
            "uri": "spotify:user:spotify:playlist:49znshcYJROspEqBoHg3Sv"
        },
        "timestamp": 1490252122574,
        "progress_ms": 44272,
        "is_playing": true,
        "currently_playing_type": "track",
        "item": {
            "album": {
                "album_type": "album",
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6TJmQnO44YE5BtTxH8pop1"
                },
            "href": "https://api.spotify.com/v1/albums/6TJmQnO44YE5BtTxH8pop1",
            "id": "6TJmQnO44YE5BtTxH8pop1",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/8e13218039f81b000553e25522a7f0d7a0600f2e",
                    "width": 629
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/8c1e066b5d1045038437d92815d49987f519e44f",
                    "width": 295
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/d49268a8fc0768084f4750cf1647709e89a27172",
                    "width": 63
                }
            ],
            "name": "Hot Fuss",
            "type": "album",
            "uri": "spotify:album:6TJmQnO44YE5BtTxH8pop1"
        },
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
                },
                "href": "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
                "id": "0C0XlULifJtAgn6ZNCW2eu",
                "name": "The Killers",
                "type": "artist",
                "uri": "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
            }
        ],
        "available_markets": [
            "AD",
            "AR",
            "TW",
            "UY"
        ],
        "disc_number": 1,
        "duration_ms": 222075,
        "explicit": false,
        "external_ids": {
            "isrc": "USIR20400274"
        },
        "external_urls": {
            "spotify": "https://open.spotify.com/track/0eGsygTp906u18L0Oimnem"
        },
        "href": "https://api.spotify.com/v1/tracks/0eGsygTp906u18L0Oimnem",
        "id": "0eGsygTp906u18L0Oimnem",
        "name": "Mr. Brightside",
        "popularity": 0,
        "preview_url": "http://d318706lgtcm8e.cloudfront.net/mp3-preview/f454c8224828e21fa146af84916fd22cb89cedc6",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0eGsygTp906u18L0Oimnem"
        }
    }
    }
    // created: async function() {
    //          fetch("http://localhost:5000/mainpageorsmth").then(response => {
    //              response.json().then(data=>{
    //                  if (!data.logged_in){
    //                      console.log(data); 
    //                      window.open(data.url)
    //                     //  setTimeout(function() {
    //                     //     wnd.close();
    //                     // }, 1000000)
    //                  }
    //                  console.log(data)}); 
    //          },response=>{
    //              console.log("Not logged in");
    //              console.log(response.url);
    //          })

             
            //  this.url = val.url;
            //  window.open(this.url);
            // }

    // mounted(){
    //     Spotify.completeLogin()
    // }
    
    }

    
</script>

<style scoped>
.UserInfo{
    background: #333;
    color: aliceblue;
    border-radius: 2px;
    float:left;
    margin: 2%;
    width: 20%;
}

.FriendList{
    margin: 2%;
    width: 70%;
    float:right;
    background: #333;
    color: aliceblue;
    border-radius: 2px;
}

/* .all-friends{
    overflow: y;
    max-height: 100px;
} */

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

</style>
