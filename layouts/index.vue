<template>
    <v-app light>
        <v-main light class="indigo lighten-3">
            <v-container id="lang_menu" 
                style="position: fixed; max-height: 100%; max-width: 100%; padding-right: 25px; padding-top: 25px;" 
                align="center" justify="end">
                <v-row>
                    <v-col justify="center" align="end" style="padding-bottom: 0px;">
                        <v-menu
                            open-on-hover
                            bottom
                            offset-y
                            transition="slide-y-transition"
                            rounded="lg"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    class="blue darken-3" fab small dark
                                    v-bind="attrs" v-on="on"
                                >
                                    <v-icon>mdi-translate</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(lang, i) in langs"
                                    :key="i"
                                    :inactive="currentLang == lang.lang"
                                    @click.stop="setCurrentLang(lang.lang)"
                                >
                                    <!-- class="v-list-item--active" -->
                                    <v-list-item-title>{{ lang.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-container>

            <v-container id="index_page" light>
                <Nuxt />
            </v-container>
            
            <v-container id="footer" style="max-height: 100%; max-width: 100%">
                <v-row justify="center" align="center">
                <v-col cols="4" justify="center" align="center">
                    <v-card class="blue darken-2" dark>
                        <v-card-text>
                            <v-btn
                                v-for="(icon, i) in footer_icons"
                                :key="i"
                                class="mx-4" icon fab small
                                :href="icon.href" target="_blank" rel="noopener"
                            >
                                <v-icon size="30px">
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
    created(){
        this.$vuetify.theme.dark = false;
    },
    computed: {
        footer_icons(){
            return this.$store.getters.getFooterIcons
        },
        langs(){
            return this.$store.getters.getLangs
        },
        currentLang(){
            return this.$store.getters.getCurrentLang
        },
    },
    methods: {
        setCurrentLang (lang){
            this.$store.commit('setCurrentLang', lang);
        },
    },
}
</script>
