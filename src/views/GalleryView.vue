<template>



    <v-row>
        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
        <v-col cols="this.mobile ? 12 : 10" class="d-flex justify-center align-center">
            <v-card max-width="1300px" class="mt-4 pa-4">
                <v-tabs @change="console.log(tab)" v-model="tab" color="#1E4D2B">
                    <v-tab >2023/2024</v-tab>
                    <v-tab >2022/2023</v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-card outlined color="transparent" class="d-flex justify-center align-center">
                    <GalleryYear3 v-if="tab == 0" />
                    <GalleryYear2 v-if="tab == 1" />
                </v-card>
            </v-card>
        </v-col>

        <v-col cols="1">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>


   

</template>

<script>
    import GalleryYear2 from '../components/GalleryYear2.vue'
    import GalleryYear3 from '../components/GalleryYear3.vue'
    export default {
        mounted() {
            this.mobile = window.innerWidth <= 760
        },
        computed: {
            console: () => console,
            window: () => window,
        },
        components: {
            GalleryYear2,
            GalleryYear3
        },
        data() {
            return {
                mobile: false,
                logo: require('../assets/gallery/chassis.jpg'),
                tab: null,
                url: "https://projects-web.engr.colostate.edu/ece-sr-design/AY23/outreach/",

            }
        },
    }</script>
