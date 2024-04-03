<template>


    <v-container>
        
        <v-row class="mt-4">
            <v-col :cols="this.mobile ? 12 : 5">
                <v-card class=" pa-2 mt-12 justify-center" outlined color="transparent" height="100%">
                    <div class="text-center">
                        <v-row>
                            <v-col cols="1"><v-spacer></v-spacer></v-col>
                            <v-col cols="10">
                                <v-img width="600px" class="mobile ? mt-n16 : mt-6" :src="require('../assets/RamLogoText.png')"></v-img>

                                <v-row >
                                    <v-spacer></v-spacer>
                                <v-btn text class="mt-0"
                                       href="https://projects-web.engr.colostate.edu/ece-sr-design/AY23/outreach/"
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
                                       href="https://www.youtube.com/channel/UC3K_Uz-jJc2ynTyCAwXKSBg"
                                       target="_blank">
                                    Visit us on Youtube<v-icon class="ml-8" size="50" color="red" right>
                                        mdi-youtube
                                    </v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                            <v-row class="mt-6">
                                <v-spacer></v-spacer>
                                <v-btn text class="mt-0"
                                       href="https://github.com/RAMBotsCSU"
                                       target="_blank">
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
                    <v-carousel :height="this.mobile ? 300 : 700" width="500px">
                        <v-carousel-item reverse-transition="fade-transition"
                                         transition="fade-transition"
                                         v-for="(item, i) in items"
                                         :key="i">
                            <v-img :src="item.src" contain></v-img>
                        </v-carousel-item>

                    </v-carousel>
                </v-card>
            </v-col>


        </v-row>

        <v-row>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
            <v-col :cols="this.mobile ? 12 : 8">
                <v-card  outlined  class="mb-4">
                    <v-card-text>
                        <div class="text-h3 text--primary mt-0">About Us</div>
                        <p class="text-h4 text--primary mt-4">
                            Project Summary
                        </p>
                        <p>
                            RamBOTs is a multidisciplinary senior design team composed of electrical, computer, and mechanical engineers. In this project, we plan to learn about robotics through the development of a quadrupedal robot and integrate newer technologies that are currently changing robotics. We will work with different aspects of engineering such as machine learning, kinematics, motor control, computer aided design (CAD), and power systems to create a robot that will be able to navigate an unknown environment to follow a thrown object. The team also aims to demonstrate the pieces that make up the robot in a way that's accessible and exciting for different age groups in tandem with Electrical and Computer Engineering (ECE) Outreach.
                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Background
                        </p>
                        <p>
                            The primary objective of this project, consistent with previous years, is to create an educational and outreach tool in the form of an open-source quadrupedal robot. RamBOTs is an ongoing multi-year project now entering its third year, with significant progress already achieved.
                        </p>
                        <p>
                            In the initial year, the focus was on harnessing machine learning to identify objects using a camera. That team initially adopted the openDog V2 project by James Bruton and began the process of replicating it. However, during that year, a new iteration called openDog V3 was released, which briefly shifted their course. Despite this, by the end of the first year, they had successfully 3D printed several essential robot components.
                        </p>
                        <p>
                            The second-year team continued from where the previous team left off, completing the 3D printing phase and moving on to assemble the robot's electronics, software, and hardware. By the close of the second year, the robot could walk, perform push ups, and engage in various activities.

                        </p>
                        <p class="text-h4 text--primary  mt-12">
                            Constraints
                        </p>
                        <p>
                            Currently, the robot faces significant reliability issues, which have become a primary focus for this year's efforts. In addition to enhancing reliability, we aim to make the robot a more engaging engineering tool. To achieve this, we plan to enable the robot to navigate an uneven concrete surface to play fetch - allowing users to throw a ball for the robot to follow. This entails teaching the robot to maneuver autonomously, with a strong emphasis on safety through obstacle detection to prevent collisions. Object detection and tracking will also be pivotal this year, enabling the robot to locate the ball accurately. Furthermore, as a stretch goal, we hope to implement voice commands to offer users an interactive way to engage with the robot dog.
                        </p>
                        <p>
                            These tasks are challenging, so we have a range of supporting tasks, including documentation, simulation, and stress tests, which are equally essential. These tasks will not only enhance the robot's functionality but also provide valuable insights for the next year's team as they embark on further improvements.
                        </p>
                        <p class="text-h4 text--primary mt-12">
                            Goals
                        </p>
                        <p>
                            The primary objectives of the RamBOTs project can be categorized into short, medium, and long-term goals. These objectives are designed to guide the project's development and measure its success using SMART criteria: Specific, Measurable, Achievable, Realistic, and Timely.
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Short-Term Goals (Complete in Less Than A Month) 
                        </div>
                        <p class="mt-2">
                            In the initial phase, the team's objectives are to familiarize themselves with the project's history and get the robot up and running for basic functionality. This includes ensuring the robot can perform standard procedures like those during last year’s E-Days and move each leg individually for stress testing. Additionally, the mechanical team plans to build a fifth leg for testing and a stand for the robot. This leg will be useful in understanding specific kinematics of the robot and will help the team with later goal items such as fine tuning movement (see Medium-Term Goals). For the electrical and computer engineering teams, the goal is to enhance the robot's recognition abilities by understanding the existing code, training a machine learning algorithm, and implementing a LiDAR sensor to detect objects within 1 foot. The team would also like to address some safety issues, such as exposed wire connections, accessibility and treatment of the batteries, and lack of safety procedures. 
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Medium Term Goals (Complete Within the First Semester)
                        </div>
                        <p class="mt-2">
                            In the medium term, the project aims to make progress towards more advanced capabilities. This includes getting the robot to walk on an uneven concrete surface, and quantifying its performance limits. The goal is to have the robot run for 20 minutes at a time and consistently operate on a 5 percent grade. Mechanical engineering will focus on simulation and stress testing of the legs which includes having a physical leg model for testing as well as a versatile Finite Element Analysis (FEA) simulation model. FEA simulation will be considered complete when the full model (as well as individual components of interest) have accessible and editable project files with clearly defined attributes such as tensile, shear and compression strengths. Meanwhile, the computer and electrical engineering teams will work on object recognition and tracking (increasing the size of our training set for specific objects), measuring the amount of current going to each motor, and self-tests for motors and ODESCs. Safety reviews and documentation of wiring are also planned.
                        </p>
                            
                        <div class="text-h5 text--primary mt-10">
                            Long-Term Goals (Complete by E-Days/End of 2nd Semester)
                        </div>
                        <p class="mt-2">
                            By E-Days, the team envisions the robot being able to play fetch, follow a person using various commands, and increase bystander engagement through enhancing the interactive aspects of the project. The mechanical engineering team plans to increase the reliability and robustness of the base to ensure the robots mechanical functionality at outreach events, while the electrical engineering team aims for comprehensive documentation, safety reviews, and complete schematic diagrams. These documents will ensure a smooth transition to the next team that works on the project. The computer engineering team will ensure the safety of bystanders and the robot by using obstacle detection. It is important to note that obstacle detection is not intended to be used for navigation purposes. The software should successfully follow a specified ‘fetching’ object, while retrieval of the object is not initially planned due to its inherent mechanical complexities. Lastly, by E-Days everyone on the team should be able to explain the major aspects of the robot encompassing the mechanical systems, electronic integrations, software stack, and the synergy of the whole system.
                        </p>

                        <div class="text-h5 text--primary mt-10">
                            Stretch Goals (Goals to be Added if All Other Goals are completed)
                        </div>
                        <p class="mt-2">
                            Stretch goals for the project includes achieving more advanced capabilities like having a slower walk cycle (longer time between footfalls) and picking up and returning a thrown ball. Additionally, there is a goal to have the robot dance and walk around at various school events like a basketball game. The purpose of going to events would be to raise awareness for the ECE Outreach program and possibly fundraise. If time is allotted, we would also like to investigate the ability for the robot to respond to visual hand movements or voice commands to direct it to do different operations. 
                        </p>

                    </v-card-text>

                </v-card>
            </v-col>
            <v-col cols="2">
                <v-spacer></v-spacer>
            </v-col>
        </v-row>



        <v-row class="text-center">
            <v-col cols="12">




            </v-col>

            <v-col>

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
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY21/outreach/",
                items: [
                    {
                        src: require('../assets/gallery/rambot_standing.jpg'),
                    },
                    {
                        src: require('../assets/gallery/assembling_the_bot.jpg'),
                    },
                    {
                        src: require('../assets/gallery/oscilloscope_with_EIR.jpg'),
                    },
                    {
                        src: require('../assets/year3/year3_full.jpg'),
                    },

                ],
            }
        },
    }
</script>
