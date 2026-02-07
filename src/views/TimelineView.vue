<template>
    <v-container>
        <v-row>
            <v-col :cols="12">
                <v-card>
                    <v-card-title>
                        <span class="font-weight-black">2025-2026 Project Timeline</span>
                    </v-card-title>
                    <v-card-text>
                        <p class="timeline-section-title">Engineering Teams Timeline2025</p>
                        <p>Logistical Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/logistical25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">

                        
                        <p>Electrical Engineering Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/ee25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        
                        
                        <p>Computer Engineering Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/cpe25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">
                        
                        
                        <p>Mechanical Engineering Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/me25.png')" alt="Fall 2025" style="max-width: 100%; height: auto;">

                        <p class="timeline-section-title">Subteams Timeline 2026</p>
                        <p>Logistical Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/logistical2026.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p>RamBot Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/rambot_subteam.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p>ArmBot Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/armbot_subteam.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        <p>RamBot MK2 Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/MK2_subteam.png')" alt="Spring 2026" style="max-width: 100%; height: auto;">

                        
                        <p>Deliverables Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/deliverables.png')" alt="2026 Deliverables" style="max-width: 100%; height: auto;">

                        <p>Intern Tasks Timeline</p>
                        <img :src="require('@/assets/AY25/Timeline/intern_tasks.png')" alt="2026 Intern Tasks" style="max-width: 100%; height: auto;">
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
            timelineImage3: require('@/assets/AY25/Timeline/ee25.png'),
            timelineImage5: require('@/assets/AY25/Timeline/cpe25.png'),
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
