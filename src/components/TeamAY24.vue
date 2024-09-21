<template>

    <v-card outlined color="transparent" :max-width="1500" elevation="0" class="pa-8 ma-4">

        <v-row class="text-center">
            <v-col class="font-weight-medium text-h4 text-center mt-4">
                <span style="text-decoration: underline;">Seniors</span>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="4" v-for="card in cards" :key="card.title">
                <TeamMemberCard :card="card" />
            </v-col>
        </v-row>

        <v-row class="text-center">
            <v-col class="font-weight-medium text-h4 text-center mt-4">
                <span style="text-decoration: underline;">VIPs</span>
            </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
            <v-col class="d-flex justify-center" cols="4" v-for="card in VIPS" :key="card.title">
                <TeamMemberCard :card="card" />
            </v-col>
        </v-row>

        <v-row class="d-flex justify-space-around">
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
                <p class="text-center font-weight-light">Hugh Wallace</p>
            </v-col>
        </v-row>

        <v-row>
            <v-img width="1200px" class="mt-4 mx-12 elevation-2" :src="require('../assets/AY24/team_full.png')"></v-img>
        </v-row>

    </v-card>

</template>

<script>
import TeamMemberCard from '@/components/TeamMemberCard.vue';

export default {
    components: {
        TeamMemberCard,
    },
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
                    title: 'McKenzy Johnson',
                    src: require('../assets/AY24/headshots/mckenzy.jpg'),
                    flex: 6,
                    resume: './resumes/mckenzy_johnson.pdf',
                    linkedin: "https://www.linkedin.com/in/mckenzy-johnson-2881751a5",
                    email: 'mckenzypaige@gmail.com',
                    text: "I am completing the last semester (Fall '24) of my Computer Engineering B.S. with a minor in Machine Learning. I’m passionate about developing systems where hardware and software interact seamlessly to create optimized, dynamic control solutions. In my free time, I enjoy hiking, strategy games, and taking on new projects or challenges."
                },
                {
                    title: 'Saige Morlang',
                    src: require('../assets/AY24/headshots/saige.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "I am currently a senior electrical engineering major with a focus on power engineering and SCADA systems. I enjoy leveraging my skills to improve automation and control systems both in school and in the power industry. Outside of studies and work, I enjoy spending time with family, exploring the outdoors near Fort Collins, and recording my own original music.",
                },
                {
                    title: 'Chris Mills',
                    src: require('../assets/AY24/headshots/chris.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "I am a senior Computer Engineer at CSU. In my free-time I enjoy playing guitar and playing sports.",
                },
                {
                    title: 'Christopher Moses',
                    src: require('../assets/AY24/headshots/christopher.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "My name is Christopher and I am a senior majoring in Electrical Engineering with a focus in power systems. I am a big fan of the Colorado sports teams and I also enjoy hiking, biking, and playing music in my free time.",
                },
                {
                    title: 'Drew Achtermann',
                    src: require('../assets/AY24/headshots/drew.jpg'),
                    flex: 6,
                    // resume: '',
                    linkedin: "https://www.linkedin.com/in/glue/",
                    email: 'drew@oceanmail.net',
                    github: 'unex',
                    text: "I am a senior in Electrical Engineering, my interests include but are not limited to power and control systems.",
                },
                {
                    title: 'Adrian Pastella',
                    src: require('../assets/AY24/headshots/adrian.jpg'),
                    flex: 6,
                    resume: './resumes/adrian_pastella.pdf',
                    linkedin: "https://www.linkedin.com/in/adrianpastella/",
                    email: 'adrian.pastella@outlook.com',
                    text: "My name is Adrian and I am a senior finishing up my Computer Engineering degree. I enjoy tinkering with electronics, programming, and discovering the wonderful world of machine learning. In my free time you can find me making music, art, or exploring the outdoors.",
                },
            ],
            VIPS: [
                {
                    title: 'Joey Reback',
                    src: require('../assets/year3/headshots/joey_reback.jpg'),
                    flex: 6,
                    linkedin: "https://www.linkedin.com/in/joseph-reback-54327b250",
                    email: 'jreback@colostate.edu',
                    text: "I'm a junior in Computer Engineering at CSU. I'm interested in working in robotics, aerospace, and embedded systems. I'm a huge Colorado sports fan and in my free time I like running, electronics repair, and backpacking."
                },
                {
                    title: 'Jason Taylor',
                    src: require('../assets/AY24/headshots/jason.jpg'),
                    flex: 6,
                    // resume: '',
                    linkedin: "https://www.linkedin.com/in/jason-taylor-7aa0982a4",
                    email: 'Jason.Taylor@colostate.edu',
                    text: "I’m a junior in Mechanical Engineering. I am interested in aerospace and fluid mechanics. Outside of classes, I like playing video games, listening to music, and going to the gym.",
                },
            ]
        }
    },
}
</script>
