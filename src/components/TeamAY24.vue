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
                    src: require('../assets/AY24/headshots/mckenzy_johnson.jpg'),
                    flex: 6,
                    resume: './resumes/mckenzy_johnson.pdf',
                    linkedin: "https://www.linkedin.com/in/mckenzy-johnson-2881751a5",
                    email: 'mckenzypaige@gmail.com',
                    text: "I am completing the last semester (Fall '24) of my Computer Engineering B.S. with a minor in Machine Learning. I’m passionate about developing systems where hardware and software interact seamlessly to create optimized, dynamic control solutions. In my free time, I enjoy hiking, strategy games, and taking on new projects or challenges."
                },
                {
                    title: 'Saige Morlang',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    title: 'Chris Mills',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    title: 'Christopher Moses',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    title: 'Drew Achtermann',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
                {
                    title: 'Adrian Pastella',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
                    title: 'Jason LastName',
                    src: require('../assets/placeholder.jpg'),
                    flex: 6,
                    // resume: '',
                    // linkedin: "https://www.linkedin.com/in/",
                    // email: 'example@example.com',
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
            ]
        }
    },
}
</script>
