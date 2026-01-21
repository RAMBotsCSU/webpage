<template>
    <v-container>
        <v-row>
            <v-col :cols="12">
                <v-card>
                    <v-card-title>
                        <span class="font-weight-black">2025-2026 Project Timeline</span>
                    </v-card-title>
                    <v-card-text>
                        <p class="timeline-section-title">Logistical Timeline</p>
                        <p>Fall 2025</p>
                        <img :src="require('@/assets/AY25/Timeline/logistical25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        <p>Spring 2026</p>
                        <img :src="require('@/assets/AY25/Timeline/logistical26.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p class="timeline-section-title">Electrical Engineering Timeline</p>
                        <p>Fall 2025</p>
                        <img :src="require('@/assets/AY25/Timeline/ee25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        <p>Spring 2026</p>
                        <img :src="require('@/assets/AY25/Timeline/ee26.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p class="timeline-section-title">Computer Engineering Timeline</p>
                        <p>Fall 2025</p>
                        <img :src="require('@/assets/AY25/Timeline/cpe25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        <p>Spring 2026</p>
                        <img :src="require('@/assets/AY25/Timeline/cpe26.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p class="timeline-section-title">Mechanical Engineering Timeline</p>
                        <p>Fall 2025</p>
                        <img :src="require('@/assets/AY25/Timeline/me25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        <p>Spring 2026</p>
                        <img :src="require('@/assets/AY25/Timeline/me26.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">
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
            timelineImage1: require('@/assets/AY25/Timeline/logistical25.png'),
            timelineImage2: require('@/assets/AY25/Timeline/logistical26.png'),
            timelineImage3: require('@/assets/AY25/Timeline/ee25.png'),
            timelineImage4: require('@/assets/AY25/Timeline/ee26.png'),
            timelineImage5: require('@/assets/AY25/Timeline/cpe25.png'),
            timelineImage6: require('@/assets/AY25/Timeline/cpe26.png'),
        }
    },
}
</script>

<style scoped>
.timeline-section-title {
    text-decoration: underline;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1.5rem;
}
</style>
