<template>
<div>
    <header>
        <b-container>
            <user style="height: 40px; vertical-align: middle" class="d-inline-block mr-1"/>
            <div class="d-inline-block" style="vertical-align: middle">
                <p class="mb-0">Hi, {{$store.getters.client.first_name}}</p>
                <p class="mb-0">ClientRef: update me </p>
            </div>
        </b-container>
    </header>
    <main>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-card header="Client info" class="mb-3">
                        <b-row>
                            <b-col cols="12" class="text-center mb-3">
                                <p class="mb-0">Status</p>
                                <h3>I&E completed</h3>
                            </b-col>
                            <b-col cols="6" class="text-center">
                                <p class="mb-0">Next payment date</p>
                                <h4>04/03/2021</h4>
                            </b-col>
                            <b-col cols="6" class="text-center">
                                <p class="mb-0">Review date</p>
                                <h4>04/03/2021</h4>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col cols="6" class="mb-4">
                    <b-card class="text-center" width="50%">
                        <p class="mb-0" style="min-height:50px">Monthly payment</p>
                        <h4>£123</h4>
                    </b-card>
                </b-col>
                <b-col cols="6" class="mb-4">
                    <b-card class="text-center">
                        <p class="mb-0" style="min-height:50px">New monthly payment</p>
                        <h4>£123</h4>
                    </b-card>
                </b-col>
                <b-col cols="12">
                    <b-card no-body class="px-1">
                        <b-list-group flush>
                            <b-list-group-item>
                                <b-row>
                                    <b-col>Review type</b-col>
                                    <b-col><b>Annual Review</b></b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b-row>
                                    <b-col cols="6">
                                        Review year
                                    </b-col>
                                    <b-col cols="6">
                                        <b>1</b>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                            <b-list-group-item>
                                <b-row>
                                    <b-col cols="6">
                                        Arrears
                                    </b-col>
                                    <b-col cols="6">
                                        <b>0</b>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </main>
</div>
</template>
<script>
import user from "~/static/img/user.svg?inline";
export default {
    components: {
        user
    }
}
</script>
