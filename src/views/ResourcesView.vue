<template>



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
                           <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-p1 ml-4 mt-2">Testing repository</a>
                            <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-p1 ml-4 mt-2">Locomotion repository</a>
                           <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-p1 ml-4 mt-2">Webpage repository</a>
                           <a href="https://github.com/eppercin/rambots_website"
                           class="text-decoration-none text-p1 ml-4 mt-2">Machine learning repository</a>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="RamBots_Project_Plan.pdf" open
                           class="text-decoration-none text-h5">Project Plan</a>
                           <v-list-item-subtitle class="ml-4">Preliminary planning (9/13/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="RamBots_Mid_Report.pdf" open
                           class="text-decoration-none text-h5">Project Mid Report</a>
                           <v-list-item-subtitle class="ml-4">1st semester progress report (12/10/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <a href="RamBots_Mid_Report.pdf" download
                           class="text-decoration-none text-h5">Project Mid Presentation</a>
                           <v-list-item-subtitle class="ml-4">1st semester presentation (12/10/2022)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

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
