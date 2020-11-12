<template>
<div>
    <header>
        <b-container>
            <review style="height: 40px; vertical-align: middle" class="d-inline-block mr-1" />
            <div class="d-inline-block" style="vertical-align: middle">
                <p class="mb-0"><b>Your details</b></p>
            </div>
        </b-container>
    </header>
    <main>
        <b-container>
            <b-card class="mb-4" no-body>
                <b-card-body>
                    <b-row no-gutters>
                        <b-col xs="8">
                            <p class="mb-0"><b>Has you income changed?</b></p>
                        </b-col>
                        <b-col xs="4" class="text-right">
                            <ToggleButton class="mb-0" color="#00a7bd" :sync="true" :height="40" :width="90" :font-size="15" v-model="boxIncome" :labels="{checked: 'Yes', unchecked: 'No'}">
                            </ToggleButton>
                        </b-col>
                    </b-row>
                </b-card-body>
                <div v-if="boxIncome">
                    <div class="bg-light">
                        <b-card-body class="py-2">
                            Client current salary; <b>£1001.00</b>
                        </b-card-body>
                    </div>
                    <b-card-body>
                        <label for="salary" class="pb-0 mb-0"><b>New Client salary</b></label>
                        <b-input-group size="sm" prepend="£" class="bg-white input-underlined">
                            <b-form-input placeholder="Enter new salary"></b-form-input>
                        </b-input-group>
                        <b-form-group class="mt-4 mb-0" label="Is this on your bank statement?">
                            <b-form-radio-group :options="options" name="radios-stacked" stacked></b-form-radio-group>
                        </b-form-group>
                    </b-card-body>
                    <div class="bg-light mt-3">
                        <b-card-body class="py-2">
                            Partner current salary; <b>£1001.00</b>
                        </b-card-body>
                    </div>
                    <b-card-body>
                        <label for="salary" class="pb-0 mb-0"><b>New partner salary</b></label>
                        <b-input-group size="sm" prepend="£" class="bg-white input-underlined">
                            <b-form-input placeholder="Enter new partner salary"></b-form-input>
                        </b-input-group>
                        <b-form-group class="mt-4 mb-0" label="Is this on your bank statement?">
                            <b-form-radio-group :options="options" name="radios-stacked" stacked></b-form-radio-group>
                        </b-form-group>
                    </b-card-body>
                </div>
            </b-card>
            <b-card class="mb-4">
                <b-row no-gutters>
                    <b-col xs="8">
                        <p class="mb-0"><b>Has your Expanditure changed?</b></p>
                    </b-col>
                    <b-col xs="4" class="text-right">
                        <ToggleButton class="mb-0" color="#00a7bd" :sync="true" :height="40" :width="90" :font-size="15" v-model="details.changedExpenditure" :labels="{checked: 'Yes', unchecked: 'No'}">
                        </ToggleButton>
                    </b-col>
                </b-row>
            </b-card>
            <b-card class="mb-4">
                <b-row no-gutters>
                    <b-col xs="8">
                        <p class="mb-0"><b>Has your Expanditure changed?</b></p>
                    </b-col>
                    <b-col xs="4" class="text-right">
                        <ToggleButton class="mb-0" color="#00a7bd" :sync="true" :height="40" :width="90" :font-size="15" v-model="details.updatedIandE" :labels="{checked: 'Yes', unchecked: 'No'}">
                        </ToggleButton>
                    </b-col>
                </b-row>
            </b-card>
            <b-button block pill v-if="changed" @click="saveChanges">Confirm my change</b-button>
        </b-container>
    </main>
</div>
</template>
<script>
import review from "~/static/img/review.svg?inline";
export default {
    data: function () {
        return {
            changed: false,
            boxIncome: false,
            boxExpenditure: false,
            boxIandE: false,
            options: [{
                    text: 'Yes',
                    value: 'yes'
                },
                {
                    text: 'No',
                    value: 'no'
                },
            ]
        }
    },
    components: {
        review
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
