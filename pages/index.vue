<template>
<div class="mainWrapper">
    <transition mode="out-in" name="slide-up">
        <home-screen v-if="$store.getters.page == 'home'"></home-screen>
        <details-screen v-if="$store.getters.page == 'details'"></details-screen>
        <documents-screen v-if="$store.getters.page == 'documents'"></documents-screen>
        <chat-screen v-if="$store.getters.page == 'chat'"></chat-screen>
    </transition>
    <footer-menu></footer-menu>
</div>
</template>
<script>
export default {
    middleware: 'authenticated',
    async asyncData({
        $axios,
        store
    }) {
        try {
            // Get the user data
            // Need to get paramiters from URL - use this for test
            const data = await $axios.$get('http://dfh-api.co.uk/portal_api/home?cl_id=aIB4e4aC&review_id=Zoh%2Feg%3D%3D&ac_user_id=ZQ%3D%3D&token=ZIZ4eoOBfYqYgg%3D%3D')
            const chatData = await $axios.$get('http://dfh-api.co.uk/portal_api/chat?cl_id=aIB4e4aC&review_id=Zoh%2Feg%3D%3D&ac_user_id=ZQ%3D%3D&token=ZIZ4eoOBfYqYgg%3D%3D')
            store.dispatch('updateChatData', JSON.parse(JSON.stringify(chatData)))
            store.dispatch('updateUserData', JSON.parse(JSON.stringify(data)))
        } catch (err) {
            console.log(err)
        } 
    }
}
</script>
<style lang="scss">
.footer {
    z-index: 100;
}
.mainWrapper {
    padding-bottom: 80px;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-up-enter-active {
    transition: all .3s ease;
}
.slide-up-leave-active {
    transition: all .3s ease;
}
.slide-up-enter,
.slide-up-leave-to {
    opacity: 0;
}
</style>
