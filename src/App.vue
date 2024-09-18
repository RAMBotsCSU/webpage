<template>
    <v-app>

        <v-app-bar app v-if="!this.mobile" :src="require('./assets/appbar.png')" color="#1E4D2B">
            <v-img max-width="201px" :src="require('./assets/CSUWatermarkSmall.png')"></v-img>
            <template v-slot:extension>
                <v-flex class="ml-n8">
                    <v-tabs color="#1E4D2B" align-with-title>
                        <v-tab to="/">Home</v-tab>
                        <v-tab to="/timeline">Timeline</v-tab>
                        <v-tab to="/team">Team</v-tab>
                        <v-tab to="/resources">Documents</v-tab>
                        <v-tab to="/gallery">Gallery</v-tab>
                        <v-tab to="/videos">Videos</v-tab>
                    </v-tabs>
                </v-flex>

            </template>
        </v-app-bar>

        <v-layout v-else>
            <v-navigation-drawer app fixed v-model="showMenu">

                <v-list dense>
                    <v-list-item class="mt-4" to="/">Home
                    </v-list-item>
                    <v-list-item class="mt-4" to="/timeline">Timeline
                    </v-list-item>
                    <v-list-item class="mt-4" to="/team">Team
                    </v-list-item>
                    <v-list-item class="mt-4" to="/resources">Resources
                    </v-list-item>
                    <v-list-item class="mt-4" to="/gallery">Gallery
                    </v-list-item>
                    <v-list-item class="mt-4" to="/videos">Videos
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar app fixed dark color="#1E4D2B">
                <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
                <v-img max-width="201px" :src="require('./assets/CSUWatermarkSmall.png')"></v-img>

            </v-app-bar>
        </v-layout>

        <v-main>
            <router-view />
        </v-main>

        <v-footer app bottom fixed padless color="#1E4D2B">
            <v-row justify="center" no-gutters>
                <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                    {{ link }}
                </v-btn>
                <v-col class="py-1 text-center white--text text-overline" cols="12">
                    <a href="https://give.colostate.edu/campaigns/40250/donations/new"
                        class="white--text text-decoration-underline">Support our program</a>
                    |
                    <a href="http://www.engr.colostate.edu/ECE401/AY24_senior_design_projects.php"
                        class="white--text text-decoration-underline">Other ECE Sr. Design projects</a>
                    |
                    <a href="https://www.engr.colostate.edu/ece/" class="white--text text-decoration-underline">ECE
                        Department</a>
                    |
                    <a href="http://www.colostate.edu/" class="white--text text-decoration-underline">CSU main
                        website</a>
                </v-col>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    mounted() {
        this.mobile = window.innerWidth <= 760
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        doNothing() {
            console.log('do nothing')
        },
    },
    data: () => ({

        drawer: false,
        showMenu: false,
        mobile: false,
        group: null,
        items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
        ],
        links: null,
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
            'red',
            'orange',
        ],
        appbar: require('./assets/appbar.png'),
    }),
}
</script>
