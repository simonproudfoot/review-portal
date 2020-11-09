<template>
<div>
    <header>
        <b-container>
            <b-row>
                <b-col cols="3">
                    <b-img src="img/review.svg" center fluid width="40"></b-img>
                </b-col>
                <b-col cols="9">
                    <p class="mb-0"><b>Your details</b></p>
                </b-col>
            </b-row>
        </b-container>
    </header>
    <main>
        <b-container>
            <b-card class="mb-4">
                <b-row>
                    <b-col xs="8">
                        <p class="mb-0"><b>Has you income changed?</b></p>
                    </b-col>
                    <b-col xs="4" class="text-right">
                        <b-form-checkbox size="lg" switch v-model="details.changeIncome">
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </b-card>
            <b-card class="mb-4">
                <b-row>
                    <b-col xs="8">
                        <p class="mb-0"><b>Has your Expanditure changed?</b></p>
                    </b-col>
                    <b-col xs="4" class="text-right">
                        <b-form-checkbox size="lg" switch v-model="details.changedExpenditure">
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </b-card>
            <b-card class="mb-4">
                <b-row>
                    <b-col xs="8">
                        <p class="mb-0"><b>Has your Expanditure changed?</b></p>
                    </b-col>
                    <b-col xs="4" class="text-right">
                        <b-form-checkbox size="lg" switch v-model="details.updatedIandE">
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </b-card>
            <b-button block pill v-if="changed" @click="saveChanges">Confirm my change</b-button>
        </b-container>

    </main>
</div>
</template>
<script>
export default {
    data: function () {
        return {
            changed: false,
        }
    },
    methods: {
        saveChanges() {
            this.changed = false
            this.$store.commit('set_details', this.$store.getters.details)
        }
    },
    computed: {
        details() {
            return this.$store.getters.details
        },
    },
    watch: {
        changed(){
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
