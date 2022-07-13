<template>
<v-app>
    
    <v-img :src="bg_path" style="position: fixed; background-size:cover; width: 100%; height: 100%;">
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
                router
                exact
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
                router
                exact
            >
                <v-list-item-avatar width="3em" height="3em">
                    <v-img :src="page.icon"></v-img>
                </v-list-item-avatar>
                
                <v-list-item-content>
                    <v-list-item-title v-text="page.title" />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main light class="back-lowbright">

        <v-container id="menu_toggle" style="padding-bottom: 0px;">
            <v-row
                align="center"
                justify="start"
            >
                <v-btn
                    @click.stop="drawer = !drawer"
                    fab
                    small
                    :class="footer_theme"
                    style="margin-left: 10px; margin-top: 10px"
                    dark
                >
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </v-row>
        </v-container>

        <Nuxt />
        
        <v-container id="footer" style="max-height: 100%; max-width: 100%">
            <v-row justify="center" align="center">
                <v-col cols="5" justify="center" align="center">
                    <v-card :class="footer_theme" dark>
                        <v-card-text>
                            <v-btn v-if="!drawer" class="mx-5" icon fab small router to="/">
                                <v-icon size="30px">mdi-home</v-icon>
                            </v-btn>
                            <v-btn
                                v-for="(icon, i) in footer_icons"
                                :key="i"
                                class="mx-5" icon fab small
                                :href="icon.href" target="_blank"
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
    name: 'DefaultLayout',
    data() {
        return {
            drawer: true,
            bg_path: '',
            footer_theme: 'blue-grey darken-3',
        }
    },
    computed: {
        pages(){
            return this.$store.getters["getPages"]; 
        },
        footer_icons(){
            return this.$store.getters.getFooterIcons
        }
    },
    created(){
        this.$nuxt.$on('bg-path', ($event) => (this.bg_path = $event));
        this.$nuxt.$on('footer-theme', ($event) => (this.footer_theme = $event));
    },
    mounted(){
        this.$vuetify.theme.dark = false;
    },
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
/* https://vuetifyjs.com/en/styles/colors/#material-colors - for footer_theme */
</style>