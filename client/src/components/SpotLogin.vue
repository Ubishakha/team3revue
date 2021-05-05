<template lang="html">
  <div class="spotLogin">
    <p>Login Page</p>
  </div>
</template>

<script>
import Spotify from '@/services/Spotify'
export default {
    name: 'spotLogin',
    data() {
        return {}
    }, 
    mounted: function() {
        const code = this.$route.query.code 
        Spotify.completeLogin(code) 
    }
}
</script>
