<template>

 <v-card color="white" elevation="2" class="pa-8 ma-4">

<p class="font-weight-medium text-h4 text--primary mt-4 text-center">Video Gallery</p>
<v-row class="text-center mb-12">
    <v-col class="text-center d-flex justify-space">
            <video-embed elevation="1" src="https://youtu.be/lGujzt1vstc"></video-embed>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
            <video-embed elevation="1" src="https://youtu.be/Tb1ysV0rtFo"></video-embed>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
            <video-embed elevation="1" src="https://youtu.be/XzEjYknNzUg"></video-embed>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
            <video-embed elevation="1" src="https://www.youtube.com/watch?v=xvF6pBuC2yg"></video-embed>
    </v-col>
        <v-col class="text-center d-flex justify-space-around">
            <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
    </v-col>
    
</v-row>
<v-row class="text-center mb-12">
    <v-col class="text-center d-flex justify-space">
            <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
           <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
            <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
    </v-col>
    <v-col class="text-center d-flex justify-space-around">
            <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
    </v-col>
        <v-col class="text-center d-flex justify-space-around">
            <v-sheet color="grey lighten-5" elevation="1" height="150" width="300"></v-sheet>
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
                construction: [
                    { title: 'Chassis side view', src: require('../assets/gallery/chassis.jpg'), flex: 4 },
                    { title: 'Chassis diagonal view', src: require('../assets/gallery/chassis2.jpg'), flex: 4 },
                    { title: 'Assembling the robot', src: require('../assets/gallery/robot_assembly.jpg'), flex: 4 },
                    { title: 'Programming the Pi', src: require('../assets/gallery/pi_programming.jpg'), flex: 4 },
                    { title: 'Disassembling a leg for testing', src: require('../assets/gallery/leg_testing.jpg'), flex: 4 },
                    { title: 'Meeting with EIR', src: require('../assets/gallery/eir_meeting.jpg'), flex: 4 },
                ],
                art: [
                    { title: 'Logos by Gwyn Tari', src: require('../assets/gallery/RamLogoLarge.png'), flex: 4 },
                    { title: ' ', src: require('../assets/gallery/RamLogoMed.png'), flex: 4 },
                    { title: '', src: require('../assets/gallery/RamLogoSmall.png'), flex: 4 },
                ],
                team: [
                    { title: 'Team Seniors', src: require('../assets/team_seniors.jpg'), flex: 6 },
                    { title: 'Full Team', src: require('../assets/year2/team_full.jpg'), flex: 6 },

                ],
            }
        },
    }</script>
