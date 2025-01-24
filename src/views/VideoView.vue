<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-tabs v-model="tab" color="primary">
                    <v-tab v-for="(year, index) in years" :key="index">{{ year.title }}</v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card class="d-flex justify-center align-center">
                    <v-window v-model="tab">
                        <v-window-item v-for="(year, index) in years" :key="index" :value="index">
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4" v-for="videoId in year.videos" :key="videoId" color="#00ff00">
                                        <div class="player">
                                            <VueYtframe :video-id="videoId" @ready="onPlayerReady(videoId)">
                                            </VueYtframe>
                                            <v-progress-circular v-if="loadingVideos[videoId]" indeterminate
                                                color="primary"></v-progress-circular>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,
            loadingVideos: {},
            years: [
                {
                    title: '2023/2024',
                    videos: [
                        "rcZ5d448H4Y",
                        "d6j7IPYGWHc",
                        "DvWL3E3WPoU"
                    ]
                },
                {
                    title: '2022/2023',
                    videos: [
                        "lGujzt1vstc",
                        "Tb1ysV0rtFo",
                        "XzEjYknNzUg",
                        "xvF6pBuC2yg",
                        "0eQwpkMz9T8",
                        "nPgpwkBiq1I",
                        "aV50ot9t3os",
                        "XT73xWqmi78",
                        "Lt--0nAPuSA",
                        "noQQGqFBcIw",
                        "axCfKZ4Z-Ik",
                        "343kp-O3OiQ"
                    ]
                }
            ]
        }
    },
    created() {
        this.initializeLoadingState();
    },
    methods: {
        initializeLoadingState() {
            this.years.forEach(year => {
                year.videos.forEach(videoId => {
                    this.loadingVideos = { ...this.loadingVideos, [videoId]: true };
                });
            });
        },
        onPlayerReady(videoId) {
            this.loadingVideos = { ...this.loadingVideos, [videoId]: false };
        }
    }
}
</script>

<style>
.player {
    position: relative;
}

.v-progress-circular {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
