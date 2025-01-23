<template>

    <v-row class="justify-center">
        <v-col :cols="this.mobile ? 12 : 8">
            <v-card max-width="1500" class="mt-4 pa-4">
                <p class="text-h4 text--primary mt-0">
                    Resources:
                </p>
                <v-divider></v-divider>

                <v-list-item class="mt-8">
                    
                        <a href="https://github.com/XRobots/openDogV3"
                           class="text-decoration-none text-h5">James Bruton's openDogV3</a>
                        <v-list-item-subtitle class="ml-4">Source of original mechanical design</v-list-item-subtitle>
                    
                </v-list-item>

                <v-list-item class="mt-0">
                    
                        <a href="https://github.com/RAMBotsCSU"
                           class="text-decoration-none text-h5">RamBOTs GitHub Organization</a>
                           <a href="https://github.com/RAMBotsCSU/deployment"
                           class="text-decoration-none text-p1 ml-4 mt-2">Deployment repository</a>
                            <a href="https://github.com/RAMBotsCSU/testing"
                           class="text-decoration-none text-p1 ml-4 mt-2">Testing repository</a>
                           <a href="https://github.com/RAMBotsCSU/machine_learning"
                           class="text-decoration-none text-p1 ml-4 mt-2">Machine Learning repository</a>
                           <a href="https://github.com/RAMBotsCSU/source"
                           class="text-decoration-none text-p1 ml-4 mt-2">Source repository</a>
                           <a href="https://github.com/RAMBotsCSU/outreach"
                           class="text-decoration-none text-p1 ml-4 mt-2">Outreach repository</a>
                           <a href="https://github.com/RAMBotsCSU/webpage"
                           class="text-decoration-none text-p1 ml-4 mt-2">Webpage repository</a>
                    
                </v-list-item>

                <v-list-item>
                    
                        <a href="https://projects-web.engr.colostate.edu/ece-sr-design/AY23/RamBOTs" open
                           class="text-decoration-none text-h5">RamBOTs 2023-2024 Team's Website</a>
                           <v-list-item-subtitle class="ml-4">Check out the previous year's website!</v-list-item-subtitle>
                    
                </v-list-item>

            </v-card>
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
