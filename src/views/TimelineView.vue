<template>



    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col :cols="this.mobile ? 12 : 8">
            <v-card max-width="1800" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-4">
                    Project Timeline
                </p>
                <p class="text-h4 text--primary mt-4">
                    2023-2024 Team's Semester 1 Timeline
                </p>
                <v-img contains class="ma-4" :src="require('../assets/year3/Year_3_Timeline_Sem1.png')"></v-img>
                <p class="text-h4 text--primary mt-4">
                    2023-2024 Team's Semester 2 Timeline
                </p>
                <v-img contains class="ma-4" :src="require('../assets/year3/Year_3_Timeline_Sem2.png')"></v-img>
                <p>
                    The 2023-2024 team intends to first improve the startup process of the robot and ensure that it works properly and more reliably compared to last year. We plan to build upon the design by creating a way for it to walk on uneven surfaces and have better balance overall. This year’s team also has three mechanical engineers compared to the two that were involved last year, which will allow for more reevaluation or even reconstruction, as a few of the parts have become worn over the years.
                </p>
                <p>
                    Some of these items include building a fifth leg for testing, object detection and tracking, collision avoidance using LiDAR, create a new stand, improve the codespace for the robot, and complete teting and simulations of major components.
                </p>
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
