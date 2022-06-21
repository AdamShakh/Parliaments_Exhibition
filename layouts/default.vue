<template>
  <v-app>
    
    <v-img :src="bg_path" style="position: fixed; background-size:cover; width: 100%; height: 100%;">
    </v-img>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="true"
      mini-variant-width="5em"
      :clipped="clipped"
      expand-on-hover
      fixed
      app
      light
      class="back-lowbright"
    >
      <v-list>
        <!-- <v-list-item-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-action> -->

        <v-list-item
          class="menu-item"
          v-for="(page, i) in pages"
          :key="i"
          :to="page.to"
          router
          exact
        >
            <v-list-item-avatar width="4em" height="4em">
              <v-img :src="page.icon"></v-img>
            </v-list-item-avatar>
            
            <v-list-item-content>
              <v-list-item-title v-text="page.title" />
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      light
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar> -->



    <v-main light class="back-lowbright">

      <v-container>
        <v-row
          align="center"
          justify="left"
        >
          <v-btn
            @click.stop="drawer = !drawer"
            fab
            small
            icon
          >
            <v-icon>mdi-apps</v-icon>
          </v-btn>
        </v-row>
      </v-container>

      <v-container light>
        <Nuxt />
      </v-container>

      <v-container style="max-height: '100%'; max-width: 100%">
          <v-row justify="center" align="center">
              <v-col cols="5" justify="center" align="center">
                  <v-card class="indigo darken-1" dark>
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
    name: 'DefaultLayout',
    data() {
        return {
            drawer: true,
            footer_icons: [
              {icon: 'mdi-home', href: "/"},
              {icon: 'mdi-github', href: "https://github.com/AdamShakh/Parliaments_Exhibition"},
              {icon: 'mdi-vuetify', href: "https://vuetifyjs.com/"},
              {icon: 'mdi-nuxt', href: "https://nuxtjs.org/"},
              {icon: 'mdi-vuejs', href: "https://vuejs.org/"},
            ],
            clipped: true,
            fixed: false,
            bg_path: '',
        }
    },
    computed: {
        pages(){
            return this.$store.getters["getPages"]; 
        }
    },
    mounted(){
        // this.$store.commit("setPages", this.pages);
        this.$vuetify.theme.dark = false;
    },
    created(){
        this.$nuxt.$on('bg-path', ($event) => (this.bg_path = $event))
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
/* div[data-app='true']  */ 
/* .bgflag {
    background: url(/Russia/Flag.jpg) no-repeat center center fixed !important;
    background-size:cover; 
    width: 100%;
    height: 100%;
} */
</style>