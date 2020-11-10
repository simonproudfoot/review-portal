<template>
<div>
    <b-navbar>
        <b-navbar-brand v-if="$store.getters.page === 'home'" class="mx-auto" href="#">
            <b-img src="img/FSS-logo.svg" center fluid width="300"></b-img>
        </b-navbar-brand>
        <b-navbar-brand class="py-2 p text-white" v-else style="text-transform: capitalize">
            {{$store.getters.page}}
        </b-navbar-brand>
        <div class="ml-auto" v-if="$store.getters.page !== 'home'">
            <b-img src="img/chat.svg" center fluid width="25"></b-img>
        </div>
    </b-navbar>
    <Nuxt />
</div>
</template>

<style lang="scss">
@import 'assets/scss/custom.scss';

html {
    overflow: scroll;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 0px;
    /* Remove scrollbar space */
    background: transparent;
    /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #fff;
}
</style>
