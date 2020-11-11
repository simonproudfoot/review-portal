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
    async asyncData({
        $axios,
        store
    }) {
        try {
            const data = await $axios.$get('http://localhost/www.reviewportal.co.uk/api/test_ls.php')
            store.dispatch('updateUserData', data)
        }
        catch (err) {
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
