<template>
  <div id="friendList">
    <input
      type="text"
      id="myInput"
      @input="myFunction()"
      placeholder="Search for friends"
      title="Type in a name"
    />
    <ul id="myUL">
      <li><a href="#">Nick</a></li>
      <li><a href="#">Alex</a></li>
      <li><a href="#">Izn</a></li>
      <li><a href="#">Ben</a></li>
      <li><a href="#">Yohan</a></li>
      <li><a href="#">Jamil</a></li>
    </ul>
    
  </div>
</template>

<script>
//import FriendList from '@/components/FriendList.vue'

export default {

  name: "FriendLists",
  props: {
    friendLists: Object,
  },
  components: {
    //FriendList
  },
  methods: {
    myFuntion() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("myInput");
      filter =input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
      }
    }
  }
  
}
</script>


<style>
#friendList {
  background-color: #333;
  border-radius: 10px;
}
#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  margin-top: -1px; /* Prevent double borders */
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  display: block
}

#myUL li a:hover{
color: #43af55;
}

#myUL li a:hover:not(.header) {
  background-color: rgba(167, 165, 165, 0.281);
}
</style>