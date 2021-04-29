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
                <span>Current Track: {{timestamp}}</span>
                <span class= "playBtnSingle">
                   
                        <i class="far fa-play-circle playBtn"></i>
                    
                </span>
            </div>
        </div> 
        <div class="container Friend-2">
            <h3>
                Khue Le
            </h3>
            <div>
                <span>Current Track: {{timestamp}}</span>
                <span class= "playBtnSingle">
                    
                        <i class="far fa-play-circle playBtn"></i>
                   
                </span>
            </div>
        </div> 
        <div class="container Friend-3">
            <h3>
                Justin Garcia
            </h3>
            <div>
                 <span>Current Track: {{timestamp}}</span>
                 <span class= "playBtnSingle">
                    
                        <i class="far fa-play-circle playBtn"></i>
                    
                </span>
            </div>
        </div> 
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
// import api from "@/api";

export default {
    name: 'current-track',


    data() {
        return {
            "timestamp": 1490252122574,
            "device": {
                "id": "3f228e06c8562e2f439e22932da6c3231715ed53",
                "is_active": false,
                "is_restricted": false,
                "name": "Xperia Z5 Compact",
                "type": "Smartphone",
                "volume_percent": 54
            },
            "progress_ms": "44272",
            "is_playing": true,
            "currently_playing_type": "track",
            "item": {},
            "shuffle_state": false,
            "repeat_state": "off",
            "context": {
                "external_urls": {
                "spotify": "http://open.spotify.com/user/spotify/playlist/49znshcYJROspEqBoHg3Sv"
            },
            "href": "https://api.spotify.com/v1/users/spotify/playlists/49znshcYJROspEqBoHg3Sv",
            "type": "playlist",
            "uri": "spotify:user:spotify:playlist:49znshcYJROspEqBoHg3Sv"
            }
        }
    }
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
