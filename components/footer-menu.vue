<template>
<footer class="footer">
    <div class="footer__menu">

        <div ref="home" class="footer__menu__item">
            <div class="footer-btn" :class="$store.getters.page == 'home' ? 'footer-btn--active' : null" @click="$store.commit('set_page','home')">
                <transition name="blobby">
                    <blob class="blob" v-if="$store.getters.page == 'home'" />
                </transition>
                <home class="icon" />
                Home
            </div>
        </div>
        <div ref="details" class="footer__menu__item">
            <div class="footer-btn" :class="$store.getters.page == 'details' ? 'footer-btn--active' : null" @click="$store.commit('set_page','details')">
                <transition name="blobby">
                    <blob class="blob" v-if="$store.getters.page == 'details'" />
                </transition>
                <review class="icon" />
                Details
            </div>
        </div>
        <div ref="documents" class="footer__menu__item">
            <div class="footer-btn" :class="$store.getters.page == 'documents' ? 'footer-btn--active' : null" @click="$store.commit('set_page','documents')">
                <transition name="blobby">
                    <blob class="blob" v-if="$store.getters.page == 'documents'" />
                </transition>
                <documents class="icon" />
                Documents
            </div>
        </div>
        <div ref="call" class="footer__menu__item">
            <div class="footer-btn" :class="$store.getters.page == 'call' ? 'footer-btn--active' : null" @click="$store.commit('set_page','call')">
                <transition name="blobby">
                    <blob class="blob" v-if="$store.getters.page == 'call'" />
                </transition>
                <call class="icon" />
                Call
            </div>
        </div>
        <div ref="chat" class="footer__menu__item">
            <div class="footer-btn" :class="$store.getters.page == 'chat' ? 'footer-btn--active' : null" @click="$store.commit('set_page','chat')">
                <transition in-out name="blobby">
                    <blob class="blob" v-if="$store.getters.page == 'chat'" />
                </transition>
                <chat class="icon" />
                Chat
            </div>
        </div>

    </div>
</footer>
</template>

<script>
import home from "~/static/img/home.svg?inline";
import review from "~/static/img/review.svg?inline";
import plane from "~/static/img/send.svg?inline";
import documents from "~/static/img/documents.svg?inline";
import call from "~/static/img/call.svg?inline";
import chat from "~/static/img/chat.svg?inline";
import blob from "~/static/img/blob.svg?inline";
export default {
    data: function () {
        return {
            blobPosition: 0
        }
    },
    components: {
        home,
        review,
        plane,
        documents,
        call,
        chat,
        blob
    },
    computed: {
        page: {
            get() {
                return this.$store.getters.page
            },
            set(val) {
                this.$store.commit('set_page', val)
            }
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/custom.scss';

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;

    &__menu {
        background-color: $darkblue;
        padding: 0.5em 0;
        display: flex;
        justify-content: space-around ;

        &__item {
            width: 66px;
             flex-basis: auto;
            .footer-btn {
                text-align: center;
                font-size: 12px;
                cursor: pointer;
                position: relative;
                color: $white;

                .blob {
                    left: 0;
                    width: 100%;
                    position: absolute;
                    transform-origin: center bottom;
                    fill: $darkblue;
                    top: -24px;
                    height: 27px;
                    z-index: -1;
                    path: {
                        fill: $darkblue;
                    }
                }

                .icon {
                    height: 20px;
                    max-width: 100%;
                    display: block;
                    margin: 0 auto;

                    path {
                        fill: $white;
                    }

                    fill: $white;
                }

                &--active {
                    color: $yellow;

                    .icon {
                        fill: $yellow;

                        path {
                            fill: $yellow;
                        }
                    }
                }
            }
        }
    }
}

.blobby-enter-active,
.blobby-leave-active {
    transition: all .5s ease;
}

.blobby-enter,
.blobby-leave-to {
    transform: scaleX(5);
    transform: scaleY(0);
}
</style>
