<template>
    <v-container>
        <v-row>
            <v-col :cols="$vuetify.display.mobile ? 12 : 4">
                <v-card height="100%">
                    <div class="d-flex flex-column justify-center">
                        <img width="80%" class="mt-6 mx-auto" :src="require('@/assets/RamLogoText.png')" />

                        <v-btn href="https://projects-web.engr.colostate.edu/ece-sr-design/AY24/outreach/"
                            append-icon="mdi-link" variant="text" size="large" class="mx-8" target="_blank">
                            An ECE Outreach Project

                            <template v-slot:append>
                                <v-icon color="black"></v-icon>
                            </template>
                        </v-btn>

                        <v-btn href="https://www.youtube.com/channel/UC3K_Uz-jJc2ynTyCAwXKSBg" append-icon="mdi-youtube"
                            variant="text" size="large" class="mx-8" target="_blank">
                            Visit us on Youtube

                            <template v-slot:append>
                                <v-icon color="red"></v-icon>
                            </template>
                        </v-btn>

                        <v-btn href="https://github.com/RAMBotsCSU" append-icon="mdi-github" variant="text" size="large"
                            class="mx-8" target="_blank">
                            Visit us on Github

                            <template v-slot:append>
                                <v-icon color="black"></v-icon>
                            </template>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col :cols="$vuetify.display.mobile ? 12 : 8">
                <v-card>
                    <v-carousel :height="$vuetify.display.mobile ? 250 : 520" show-arrows="hover" cycle
                        hide-delimiter-background>
                        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col :cols="$vuetify.display.mobile ? 12 : 8">
                <v-card class="mb-4">
                    <v-card-text>
                        <div class="text-h3 text--primary mt-0">About Us</div>
                        <p class="text-h4 text--primary mt-4">Project Summary</p>
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
                        <p class="text-h4 text--primary mt-12">Background</p>
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
                        <p class="text-h4 text--primary mt-12">Constraints</p>
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
                        <p class="text-h4 text--primary mt-12">Goals</p>
                        <p>
                            The primary objectives of the RamBOTs project can be categorized into short, medium, and
                            long-term goals. These objectives are designed to guide the project's development and
                            measure its success using SMART criteria: Specific, Measurable, Achievable, Realistic, and
                            Timely.
                        </p>
                        <div class="text-h5 text--primary mt-10">Short-Term Goals (Complete in Less Than A Month)</div>
                        <p class="mt-2">Coming soon...</p>
                        <div class="text-h5 text--primary mt-10">Medium Term Goals (Complete Within the First Semester)
                        </div>
                        <p class="mt-2">Coming soon...</p>
                        <div class="text-h5 text--primary mt-10">Long-Term Goals (Complete by E-Days/End of 2nd
                            Semester)</div>
                        <p class="mt-2">Coming soon...</p>
                        <div class="text-h5 text--primary mt-10">Stretch Goals (Goals to be Added if All Other Goals are
                            completed)</div>
                        <p class="mt-2">Coming soon...</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: require('@/assets/AY24/team_full_spring.png'),
                },
                {
                    src: require('@/assets/AY24/team_full.png'),
                },
            ],
        };
    },
};
</script>
