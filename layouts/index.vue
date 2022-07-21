<template>
    <v-app light>
        <v-main light class="indigo lighten-3">
            <v-container id="lang_menu"
                v-if="!isMobile"
                style="position: fixed; max-height: 100%; max-width: 100%; padding-right: 25px; padding-top: 25px;" 
                align="center" justify="end">
                <v-row>
                    <v-col justify="center" align="end" style="padding-bottom: 0px;">
                        <v-btn
                            class="blue darken-3" fab small dark
                            loading v-if="!isMount">
                        </v-btn>
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
                                    :class="currentLang == lang.lang ? 'grey lighten-2' : ''"
                                    @click.stop="setCurrentLang(lang.lang)"
                                >
                                    <v-list-item-title>{{ lang.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-container>

            <Nuxt />
            
            <v-container id="footer" style="max-height: 100%; max-width: 100%">
                <v-row justify="center" align="center">
                <v-col :cols="!isMobile ? 4 : 9" justify="center" align="center">
                    <v-card class="blue darken-3" dark>
                        <v-card-text>
                            <v-btn
                                class="mx-5" icon fab small 
                                loading v-if="!isMount">
                            </v-btn>
                            <v-menu
                                v-if="isMobile"
                                open-on-hover
                                right
                                offset-x
                                transition="slide-x-transition"
                                rounded="lg"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        class="mx-5" icon fab small 
                                        v-bind="attrs" v-on="on"
                                    >
                                        <v-icon size="32px">mdi-translate</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(lang, i) in langs"
                                        :key="i"
                                        :inactive="currentLang == lang.lang"
                                        :class="currentLang == lang.lang ? 'grey lighten-2' : ''"
                                        @click.stop="setCurrentLang(lang.lang)"
                                    >
                                        <v-list-item-title>{{ lang.name }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>

                            <v-btn
                                v-for="(icon, i) in footerIcons"
                                :key="i"
                                class="mx-5" icon fab small
                                :href="icon.href" target="_blank" rel="noopener"
                            >
                                <v-icon size="32px">
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
    data: () => ({ isMount: false, isMobile: false, }),
    created(){
        this.$vuetify.theme.dark = false;
    },
    computed: {
        footerIcons(){
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
        adaptiveSize(){
            if (window.innerWidth < 1030){
                this.isMobile = true
            }
            else if (window.innerWidth > 1030){
                this.isMobile = false
            }
        },
    },
    mounted(){
        this.isMount = true;
        this.adaptiveSize();
        window.addEventListener('resize', this.adaptiveSize, { passive: true });
    },
    beforeDestroy() {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', this.adaptiveSize, { passive: true })
    },
}
</script>
