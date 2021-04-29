<template>
  <div>
    <Songs />
  </div>
</template>

<script>
import Songs from "./Songs";
export default {
  name: "SongHistory",
  props: {
    songHistory: Queue,
  },
  components: {
    Songs,
  },
};
class Queue { //Creates the necessary functions for the queue, might want to use a different programming language for this
    constructor() {
        this.items = [];
    }
    enqueue(element) { //adds an element to the end of the queue
        this.items.push(element);
    }
    dequeue() { //removes an element from the front of the queue
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    front() {//returns the first element in the queue
        if(this.isEmpty()) {
            return this.items[0];
        }
    }
    isEmpty() { //returns true if the queue is empty
        return this.items.length == 0;
    }
    printQueue() { //concats all the elements and returns them in a String
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}
</script>
