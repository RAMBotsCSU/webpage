<template>

    <v-card v-if="!this.mobile" outlined color="transparent" :max-width="1500" elevation="0" class="pa-8 ma-4">

        <v-row class="text-center">
            <p class="font-weight-medium text-h4 text-center mt-4">
                <span style="text-decoration: underline;">Seniors</span>
            </p>
        </v-row>
        <v-row class="text-center">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in cards"
                   :key="card.title"
                   >
                    
                <v-card width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
                           height="300px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card outlined color="transparent" height="220px">

                        <v-card-text class="grow text-left px-2 mt-2 mb-n2">{{card.text}}</v-card-text>
                    </v-card>

                    <v-card-actions>
                        <v-btn icon :disabled="card.resume == null" 
                                    :href="card.resume" target="_blank">
                            <v-icon>mdi-file-account</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.email == null">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.linkedin == null"
                                    :href="card.linkedin" target="_blank">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>



                </v-card>
            </v-col>

        </v-row>

        <v-row class="text-center">
            <p class="font-weight-medium text-h4 text-center mt-4">
                <span style="text-decoration: underline;">VIPs</span>
            </p>
        </v-row>

        <v-row class="text-center">
            <v-col class="text-center d-flex justify-center"
                   v-for="card in VIPS"
                   :key="card.title">


                <v-card v-if="card.title.length == 1" width="250px" outlined color="transparent">

                </v-card>

                <v-card v-else width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                           height="300px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card outlined color="transparent" height="220px">

                        <v-card-text class="grow text-left px-2 mt-2 mb-n2">{{card.text}}</v-card-text>
                    </v-card>

                    <v-card-actions>
                        <v-btn icon :disabled="card.resume == null" 
                                    :href="card.resume" target="_blank">
                            <v-icon>mdi-file-account</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.email == null">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.linkedin == null"
                                    :href="card.linkedin" target="_blank">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>


            </v-col>

        </v-row>

        <v-row>
            <v-col cols="3"><v-spacer></v-spacer></v-col>
            <v-col cols="3">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Advisor
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Olivera Notaros</p>
            </v-col>

            <v-col cols="3">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Industry Members
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Jon Lotz</p>
                <p class="text-center font-weight-light">Bill Hudson</p>
                <p class="text-center font-weight-light">Hugh Wallace</p>
            </v-col>
            <v-col cols="3"><v-spacer></v-spacer></v-col>
        </v-row>

        <v-container fluid>
            <v-layout justify-center align-center>
                <v-flex shrink>
                    <v-img width="1200px" class="mt-4 elevation-2" :src="require('../assets/year3/team/year3_full.jpg')"></v-img>
                </v-flex>
            </v-layout>
        </v-container>

    </v-card>

    <v-card v-else outlined color="transparent">
        <v-row class="text-center mb-12 mt-2">
            <v-col class="text-center d-flex justify-space-around"
                   v-for="card in cards"
                   :key="card.title"
                   cols="12">

                <v-card width="250px">
                    <v-img :src="card.src"
                           class="white--text align-end"
                           gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                           height="300px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card outlined color="transparent" height="220px">

                        <v-card-text class="grow text-left px-2 mt-2 mb-n2">{{card.text}}</v-card-text>
                    </v-card>

                    <v-card-actions>


                        <v-btn icon :disabled="card.resume == null">
                            <v-icon>mdi-file-account</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.email == null">
                            <v-icon>mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon :disabled="card.linkedin == null"
                               :href="card.linkedin">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-card-actions>



                </v-card>
            </v-col>
        </v-row>
        <v-row>

            <v-col cols="6">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Advisor
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Olivera Notaros</p>
            </v-col>

            <v-col cols="6">
                <p class="text-center font-weight-light text-h4 text--primary mt-8">
                    Industry Members
                </p>
                <v-divider class="mt-n4 mb-2"></v-divider>
                <p class="text-center font-weight-light">Jon Lotz</p>
                <p class="text-center font-weight-light">Bill Hudson</p>
                <p class="text-center font-weight-light">Hugh Wallace</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col lass="text-center d-flex justify-space-around" cols="12">
                <v-img width="400" class="mt-4 elevation-2" :src="require('../assets/year3/team/year3_full.jpg')"></v-img>
            </v-col>
        </v-row>
     
    </v-card>

</template>

<script>
    export default {
        mounted() {
            this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            if (this.mobile) {
                this.cards.push(this.VIPS[1])
                this.cards.push(this.VIPS[2])
            }

        },
        data() {
            return {
                mobile: false,
                cards: [
                    { 
                        title: 'Anna Biolchini', 
                        src: require('../assets/year3/headshots/anna_biolchini.jpg'), 
                        flex: 6, 
                        linkedin: "https://www.linkedin.com/in/anna-biolchini/", 
                        text: "I am a senior studying Electrical Engineering and I am a co-captain of the RamBOTs team. I am interseted in aerospace, circuit design and analysis, control systems, and pushing technology further. In my free time, I love to hike, read, and try new things." 
                    },
                    {
                        title: 'Elaine Smith', 
                        src: require('../assets/year3/headshots/elaine_smith.jpg'), 
                        flex: 6, 
                        resume: './resumes/elaine_smith.pdf', 
                        linkedin: "https://www.linkedin.com/in/elaine-smith-csu/", 
                        email: "elaines@1colostate.edu", 
                        text: "I am a senior in Electrical Engineering with a second major in Computer Science. I am interested in digital logic, software, and embedded systems. In my free time, I like drumming, playing video games, and stargazing." 
                    },
                    { 
                        title: 'Aironas Bilevicius',
                        src: require('../assets/year3/headshots/aironas_bilevicius.jpg'),
                        flex: 6,
                        resume: './resumes/aironas_bilevicius.pdf',
                        linkedin: "https://www.linkedin.com/in/aironasbilevicius",
                        email: 'aironas@colostate.edu',
                        text: "I am a senior in Electrical Engineering. I am currently interested in power systems, but I am open to exploring all of the different fields that Electrical Engineering has to offer. Outside of school, I like to go to the gym, play video games, build Lego, and have a good social life."
                    },
                    {
                        title: 'Samuel Peccoud',
                        src: require('../assets/year3/headshots/samuel_peccoud.jpeg'),
                        flex: 6,
                        resume: './resumes/samuel_peccoud.pdf',
                        linkedin: "https://www.linkedin.com/in/samuel-peccoud",
                        email: 'speccoud@colostate.edu',
                        text: "I'm Samuel, a senior in Computer Engineering with a minor in Machine Learning. I'm normally found comparing ML models and diving into the world of algorithms and code. In my free time, I head to the local climbing gym to send boulder problems and routes. I love a good challenge."
                    },
                    {
                        title: 'Kaitlin Rentmeester',
                        src: require('../assets/year3/headshots/kaitlin_rentmeester.jpg'),
                        flex: 6,
                        linkedin: "https://www.linkedin.com/in/kaitlin-rentmeester-180033233",
                        email: 'rentmeester.kaitlin@gmail.com',
                        text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in machine learning, software development, and embedded systems. In my free time, I can often be found painting, reading mystery novels, or delving into my favorite true crime podcasts."
                    },
                    {
                        title: 'Lawrence Milo',
                        src: require('../assets/year3/headshots/lawrence_milo.jpg'),
                        flex: 6,
                        linkedin: "https://www.linkedin.com/in/lawrence-milo/",
                        text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in software development and the design and implementation of embedded systems. Outside of work, I enjoy playing video games, listening to music, and playing with my dog, Rocket."
                    },
                    {
                        title: 'McKenzy Johnson',
                        src: require('../assets/year3/headshots/mckenzy_johnson.png'),
                        flex: 6,
                        resume: './resumes/mckenzy_johnson.pdf',
                        linkedin: "https://www.linkedin.com/in/mckenzy-johnson-2881751a5",
                        email: 'mckenzypaige@gmail.com',
                        text: "I am a junior in Computer Engineering with a minor in Machine Learning. I am pursuing a career in embedded systems and integrating AI to improve and develop effective airborne and defense technology. In my free time, I enjoy hiking, spearfishing, soccer, snowboarding, and generally being outdoors."
                    },
                    {
                        title: 'Jacob Beauchamp',
                        src: require('../assets/year3/headshots/jacob_beauchamp.png'),
                        flex: 6,
                        resume: './resumes/jacob_beauchamp.pdf',
                        linkedin: "https://www.linkedin.com/in/jacob-beauchamp-2002",
                        email: 'jacobbeauchamp2020@gmail.com',
                        text: "Hi everyone! I am a senior in Mechanical Engineering. I am very passionate about controls engineering and 3D design!"
                    },
                    {
                        title: 'Caleb Costigan',
                        src: require('../assets/year3/headshots/caleb_costigan.jpg'),
                        flex: 6,
                        resume: './resumes/caleb_costigan.pdf',
                        email: 'calebcostigan@gmail.com',
                        text: "My name is Caleb and I am a mechanical engineering major. I mainly specialize in SolidWorks CAD design, but I also have experience with FEA, CFD, and machining!"
                    },
                    {
                        title: 'Josiah Aldridge',
                        src: require('../assets/year3/headshots/josiah_aldridge.jpg'),
                        flex: 6,
                        email: 'josaldridge7@gmail.com',
                        text: "I'm a senior in Mechanical Engineering. I like reading lengthy novels in my spare time, as well as TTRPGs."
                    }
                ],
                VIPS: [
                    { title: 'a', src: require('../assets/placeholder.jpg'), flex: 6 },
                    { 
                        title: 'Joey Reback', 
                        src: require('../assets/year3/headshots/joey_reback.jpg'), 
                        flex: 6, 
                        linkedin: "https://www.linkedin.com/in/joseph-reback-54327b250", 
                        email: 'jreback@colostate.edu',
                        text: "I'm a sophomore in Computer Engineering at CSU. I'm interested in working in robotics, aerospace, and embedded systems. I'm a huge Colorado sports fan and in my free time I like running, electronics repair, and backpacking." 
                    },
                    { title: 'b', src: require('../assets/placeholder.jpg'), flex: 6 },
                ]
            }
        },
    }</script>
