<template>
  <div class="scrollable">
    <!-- This is the class that makes it scrollable, see the code in style-->
    <div :key="friendInfo.id" v-for="friendInfo in friendQueue" id="friendBox">
      <!-- Iterates through the array of friends and identifies them by their id-->
      <FriendInfo
        :friendInfo="friendInfo"
        :id="friendInfo.id"
        :name="friendInfo.name"
        :currSong="friendInfo.currSong"
      /><!--This can contain whatever we would like it to contain. As the app gets bigger the FriendInfo will just be a place to store the data in one object.-->
    </div>
  </div>
</template>

This is the whole stucture of the friend queue. It imports friendInfo which contains the necessary info of the friends.
<script>
import FriendInfo from "@/components/FriendInfo.vue";

export default {
  components: { FriendInfo },
  name: "FriendQueue",
  props: {
    friendQueue: Array,
  },
  component: {
    FriendInfo,
  },
};
</script>

<style>
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
/* The main box of the friend queue */
.scrollable {
  border-radius: 10px;
  height: 350px;
  width: 900px;
  overflow-y: auto;
}
/* Each individual box in the friend queue */
#friendBox {
  height: auto;
  margin: auto;
  padding: 15px;
  font-size: 5vh;
  background-color: #333;
}
</style>