<template lang="html">
  <div class="redirect">
    <p>Close the window</p>
  </div>
</template>

<script>
import Spotify from '@/services/Spotify'
export default {
    name: 'redirect',
    data() {
        return {}
    }, 
    mounted: function() {
        const code = this.$route.query.code 
        Spotify.completeLogin(code) 
    }
}
</script>
