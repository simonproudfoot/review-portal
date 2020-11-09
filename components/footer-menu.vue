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
                    <transition name="slide-up">
                    </transition>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path  d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"></path>
                    </svg>
                    Home
                </div>
            </b-col>
            <b-col ref="details">
                <div class="footer-btn" :class="$store.getters.page == 'details' ? 'footer-btn--active' : null" @click="$store.commit('set_page','details')">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path>
                    </svg>
                    Details
                </div>
            </b-col>
            <b-col ref="documents">
                <div class="footer-btn" :class="$store.getters.page == 'documents' ? 'footer-btn--active' : null" @click="$store.commit('set_page','documents')">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path  d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
                    </svg>
                    Documents
                </div>
            </b-col>
            <b-col ref="call">
                <div class="footer-btn" :class="$store.getters.page == 'call' ? 'footer-btn--active' : null" @click="$store.commit('set_page','call')">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                    </svg>
                    Call
                </div>
            </b-col>
            <b-col ref="chat">
                <div class="footer-btn" :class="$store.getters.page == 'chat' ? 'footer-btn--active' : null" @click="$store.commit('set_page','chat')">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="450.7px" height="422.4px" viewBox="0 0 450.7 422.4" style="enable-background:new 0 0 450.7 422.4;" xml:space="preserve">
                        <path class="st0" d="M325.1,0.4H125.6C56.8,0.4,0.4,56.8,0.4,125.6v51.7c0,68.9,56.3,125.2,125.2,125.2h5.5v119.5l126.8-119.5h67.2
c68.9,0,125.2-56.3,125.2-125.2v-51.7C450.3,56.8,394,0.4,325.1,0.4z M225.4,250.5c-82.6,0-149.8-67.2-149.8-149.8h41.7
	c0,59.6,48.5,108.1,108.1,108.1c59.6,0,108.1-48.5,108.1-108.1h41.7C375.2,183.3,308,250.5,225.4,250.5z" />
                    </svg>
                    Chat
                </div>
            </b-col>
        </b-row>
    </div>
</footer>
</template>

<script>
export default {
    data: function () {
        return {
            blobPosition: 0
        }
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
            this.$refs.blob.style.transform = 'scaleX(4)'
            this.$refs.blob.style.transform = 'scaleY(0.8)'
            setTimeout(() => {
                this.$refs.blob.style.transform = 'scaleX(1)'
            }, 300);

            this.$refs.blob.style.left = this.$refs[val].offsetLeft.toString() + 'px'
        }
    },
    mounted(){
        this.$refs.blob.style.width = this.$refs.home.scrollWidth+'px' // add a watcher if the page resizes
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
