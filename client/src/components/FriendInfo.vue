<template>
  <div>
    <h1 class="friendInfo">{{name}}</h1>
    <h1 class="friendInfo songs">Currently playing: {{currSong}}</h1>
  </div>
</template>
Wrapper class for all of the data from the friends to be stored
<script>
export default {
  name: "FriendInfo",
  props: {
    // Makes sure all of the data that is being received in each of the props is the exact data that we need
    friendInfo: Object,
    id: Number,
    name: String,
    currSong: String,
  },
  component: {},
};
</script>

<style>
/*This colors the text inside of the friend queue and list*/
.friendInfo {
  color: white;
  padding: 5px;
  font-size: 20px;
}
.songs {
  font-size: 20px;
}
</style>

