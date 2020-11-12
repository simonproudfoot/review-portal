<template>
<b-container>
    <div ref="chatWindow" class="chatWindow hide-scrollbar" @click="chatEditor = false">
        <transition-group name="pop">
            <template v-for="(message, i) in $store.getters.chat">
                <div v-if="message.creator == 'agent'" class="chatField" :key="i">
                    <div class="chatField__avatar chatField__avatar--agent">
                        <chat />
                    </div>
                    <div class="chatField__bubble chatField__bubble--agent" v-html="message.message">
                    </div>
                </div>
                <div v-else class="chatField" :key="i">
                    <div class="chatField__avatar chatField__avatar--user">
                        <user />
                    </div>
                    <div class="chatField__bubble chatField__bubble--user" v-html="message.message"> >
                    </div>
                </div>
            </template>
        </transition-group>
    </div>
    <div class="chatEditor border" :style="chatEditor ? 'height:150px' : null">
        <button class="chatEditor__toggle" @click="chatEditor = !chatEditor">
            <iconPlus v-if="!chatEditor" />
            <iconMinus v-else />
        </button>
        <textarea ref="textBox" class="py-0" :style="chatEditor ? 'height: 90%' : 'height: 22px'" placeholder="Type your message here" v-model.trim="newMessage" @click="chatEditor = true" v-on:keyup.enter="sendMessage"></textarea>
        <button class="chatEditor__send" @click="sendMessage" :style="newMessage.length >= 1 ? null : 'opacity:0.6'">
            <plane />
        </button>
    </div>
</b-container>
</template>
<script>
import iconMinus from "~/static/img/minus.svg?inline";
import iconPlus from "~/static/img/plus.svg?inline";
import plane from "~/static/img/send.svg?inline";
import chat from "~/static/img/chat.svg?inline";
import user from "~/static/img/user.svg?inline";
export default {
    data: function () {
        return {
            chatEditor: false,
            newMessage: '',
        }
    },
    components: {
        plane,
        iconPlus,
        iconMinus,
        chat,
        user
    },
    methods: {
        sendMessage() {
            if (this.newMessage.length >= 1) {
                var newMsg = {
                    creator: 'user',
                    message: this.newMessage
                }
                this.$store.commit('set_chat', newMsg)
                this.newMessage = ''
                this.$refs.textBox.blur();
                setTimeout(() => {
                    this.chatEditor = false
                    this.$refs.chatWindow.scrollTop = this.$refs.chatWindow.scrollHeight
                }, 100);
            }
        }
    },
    watch: {
        newMessage() {
            this.chatEditor = true
        }
    }
}
</script>
<style lang="scss">
@import 'assets/scss/custom.scss';
.chatWindow {
    height: calc(100vh - 170px);
    padding-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 14px;
    position: relative;
}
.chatEditor {
    transition-duration: 0.3s;
    border-radius: 25px;
    box-shadow: $shadow;
    position: fixed;
    bottom: 70px;
    height: 50px;
    width: calc(100% - 30px);
    left: 0;
    overflow: hidden;
    right: 0;
    margin: auto;
    background-color: $white;
    &__toggle {
        border: 0;
        width: 35px;
        height: 35px;
        background-color: $grey;
        border-radius: 100%;
        bottom: 7px;
        left: 7px;
        position: absolute;
        svg {
            padding: 0;
            height: 20px;
            width: 18px;
            fill: $white;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            path {
                fill: $white
            }
        }
    }
    &__send {
        width: 35px;
        height: 35px;
        border: 0;
        background-color: $blue;
        border-radius: 100%;
        right: 7px;
        bottom: 7px;
        position: absolute;
        svg {
            padding: 0;
            height: 20px;
            width: 18px;
            fill: $white;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            path {
                fill: $white
            }
        }
    }
    textarea {
        width: calc(100% - 105px);
        margin: auto;
        padding: 0;
        padding-top: 0px;
        padding-bottom: 0px;
        left: 0;
        top: 14px;
        position: absolute;
        border: none !important;
        z-index: -1;
        left: 0;
        right: 0;
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none;
        /*remove the resize handle on the bottom right*/
    }
}
.chatField {
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 1em;
    &__avatar {
        position: absolute;
        bottom: 0;
        background-color: $blue;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        svg {
            width: 100%;
            height: 30px;
            padding: 5px;
            fill: $white;
        }
        &--user {
            right: 0;
        }
        &--agent {
            left: 0;
        }
    }
    &__bubble {
        width: calc(100% - 40px);
        padding: 15px;
        border-radius: 16px;
        &--user {
            background-color: $grey;
            border-bottom-right-radius: 0;
        }
        &--agent {
            margin-left: auto;
            border-bottom-left-radius: 0;
            color: $white;
            background-color: $blue;
        }
    }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.pop-enter-active {
    transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-leave-active {
    transition: all .4s ease;
}
.pop-enter,
.pop-leave-to {
    //opacity: 0;
    transform: scale(0.8)
}
</style>
