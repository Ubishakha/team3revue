<template>
    <div :friendInfo="friendInfo" :id ="friendInfo.id" :name="friendInfo.name">
        <h1>jdfkjdk</h1>
        {{name}}
    </div>
</template>
<script>
export default {
    name: 'FriendInfo',
    props: {
        friendInfo: Object,
        id: Number,
        name: String,
    },
    components: {
    }
}
</script>

<style>
.friendInfo {
    color: white;
    padding: 5px;
}
</style>