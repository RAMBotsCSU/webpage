<template>
 <v-card color="white" elevation="2" class="pa-8 ma-4">

    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col :cols="this.mobile ? 12 : 8">
            <v-card max-width="1500" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-0">
                    Resources:
                </p>
                <v-divider></v-divider>

                <v-list-item class="mt-8">
                    <v-list-item-content>
                        <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-h5">James Bruton's openDogV3</a>
                        <v-list-item-subtitle class="ml-4">Source of original mechanical design</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item class="mt-0">
                    <v-list-item-content>
                        <a href="https://github.com/RAMBotsCSU"
                           class="text-decoration-none text-h5">RamBOTs GitHub Organization</a>
                           <a href="https://github.com/RAMBotsCSU/deployment"
                           class="text-decoration-none text-p1 ml-4 mt-2">Deployment repository</a>
                            <a href="https://github.com/RAMBotsCSU/testing"
                           class="text-decoration-none text-p1 ml-4 mt-2">Testing repository</a>
                           <a href="https://github.com/RAMBotsCSU/machine_learning"
                           class="text-decoration-none text-p1 ml-4 mt-2">Machine Learning repository</a>
                           <a href="https://github.com/RAMBotsCSU/source"
                           class="text-decoration-none text-p1 ml-4 mt-2">Source repository</a>
                           <a href="https://github.com/RAMBotsCSU/outreach"
                           class="text-decoration-none text-p1 ml-4 mt-2">Outreach repository</a>
                           <a href="https://github.com/RAMBotsCSU/webpage"
                           class="text-decoration-none text-p1 ml-4 mt-2">Webpage repository</a>
                    </v-list-item-content>
                </v-list-item>
                
                <v-list-item>
                    <v-list-item-content>
                        <a href="Year_3_RamBots_Project_Plan.pdf" open
                           class="text-decoration-none text-h5">Year 3's Project Plan</a>
                           <v-list-item-subtitle class="ml-4">Preliminary planning (9/22/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="Year_2_RamBots_Project_Plan.pdf" open
                           class="text-decoration-none text-h5">Year 2's Project Plan</a>
                           <v-list-item-subtitle class="ml-4">Preliminary planning (9/13/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="Year_2_RamBots_Mid_Report.pdf" open
                           class="text-decoration-none text-h5">Year 2's Project Mid Report</a>
                           <v-list-item-subtitle class="ml-4">1st semester progress report (12/10/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>


            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


                
</v-card>

</template>

<script>

    export default {

        mounted() {
            this.mobile = window.innerWidth <= 760
        },
        data() {
            return {
                mobile: false,
                logo: require('../assets/gallery/chassis.jpg'),

            }
        },
    }</script>
