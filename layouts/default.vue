<template>
<div class="wrapper">
    <b-navbar>
        <b-navbar-brand v-if="$store.getters.page === 'home'" class="mx-auto" href="#">
            <b-img src="img/FSS-logo.svg" center fluid width="300"></b-img>
        </b-navbar-brand>
        <b-navbar-brand class="py-2 p text-white" v-else style="text-transform: capitalize">
            {{$store.getters.page}}
        </b-navbar-brand>
        <div class="ml-auto" v-if="$store.getters.page !== 'home'">
            <chat class="chatLogo" />
        </div>
    </b-navbar>
    <Nuxt />
</div>
</template>
<script>
import chat from "~/static/img/chat.svg?inline";
export default {
    components: {
        chat
    }
}
</script>
<style lang="scss">
@import 'assets/scss/custom.scss';
html, body, .wrapper {
    overflow: scroll;
    overflow-x: hidden;
    max-width: 100%;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
.chatLogo {
    width: 24px;
    height: 24px;
    fill: $yellow;
}
.navbar {
    height: 48px !important;
    line-height: 48px;
}
</style>
