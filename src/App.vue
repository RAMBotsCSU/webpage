<template>
    <v-app>
        <NavBar></NavBar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer bottom color="#1E4D2B">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" variant="text" rounded class="my-2">
                    {{ link }}
                </v-btn>
                <v-col class="py-1 text-center text-white text-overline" cols="12">
                    <a href="https://give.colostate.edu/campaigns/40250/donations/new"
                        class="text-white text-decoration-underline">Support our program</a>
                    |
                    <a href="http://www.engr.colostate.edu/ECE401/AY24_senior_design_projects.php"
                        class="text-white text-decoration-underline">Other ECE Sr. Design projects</a>
                    |
                    <a href="https://www.engr.colostate.edu/ece/" class="text-white text-decoration-underline">ECE
                        Department</a>
                    |
                    <a href="http://www.colostate.edu/" class="text-white text-decoration-underline">CSU main
                        website</a>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
import NavBar from './components/Nav.vue'

export default {
    components: {
        NavBar,
    },
    data: () => ({}),
}
</script>
