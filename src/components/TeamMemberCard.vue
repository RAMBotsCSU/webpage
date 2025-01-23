<template>
    <v-card class="align-self-start" width="250px">
        <v-img :src="card.src" class="text-white align-end" cover gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
            height="300px">
            <v-card-title v-text="card.title"></v-card-title>
        </v-img>
        <v-card-text>{{ card.text }}</v-card-text>

        <v-card-actions class="justify-center opacity-60">
            <v-btn icon v-if="card.resume" :href="card.resume" target="_blank">
                <v-icon>mdi-file-account</v-icon>
            </v-btn>

            <v-btn icon v-if="card.email" :href="`mailto:${card.email}`" target="_blank">
                <v-icon>mdi-email</v-icon>
            </v-btn>

            <v-btn icon v-if="card.linkedin" :href="`https://www.linkedin.com/in/${card.linkedin}`" target="_blank">
                <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn icon v-if="card.github" :href="`https://github.com/${card.github}`" target="_blank">
                <v-icon>mdi-github</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>
