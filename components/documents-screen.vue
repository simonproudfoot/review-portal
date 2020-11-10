<template>
<div>
    <header>
        <b-container>
            <b-row>
                <b-col cols="3">
                    <b-img src="img/documents.svg" center fluid width="40"></b-img>
                </b-col>
                <b-col cols="9">
                    <p class="mb-0"><b>Your documents</b></p>
                </b-col>
            </b-row>
        </b-container>
    </header>
    <main>
        <b-container>
            <!-- MISC -->
            <b-card class="mb-4 expandCard" no-body>
                <b-row no-gutters>
                    <b-col @click="expMisc=!expMisc">
                        <div class="px-3 py-3">
                            <p class="mb-0"><b>Misc</b></p>
                            <p class="mb-0">{{$store.getters.documents.misc.length}} files uploaded</p>
                        </div>
                    </b-col>
                    <b-col cols="2" @click="expMisc=!expMisc" :class="!expMisc ? 'bg-light' : null" class="expandButton">
                        <iconPlus v-if="!expMisc" slot="initial" width="50" class="px-2" />
                        <iconMinus v-else width="50" class="px-2" />
                    </b-col>
                 
                    <b-col cols="12" v-show="expMisc">
                        <div class="px-3 py-3">
                            <ul>
                                <li v-for="(file, i) in filesMisc" :key="i">{{file.name}}
                                    <small>
                                        <pre>{{file}}</pre>
                                    </small>
                                </li>
                            </ul>
                            <file-upload style="width: 100%" v-model="filesMisc" :multiple="true" @input-filter="inputFilter" @input-file="inputFile">
                                <b-button pill block variant="accent">Upload document <b-icon class="ml-2" icon="cloud-upload" aria-hidden="true"></b-icon>
                                </b-button>
                            </file-upload>
                            <b-row class="mt-3" v-for="(file, i) in $store.getters.documents.misc" :key="i">
                                <b-col cols="6">
                                    <a :href="file.url">{{file.title}}</a>
                                </b-col>
                                <b-col cols="6" class="text-right">
                                    {{file.uploaded}}
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                
                </b-row>
            </b-card>
            <!-- Parter -->
            <b-card class="mb-4 expandCard" no-body>
                <b-row no-gutters>
                    <b-col @click="expPartner=!expPartner">
                        <div class="px-3 py-3">
                            <p class="mb-0"><b>Partner salary</b></p>
                            <p class="mb-0">{{$store.getters.documents.misc.length}} files uploaded</p>
                            <p v-if="$store.getters.documents.misc.length < 3" class="text-danger mb-0">3 months' payslips needed</p>
                        </div>
                    </b-col>
                    <b-col cols="2" @click="expPartner=!expPartner" :class="!expPartner ? 'bg-light' : null" class="expandButton">
                        <iconPlus v-if="!expPartner" slot="initial" width="50" class="px-2" />
                        <iconMinus v-else width="50" class="px-2" />
                    </b-col>
                    <b-col cols="12" v-show="expPartner">
                        <div class="px-3 py-3">
                            <file-upload style="width: 100%" v-model="filesPartner" :multiple="true" @input-filter="inputFilter" @input-file="inputFile">
                                <b-button pill block variant="accent">Upload document <b-icon class="ml-2" icon="cloud-upload" aria-hidden="true"></b-icon>
                                </b-button>
                            </file-upload>
                            <b-row class="mt-3" v-for="(file, i) in $store.getters.documents.parterSalary" :key="i">
                                <b-col cols="6">
                                    <a :href="file.url">{{file.title}}</a>
                                </b-col>
                                <b-col cols="6" class="text-right">
                                    {{file.uploaded}}
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
            <!-- bank -->
            <b-card class="mb-4 expandCard" no-body>
                <b-row no-gutters>
                    <b-col @click="expBankStatement=!expBankStatement">
                        <div class="px-3 py-3">
                            <p class="mb-0"><b>Bank statement</b></p>
                            <p class="mb-0">{{$store.getters.documents.bankStatement.length}} files uploaded</p>
                            <p v-if="$store.getters.documents.bankStatement.length < 3" class="text-danger mb-0">Last 3 months' statements needed</p>
                        </div>
                    </b-col>
                    <b-col cols="2" @click="expBankStatement=!expBankStatement" :class="!expBankStatement ? 'bg-light' : null" class="expandButton">
                        <iconPlus v-if="!expBankStatement" slot="initial" width="50" class="px-2" />
                        <iconMinus v-else width="50" class="px-2" />
                    </b-col>
                    <b-col cols="12" v-show="expBankStatement">
                        <div class="px-3 py-3">
                        <file-upload style="width: 100%" v-model="filesBankStatment" :multiple="true" @input-filter="inputFilter" @input-file="inputFile">
                                <b-button pill block variant="accent">Upload document <b-icon class="ml-2" icon="cloud-upload" aria-hidden="true"></b-icon>
                                </b-button>
                            </file-upload>
                            <b-row class="mt-3" v-for="(file, i) in $store.getters.documents.bankStatement" :key="i">
                                <b-col cols="6">
                                    <a :href="file.url">{{file.title}}</a>
                                </b-col>
                                <b-col cols="6" class="text-right">
                                    {{file.uploaded}}
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
    </main>
</div>
</template>
<script>
import iconPlus from "~/static/img/plus.svg?inline";
import iconMinus from "~/static/img/minus.svg?inline";
export default {
    data: function () {
        return {
            changed: false,
            expMisc: true,
            expPartner: false,
            expBankStatement: false,
            filesMisc: [],
            filesPartner: [],
            filesBankStatment: [],
            size: {
                width: '100%',
                height: 50
            }
        }
    },
    components: {
        iconPlus,
        iconMinus
    },
    methods: {
        saveChanges() {
            this.changed = false
            this.$store.commit('set_details', this.$store.getters.details)
        },
        inputFile: function (newFile, oldFile) {
            // upload files
            if (newFile && oldFile && !newFile.active && oldFile.active) {
                // Get response data
                console.log('response', newFile.response)
                if (newFile.xhr) {
                    //  Get the response status code
                    console.log('status', newFile.xhr.status)
                }
            }
        },
        inputFilter: function (newFile, oldFile, prevent) {
            // SET SUPPORTED FILETYPES
            if (newFile && !oldFile) {
                // Filter non-image file
                if (!/\.(jpeg|jpe|jpg|gif|png|webp|pdf|doc|docx)$/i.test(newFile.name)) {
                    alert('Unsupported file type')
                    return prevent()
                }
            }
            // Create a blob field
            newFile.blob = ''
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
                newFile.blob = URL.createObjectURL(newFile.file)
            }
        }
    },
    computed: {
        details() {
            return this.$store.getters.details
        },
    },
    watch: {
        changed() {
            console.log('changed')
            this.$store.commit('set_prevent', true)
        },
        details: {
            deep: true,
            handler(oldval, newval) {
                this.changed = true
            }
        }
    },
    beforeDestroy() {
        if (this.changed) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                this.$store.commit('set_prevent', false)
            } else {
                this.$store.commit('set_prevent', false)
            }
        }
        //  this.changed == true ? this.saveModal = true : null
    }
}
</script>
<style lang="scss">
.expandCard {
    transition-duration: 0.9s;
}
.expandButton {
    position: relative;
    cursor: pointer;
    svg {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        margin-right: auto;
        margin-left: auto;
    }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-enter-active {
    transition: all .3s ease;
}
.slide-leave-active {
    transition: all .3s ease;
}
.slide-enter,
.slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
