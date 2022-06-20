<template>
    <v-app light>
        <v-main light class="indigo lighten-3">
            <v-container light>
                <Nuxt />
            </v-container>
            
            <v-container style="max-height: '100%'; max-width: 100%">
                <v-row justify="center" align="center">
                <v-col cols="4" justify="center" align="center">
                    <v-card class="blue darken-1" dark>
                        <v-card-text>
                            <v-btn
                                v-for="icon in footer_icons"
                                :key="icon"
                                class="mx-4"
                                icon
                                :href="icon.href"
                            >
                                <v-icon size="24px">
                                    {{ icon.icon }}
                                </v-icon>
                            </v-btn>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-text class="white--text">
                            {{ new Date().getFullYear() }} — <strong>Adam Shakhbanov</strong>
                        </v-card-text>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'IndexLayout',
    data(){
        return {
            footer_icons: [
                {icon: 'mdi-github', href: "https://github.com/AdamShakh/Parliaments_Exhibition"},
                {icon: 'mdi-vuetify', href: "https://vuetifyjs.com/"},
                {icon: 'mdi-nuxt', href: "https://nuxtjs.org/"},
                {icon: 'mdi-vuejs', href: "https://vuejs.org/"},
            ],
        }
    }
}
</script>