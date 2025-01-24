<template>
    <v-app>
        <NavBar></NavBar>

        <v-main>
            <router-view />
        </v-main>

        <Footer></Footer>
    </v-app>
</template>

<script>
import NavBar from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        NavBar,
        Footer,
    },
    data: () => ({}),
}
</script>

<style scoped>
main {
    min-height: calc(100vh - 120px); /* Adjust 64px to the height of your footer */
}
</style>
