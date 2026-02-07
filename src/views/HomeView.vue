<template>
    <v-container>
        <v-row>
            <v-col :cols="$vuetify.display.mobile ? 13 : 4">
                <v-card height="100%">
                    <div class="d-flex flex-column justify-center">
                        <img width="80%" class="mt-6 mx-auto" :src="require('@/assets/RamLogoText.png')" />

                        <v-btn href="https://www.instagram.com/eceoutreachcsu/"
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
                            RamBOTs is a large interdisciplinary project that allows students to apply their engineering 
                            skills towards robotics. The current year’s project has worked on developing a robust AI-computer 
                            vision navigation model for the robot, converting a large-scale codebase into functional programming, 
                            revamping the robot’s walk cycle, researching robotics power system techniques, as well as creating a 
                            robust datalogging system for fault detection.  

                        </p>
                        <p>
                            RamBOTs also consists of student outreach. We collaborate with the ECE Outreach club for events like 
                            organizing workshops and student recruitment. Our goal with outreach is to build and show off robotics 
                            and ECE style projects in conjunction with Outreach to students of all ages.
                        </p>
                        <p class="text-h4 text--primary mt-12">Background</p>
                        <div class="text-h5 text--primary mt-10">Year 1:</div>
                        <p class="mt-2">In the initial year, the focus was on harnessing machine learning to identify objects using a camera. That team initially adopted the openDog V2 project by James Bruton and began the process of replicating it. However, during that year, a new iteration called openDog V3 was released, which briefly shifted their course. Despite this, by the end of the first year, they had successfully 3D printed several essential robot components.</p>
                        
                        <div class="text-h5 text--primary mt-10">Year 2:</div>
                        <p class="mt-2">The second-year team continued from where the previous team left off, completing the 3D printing phase and moving on to assemble the robot's electronics, software, and hardware. By the close of the second year, the robot could walk, perform push-ups, and engage in various activities.</p>
                        
                        <div class="text-h5 text--primary mt-10">Year 3:</div>
                        <p class="mt-2">The third year’s team investigated the reliability of the robot and learned on a deeper level the functionality of the robot. Sparky was taken to multiple outreach events and was a big hit. We implemented a new tennis ball following model, and created management scripts to improve the reliability of the robot.</p>
                        
                        <div class="text-h5 text--primary mt-10">Year 4:</div>
                        <p class="mt-2">Our GUI library was completely deprecated, so we had to port all of our code to something new. So we worked to shift Sparky to a new codebase. Additionally, we improved some outreach aspects of it, giving him some paint, decals, a flag, and some LEDs that change color. We also implemented a gesture detection code that is yet to be implemented, but shows high accuracy and high promise.</p>

                        <p class="text-h4 text--primary mt-12">Constraints</p>
                        <p>
                            This is the fifth year of the project, so some of our components are beginning to show their 
                            wear and age. Currently, we are again exploring ways to enhance the reliability of the RamBot. 
                            Our goal is to make this a system that we can consistently take off the stand and deploy for any upcoming 
                            event, but we run into some parts that consistently fail. The biggest strain points are our encoders, which 
                            need a full wiring overhaul. Additionally, previous years’ teams often have the initial impression that they’ve 
                            inherited a working robot, resulting in a large backlog of unimplemented projects, such as gesture detection, 
                            our LED light system, and tennis ball tracking, that are completed but not yet deployed to the robot.
                        </p>
                        <p class="text-h4 text--primary mt-12">Goals</p>
                        <p>
                            At a high level, our goal is to have a working, intuitive robot that can be transported and deployed at department outreach events. These objectives are designed to guide the project's development and
                            measure its success using SMART criteria: Specific, Measurable, Achievable, Realistic, and
                            Timely.To achieve this, we have some sub-tasks to get done:
                        </p>
                        <div class="text-h5 text--primary mt-10">Mechanical</div>
                        <p class="mt-2">- Make repairs on parts that should have been replaced years ago</p>
                        <p class="mt-2">- Design improvements for the existing mode</p>
                        <p class="mt-2">- Create a manipulator arm system to enable Sparky to pick up items.</p>

                        <div class="text-h5 text--primary mt-10">Computer</div>
                        <p class="mt-2">- Finish porting old code functions from the previous codebase, such as leg control mode</p>
                        <p class="mt-2">- Integrate our gyroscopic stabilizer system to the robot</p>
                        <p class="mt-2">- Implement the previous years’ machine learning models to make the robot smart</p>

                        <div class="text-h5 text--primary mt-10">Electrical</div>
                        <p class="mt-2">- Create a custom devboard to mount all our microcontroller electronics to</p>
                        <p class="mt-2">- Look into changing our wiring scheme to prevent strain on our wires</p>
                        <p class="mt-2">- Actually implement the 48V design that was investigated in the previous year</p>
                        <p class="mt-2">- Look into designing custom motor controller boards to ease our wiring situation</p>
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
                    src: require('@/assets/AY25/Rambot_Team_photo.png'),
                    
                },
                {
                    src: require('@/assets/AY25/festival_at_the_oval.png'),
                },
                {
                    src: require('@/assets/AY25/gallery/rambots_team_photo.png')
                }
                
            ],
        };
    },
};
</script>
