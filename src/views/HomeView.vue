<template>

    <v-container>

        <v-row class="mt-4">
            <v-col :cols="this.mobile ? 12 : 5">
                <v-card class=" pa-2 mt-12 justify-center" outlined color="transparent" height="100%">
                    <div class="text-center">
                        <v-row>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                            <v-col cols="10">
                                <v-img width="600px" class="mobile ? mt-n16 : mt-6"
                                    :src="require('../assets/RamLogoText.png')"></v-img>

                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-btn text class="mt-0"
                                        href="https://projects-web.engr.colostate.edu/ece-sr-design/AY24/outreach/"
                                        target="_blank">
                                        An ECE Outreach Project<v-icon right>
                                            mdi-link
                                        </v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-row>
                                <v-row class="mt-6">
                                    <v-spacer></v-spacer>
                                    <v-btn text class="mt-0"
                                        href="https://www.youtube.com/channel/UC3K_Uz-jJc2ynTyCAwXKSBg" target="_blank">
                                        Visit us on Youtube<v-icon class="ml-8" size="50" color="red" right>
                                            mdi-youtube
                                        </v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-row>
                                <v-row class="mt-6">
                                    <v-spacer></v-spacer>
                                    <v-btn text class="mt-0" href="https://github.com/RAMBotsCSU" target="_blank">
                                        Visit us on Github<v-icon class="ml-11" size="50" right>
                                            mdi-github
                                        </v-icon>
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-row>

                            </v-col>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                        </v-row>

                    </div>
                </v-card>
            </v-col>
            <v-col :cols="this.mobile ? 12 : 7">
                <v-card class="pa-2" outlined color="transparent">
                    <v-carousel :height="this.mobile ? 300 : 513" width="500px">
                        <v-carousel-item reverse-transition="fade-transition" transition="fade-transition"
                            v-for="(item, i) in items" :key="i">
                            <v-img :src="item.src" contain></v-img>
                        </v-carousel-item>

                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>

        <v-row class="justify-center mt-8">
            <v-col :cols="this.mobile ? 12 : 8">
                <v-card outlined class="mb-4">
                    <v-card-text>
                        <div class="text-h3 text--primary mt-0">About Us</div>
                        <p class="text-h4 text--primary mt-4">
                            Project Summary
                        </p>
                        <p>
                            RamBOTs is a multidisciplinary senior design team composed of electrical, computer, and
                            mechanical engineers. In this project, we plan to learn about robotics through the
                            development of a quadrupedal robot and integrate newer technologies that are currently
                            changing robotics. We will work with different aspects of engineering such as machine
                            learning, kinematics, motor control, computer aided design (CAD), and power systems to
                            create a robot that will be able to navigate an unknown environment to follow a thrown
                            object. The team also aims to demonstrate the pieces that make up the robot in a way that's
                            accessible and exciting for different age groups in tandem with Electrical and Computer
                            Engineering (ECE) Outreach.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Background
                        </p>
                        <p>
                            The primary objective of this project, consistent with previous years, is to create an
                            educational and outreach tool in the form of an open-source quadrupedal robot. RamBOTs is an
                            ongoing multi-year project now entering its third year, with significant progress already
                            achieved.
                        </p>
                        <p>
                            In the initial year, the focus was on harnessing machine learning to identify objects using
                            a camera. That team initially adopted the openDog V2 project by James Bruton and began the
                            process of replicating it. However, during that year, a new iteration called openDog V3 was
                            released, which briefly shifted their course. Despite this, by the end of the first year,
                            they had successfully 3D printed several essential robot components.
                        </p>
                        <p>
                            The second-year team continued from where the previous team left off, completing the 3D
                            printing phase and moving on to assemble the robot's electronics, software, and hardware. By
                            the close of the second year, the robot could walk, perform push ups, and engage in various
                            activities.

                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Constraints
                        </p>
                        <p>
                            Currently, the robot faces significant reliability issues, which have become a primary focus
                            for this year's efforts. In addition to enhancing reliability, we aim to make the robot a
                            more engaging engineering tool. To achieve this, we plan to enable the robot to navigate an
                            uneven concrete surface to play fetch - allowing users to throw a ball for the robot to
                            follow. This entails teaching the robot to maneuver autonomously, with a strong emphasis on
                            safety through obstacle detection to prevent collisions. Object detection and tracking will
                            also be pivotal this year, enabling the robot to locate the ball accurately. Furthermore, as
                            a stretch goal, we hope to implement voice commands to offer users an interactive way to
                            engage with the robot dog.
                        </p>
                        <p>
                            These tasks are challenging, so we have a range of supporting tasks, including
                            documentation, simulation, and stress tests, which are equally essential. These tasks will
                            not only enhance the robot's functionality but also provide valuable insights for the next
                            year's team as they embark on further improvements.
                        </p>
                        <p class="text-h4 text--primary mt-12">
                            Goals
                        </p>
                        <p>
                            The primary objectives of the RamBOTs project can be categorized into short, medium, and
                            long-term goals. These objectives are designed to guide the project's development and
                            measure its success using SMART criteria: Specific, Measurable, Achievable, Realistic, and
                            Timely.
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Short-Term Goals (Complete in Less Than A Month)
                        </div>
                        <p class="mt-2">
                            Coming soon...
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Medium Term Goals (Complete Within the First Semester)
                        </div>
                        <p class="mt-2">
                            Coming soon...
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Long-Term Goals (Complete by E-Days/End of 2nd Semester)
                        </div>
                        <p class="mt-2">
                            Coming soon...
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Stretch Goals (Goals to be Added if All Other Goals are completed)
                        </div>
                        <p class="mt-2">
                            Coming soon...
                        </p>

                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>
export default {
    mounted() {
        this.mobile = window.innerWidth <= 760
    },
    data() {
        return {
            logo: require('../assets/gallery/chassis.jpg'),
            youtube: require('../assets/youtube_logo.png'),
            mobile: false,
            url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY23/outreach/",
            items: [
                {
                    src: require('../assets/AY24/team_full.png'),
                    },
                ],
            }
        },
    }
</script>
