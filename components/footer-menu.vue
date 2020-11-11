<template>
<footer class="footer">
    <div class="blobAnimate">
        <svg ref="blob" xmlns="http://www.w3.org/2000/svg" class="blobAnimate__blob" width="106.681" height="20.019" viewBox="0 0 106.681 20.019">
            <path id="Subtraction_2" data-name="Subtraction 2" d="M97.681-4.982H-8v-6.134c.011,0,.962.024,2.514.024,4.954,0,17.093-.257,22.795-2.633A67.042,67.042,0,0,0,23.7-16.981C29.648-20.271,36.391-24,45.379-24A31.729,31.729,0,0,1,58.6-20.943a55.167,55.167,0,0,1,8.616,5.1,22.031,22.031,0,0,0,2.086,1.355c.141.071.284.144.435.222,2.5,1.294,6.686,3.46,27.941,3.46v5.826Z" transform="translate(8.499 24.501)" fill="#0b6f7b" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1" />
        </svg>
    </div>
    <div class="footer__menu">
        <b-row no-gutters>
            <b-col ref="home">
                <div class="footer-btn" :class="$store.getters.page == 'home' ? 'footer-btn--active' : null" @click="$store.commit('set_page','home')">
                    <home/>
                    Home
                </div>
            </b-col>
            <b-col ref="details">
                <div class="footer-btn" :class="$store.getters.page == 'details' ? 'footer-btn--active' : null" @click="$store.commit('set_page','details')">
                    <review/>
                    Details 
                </div>
            </b-col>
            <b-col ref="documents">
                <div class="footer-btn" :class="$store.getters.page == 'documents' ? 'footer-btn--active' : null" @click="$store.commit('set_page','documents')">
                    <documents/>
                    Documents
                </div>
            </b-col>
            <b-col ref="call">
                <div class="footer-btn" :class="$store.getters.page == 'call' ? 'footer-btn--active' : null" @click="$store.commit('set_page','call')">
              <call/>
                    Call
                </div>
            </b-col>
            <b-col ref="chat">
                <div class="footer-btn" :class="$store.getters.page == 'chat' ? 'footer-btn--active' : null" @click="$store.commit('set_page','chat')">
                    <chat/>
                    Chat
                </div>
            </b-col>
        </b-row>
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
        chat
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
    watch: {
        page(val) {
            this.$refs.blob.style.transform = 'scaleX(1.1)'
            //this.$refs.blob.style.transform = 'scaleY(0.8)'
            setTimeout(() => {
                this.$refs.blob.style.transform = 'scaleX(1)'
            }, 400);

            this.$refs.blob.style.left = this.$refs[val].offsetLeft.toString() + 'px'
        }
    },
    mounted() {
        this.$refs.blob.style.width = this.$refs.home.scrollWidth + 'px' // add a watcher if the page resizes
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom.scss';

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition-duration: 1s;
    transition-timing-function: easeOutBounce;

    &__menu {
        background-color: $darkblue;
        padding: 0.5em 0;

        .footer-btn {
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            position: relative;
            color: $white;

            svg {
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

                svg {
                    fill: $yellow;

                    path {
                        fill: $yellow;
                    }
                }

            }
        }
    }
}

.blobAnimate {
    position: relative;
    height: 12px;
    transition-duration: 300ms;
    transition-timing-function: easeOutBounce;

    &__blob {
        transition-duration: 300ms;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        transform-origin: bottom;
        width: 25%
    }
}
</style>
