<template>
  <div class="scrollable">
    <div :key="friendInfo.id" v-for="friendInfo in friendQueue" :friendInfo="friendInfo" class="friendBox">
      <FriendInfo :friendInfo="friendInfo" :id ="friendInfo.id" :name="friendInfo.name" class="friendInfo" />
      <!-- {{friendInfo.name}} -->
    </div>
  </div>
</template>

This is the whole stucture of the the friend queue. It imports friendInfo which contains the necessary info of the friends.
<script>
import FriendInfo from "./FriendInfo";

export default {
  name: "FriendQueue",
  props: {
    friendQueue: Array,
  },
  component: {
    FriendInfo,
  },
}
</script>

<style>
.scrollable::-webkit-scrollbar {
  /*display: none; edit this to change the scrollbar visibility*/
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Background of the scrollbar */
::-webkit-scrollbar-track {
  background: #333; 
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(22, 124, 48); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 90, 34); 
}
.scrollable {
  margin: auto;
  border-radius: 10px;
  height: 500px;
  width:700px;
  overflow-y: auto;
}
.friendBox {
  height:250px;
  margin: auto;
  padding: 15px;
  font-size:5vh;
  background-color: #333;
}
</style>