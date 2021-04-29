<template lang="html">
  <div class="home container">
    <h1>Active Friends</h1>
    <FriendQueue :friendQueue="friendQueue" :friendInfo="friendInfo" />
    <PostPreview v-for="post in posts" :key="post.id" :post="post">
      {{ post.title }}
    </PostPreview>

    <CreateButton></CreateButton>
  </div>
</template>

<script>
import PostPreview from '@/components/PostPreview'
import PostsService from '@/services/PostsService'
import CreateButton from '@/components/CreateButton'
import FriendQueue from '@/components/FriendQueue'


export default {
  name: 'home',

  components: { PostPreview, CreateButton, FriendQueue },

  data() {
    return {
      posts: null,
      friendQueue: [] //This needs to be filled with the data from the 
    }
  },

  mounted() {
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
  },
  created() {
    this.friendQueue = [
      {
        id: 1,
        name: 'Justin Garcia'
      },
      {
        id: 2,
        name: 'DK'
      },
      {
        id: 3,
        name: 'Bishakha'
      },
      {
        id: 4,
        name: 'Khue'
      }
    ]
  }
}
</script>

<style lang="css">
</style>
