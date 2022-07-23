<template>
<v-container id="index_page" light>
    <v-card light>
        <v-card-title class="headline" justify="center" align="center" style="display: flex; justify-content: center;">
            {{ welcomeMessage.title }} <label>&nbsp;<span>Parler Square</span></label>
        </v-card-title>
        <v-card-text class="headline" justify="center" align="center" style="color: #616161">
            {{ welcomeMessage.text }}
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
                    <v-img :lazy-src="page.min" :src="page.face" eager height="14em"></v-img>
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
</v-container>
</template>

<script>
export default {
    name: 'Index',
    layout: 'index',
    computed: {
        pages(){
            this.$store.commit('addImgSrcsForCurrentLang')
            return this.$store.getters.getPages
        },
        welcomeMessage(){
            return this.$store.getters.getWelcomeMessage
        }
    },
    head() {
        const title = 'Parler Square'
        return { title }
    }
}
</script>