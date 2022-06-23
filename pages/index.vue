<template>
<div>
    <v-card light>
        <v-card-title class="headline" style="display: flex; justify-content: center;">
            Welcome to Parler Square
        </v-card-title>
        <v-card-text class="headline" justify="center" align="center" style="color: #616161">
            Here you can see Few of the Most Beautiful Parliamentary buildings in the World
        </v-card-text>
    </v-card>
    <v-container
        class="lighten-5 mb-6"
    >
        <v-row justify="center" align="center">
            <v-col
                cols="12" xs="12" sm="8" md="6" lg="4" xl="2"
                v-for="(page, i) in pages"
                :key="i"
            >
                <v-card 
                    light
                    :to="page.to"
                    router
                    hover
                >
                    <v-img :lazy-src="page.min" :src="page.face" height="14em"></v-img>
                    <v-card-title class="headline">
                        {{ page.title }}
                    </v-card-title>
                    <v-card-text>
                        <h3>{{ page.name }}</h3>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    computed: {
        pages(){
            return this.$store.getters["getPages"]; 
        }
    },
    layout: 'index',
    head () {
        const title = 'Parler Square'
        return {
            title
        }
    } 
}
</script>