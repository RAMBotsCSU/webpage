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
                           class="white--text align-end"
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
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.05), rgba(0,0,0,.2)">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>



        <p class="font-weight-medium text-h4 text--primary mt-12 text-center">Videos</p>
        <v-row class="text-center mb-12">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in art"
                   :key="card.title"
                   :cols="mobile ? 12 : 4">

                <v-card>
                    <v-img :src="card.src"
                           class="white--text align-end">
                        <v-card-title class=" black--text" v-text="card.title"></v-card-title>
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
                           class="white--text align-end"
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
                    { title: 'Preparing to walk', src: require('../assets/gallery/preparing_to_walk.jpg'), flex: 4 },
                    { title: 'Walking on the stand', src: require('../assets/gallery/walking_on_stand.jpg'), flex: 4 },
                    { title: 'Bot standing', src: require('../assets/gallery/rambot_standing.jpg'), flex: 4 },    
                    { title: 'Working on the robot', src: require('../assets/gallery/assembling_the_bot.jpg'), flex: 4 },
                    { title: 'Using the oscilloscope', src: require('../assets/gallery/oscilloscope_with_EIR.jpg'), flex: 4 },
                    { title: 'Leg programming setup', src: require('../assets/gallery/leg_programming_setup.jpg'), flex: 4 },            
                ],
                construction: [
                    { title: 'Chassis side view', src: require('../assets/gallery/chassis.jpg'), flex: 4 },
                    { title: 'Chassis diagonal view', src: require('../assets/gallery/chassis2.jpg'), flex: 4 },
                    { title: 'Assembling the robot', src: require('../assets/gallery/robot_assembly.jpg'), flex: 4 },
                    { title: 'Programming the Pi', src: require('../assets/gallery/pi_programming.jpg'), flex: 4 },
                    { title: 'Disassembling a leg for testing', src: require('../assets/gallery/leg_testing.jpg'), flex: 4 },
                    { title: 'Meeting with EIR', src: require('../assets/gallery/eir_meeting.jpg'), flex: 4 },             
                ],
                vidoes: [
                    { title: 'Logos by Gwyn Tari', src: require('../assets/gallery/RamLogoLarge.png'), flex: 4 },
                    { title: ' ', src: require('../assets/gallery/RamLogoMed.png'), flex: 4 },
                    { title: '', src: require('../assets/gallery/RamLogoSmall.png'), flex: 4 },
                ],
                team: [
                    { title: 'Year 3 Team Seniors', src: require('../assets/year3/team/year3_seniors.jpg'), flex: 6 },
                    { title: 'Year 3 Full Team', src: require('../assets/year3/team/year3_full.jpg'), flex: 6 },
                ],
            }
        },
    }</script>
