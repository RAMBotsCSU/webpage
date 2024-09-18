<template>

    <v-row>
        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
        <v-col :cols="this.mobile ? 12 : 8">
            <v-card max-width="1800" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-4">
                    Project Timeline
                </p>
                <p class="text-h4 text--primary mt-4">
                    2024-2025 Team's Semester 1 Timeline
                </p>
                <p>Coming soon...</p>
            </v-card>
        </v-col>

        <v-col cols="2">
            <v-spacer></v-spacer>
        </v-col>
    </v-row>

</template>

<script>

export default {
    mounted() {
        this.mobile = window.innerWidth <= 760
    },
    data() {
        return {
            mobile: false,
            logo: require('../assets/gallery/chassis.jpg'),
        }
    },
}
</script>
