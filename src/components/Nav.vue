<template>
    <div>
        <v-app-bar v-if="$vuetify.display.mobile" color="#1E4D2B">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="logo-text">RAMBOTS</span>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary v-if="$vuetify.display.mobile">
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" :to="item.route">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar v-else color="#1E4D2B">
            <img :src="require('@/assets/CSUWatermarkSmall.png')">
            <v-divider color="white" opacity=1 vertical class="mx-2"></v-divider>
            <span class="logo-text">RAMBOTS</span>
            <v-spacer></v-spacer>
            <v-tabs>
                <v-tab v-for="item in items" :key="item.title" :to="item.route">
                    {{ item.title }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Home', icon: 'mdi-home', route: '/' },
                { title: 'Timeline', icon: 'mdi-timeline', route: '/timeline' },
                { title: 'Team', icon: 'mdi-account-group', route: '/team' },
                { title: 'Documents', icon: 'mdi-file-document', route: '/resources' },
                { title: 'Gallery', icon: 'mdi-image', route: '/gallery' },
                { title: 'Videos', icon: 'mdi-video', route: '/videos' },
            ]
        }
    },
    methods: {
        navigate(item) {
            // Handle navigation logic here
            console.log(`Navigating to ${item.title}`);
        }
    }
}
</script>

<style scoped>
.v-toolbar img {
    max-height: 80%;
    height: auto;
}

.v-toolbar .v-divider {
    height: 60%;
    align-self: center;
}

.logo-text {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
}
</style>
