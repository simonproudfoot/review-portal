<template>
<div>
    <header>
        <b-container>
            <b-row>
                <b-col cols="3">
                    <b-img src="img/user.svg" center fluid width="40"></b-img>
                </b-col>
                <b-col cols="9">
                    <p class="mb-0">Hi, {{$store.getters.client.username}}</p>
                    <p class="mb-0">ClientRef: {{$store.getters.client.reference}}</p>
                </b-col>
            </b-row>
        </b-container>
    </header>
    <main>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-card header="Client info" class="mb-4">
                        <b-row>
                            <b-col cols="12" class="text-center mb-5">
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
