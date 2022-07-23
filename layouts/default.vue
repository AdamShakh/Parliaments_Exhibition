<template>
<v-app>
    
    <v-img :src="bgSrc" eager style="position: fixed; background-size:cover; width: 100%; height: 100%;">
    </v-img>

    <v-navigation-drawer
        v-model="drawer"
        :mini-variant="true"
        mini-variant-width="4em"
        :clipped="true"
        expand-on-hover
        fixed
        app
        light
        class="back-lowbright"
    >
        <v-list>
            <v-list-item
                class="menu-item"
                to="/"
                router exact
            >
                <v-list-item-avatar width="3em" height="3em">
                    <v-icon size="52px">mdi-home</v-icon>
                </v-list-item-avatar>
                
                <v-list-item-content>
                    <v-list-item-title>Parler Square</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item
                class="menu-item"
                v-for="(page, i) in pages"
                :key="i"
                :to="page.to"
                router exact
            >
                <v-list-item-avatar width="3em" height="3em">
                    <v-img :src="page.icon"></v-img>
                </v-list-item-avatar>
                
                <v-list-item-content>
                    <v-list-item-title>{{ page.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main light class="back-lowbright" app>

        <v-container id="menu_toggle-lang_menu" style="padding-bottom: 0px;">
            <v-row justify="center" align="center">
                <v-col justify="start" align="start" style="padding-bottom: 0px;">
                    <v-btn
                        :class="pageTheme" fab small dark
                        @click.stop="drawer = !drawer"
                    >
                        <v-icon v-if="!drawer">mdi-menu</v-icon>
                        <v-icon v-if="drawer">mdi-menu-open</v-icon>
                    </v-btn>
                </v-col>

                <v-col justify="center" align="end" style="padding-bottom: 0px;">
                    <v-btn
                        :class="pageTheme" fab small dark
                        loading v-if="!isMount">
                    </v-btn>
                    <v-menu
                        v-if="country!=''"
                        open-on-hover
                        bottom
                        offset-y
                        transition="slide-y-transition"
                        rounded="lg"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                :class="pageTheme" fab small dark
                                v-bind="attrs" v-on="on"
                            >
                                <v-icon>mdi-translate</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(lang, i) in langs"
                                :key="i"
                                @click.stop="setCurrentLang(lang.lang)"
                                :to="'/' + lang.lang + '/' + country"
                                router exact
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
                <v-col :cols="!isMobile ? 5 : 10" justify="center" align="center">
                    <v-card :class="pageTheme" dark>
                        <v-card-text>
                            <v-btn v-if="!drawer" class="mx-5" icon fab small router to="/">
                                <v-icon size="33px">mdi-home</v-icon>
                            </v-btn>
                            <v-btn
                                v-for="(icon, i) in footerIcons"
                                :key="i"
                                class="mx-5" icon fab small
                                :href="icon.href" target="_blank" rel="noopener"
                            >
                                <v-icon size="33px">
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
    name: 'DefaultLayout',
    data() {
        return {
            drawer: true,
            bgSrc: '',
            pageTheme: 'blue-grey darken-3',
            lang: '',
            country: '',
            isMount: false,
        }
    },
    computed: {
        pages(){
            this.$store.commit('addImgSrcsForCurrentLang')
            return this.$store.getters.getPages
        },
        footerIcons(){
            return this.$store.getters.getFooterIcons
        },
        langs(){
            return this.$store.getters.getLangs
        },
        isMobile(){
            return this.$store.getters.getIsMobile
        },
    },
    created(){
        this.$nuxt.$on('getPageInfo', ($event) => {
            this.bgSrc     = $event.bgSrc;
            this.pageTheme = $event.pageTheme;
            this.lang      = $event.lang;
            this.country   = $event.country;
        });
        this.$vuetify.theme.dark = false;

        if (this.isMobile) { this.drawer = false }
    },
    mounted(){
        this.setCurrentLang(this.lang);
        this.isMount = true;
    },
    methods: {
        setCurrentLang (lang){
            this.$store.commit('setCurrentLang', lang);
        },
    },
    beforeDestroy(){
        this.$nuxt.$off('getPageInfo')
    }
}
</script>

<style>
.menu-item {
    padding-right: 2px !important;
    padding-left: 2px !important;
}
.back-lowbright{
    backdrop-filter: brightness(60%) !important;
}
/* https://vuetifyjs.com/en/styles/colors/#material-colors - for pageTheme */
</style>