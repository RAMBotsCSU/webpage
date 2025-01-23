<template>


    <v-card color="white" elevation="2" class="pa-8 ma-4">

        <p class="font-weight-medium text-h4 text--primary mt-4 text-center">Testing</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in testing"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="text-white align-end"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

        <p class="font-weight-medium text-h4 text--primary mt-4 text-center">Construction</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in construction"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="text-white align-end"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>



        <p class="font-weight-medium text-h4 text--primary mt-12 text-center">Events</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in events"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="text-white align-end"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>


        <p class="font-weight-medium text-h4 text--primary mt-12 text-center">Team</p>
        <v-row class="text-center  mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in team"
                   :key="card.title"
                  :cols="mobile ? 12 : 6">

                <v-card>
                    <v-img
                           :src="card.src"
                           class="text-white align-end"
                           :height="mobile ? 300 : 600"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
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
                testing: [
                    { title: '1st Walk Test', src: require('../assets/year3/gallery/testing/firstWalkTest.jpg'), flex: 4 },
                    { title: 'Measuring for New Stand', src: require('../assets/year3/gallery/testing/measurements.jpg'), flex: 4 },
                    { title: 'Testing the 5th Leg', src: require('../assets/year3/gallery/testing/testing5thLeg.jpeg'), flex: 4 }
                ],
                construction: [
                    { title: 'Disassembled', src: require('../assets/year3/gallery/construction/dissassembled.jpg'), flex: 4 },
                    { title: 'Fixing a Leg', src: require('../assets/year3/gallery/construction/fixingLeg.jpg'), flex: 4 },
                    { title: 'Fifth Leg Layout', src: require('../assets/year3/gallery/construction/5thLeg.jpg'), flex: 4 },
                    { title: 'Coding the Tennis Ball Tracking', src: require('../assets/year3/gallery/construction/mlCoding.jpg'), flex: 4 }
                ],
                events: [
                    { title: 'Sparky meeting Amy Parsons', src: require('../assets/year3/gallery/events/amyParsons.jpg'), flex: 4 },
                    { title: 'Sparky meeting Cam the Ram', src: require('../assets/year3/gallery/events/sparkyCam.jpg'), flex: 4 },
                    { title: 'Demonstration', src: require('../assets/year3/gallery/events/Demonstrate.jpg'), flex: 4 },
                    { title: 'ECE Nights', src: require('../assets/year3/gallery/events/ECENight.jpeg'), flex:4 }
                ],
                team: [
                    { title: 'Year 3 Team Seniors', src: require('../assets/year3/team/year3_seniors.jpg'), flex: 6 },
                    { title: 'Year 3 Full Team', src: require('../assets/year3/team/year3_full.jpg'), flex: 6 },
                ],
            }
        },
    }</script>
