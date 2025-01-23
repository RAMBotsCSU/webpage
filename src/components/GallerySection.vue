<template>
    <div>
        <v-row class="justify-center">
            <v-col cols="12" class="text-center mt-4">
                <v-text class="font-weight-medium text-h5">{{ title }}</v-text>
            </v-col>
        </v-row>
        <v-divider class="my-4"></v-divider>
        <v-row class="justify-center">
            <v-col class="d-flex" v-for="card in cards" :key="card.title" :cols="$vuetify.display.mobile ? 12 : 4">
                <v-img :src="card.src" class="text-white align-end rounded-md" cover @click="openImage(card.src)">
                    <v-card-title v-text="card.title"></v-card-title>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        cards: Array,
    },
    methods: {
        openImage(src) {
            window.open(src, '_blank');
        }
    }
}
</script>
