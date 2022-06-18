<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="true"
      mini-variant-width="5em"
      :clipped="clipped"
      expand-on-hover
      fixed
      app
      light
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

    <v-container class="fill-height">
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

    <v-main light>
      <v-container light>
        <Nuxt />
      </v-container>
    </v-main>

    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="4" justify="center" align="center">
          <v-card>
            <v-footer
              absolute
              app
              :padless="false"
            >
              <v-card>
                <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                  {{ new Date().getFullYear() }} — <strong>Adam Shakhbanov</strong>
                </v-card-text>
              </v-card>
            </v-footer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      pages: [
        {
          icon: '/home.png',
          title: 'Parler Square',
          to: '/'
        },
        {
          icon: '/Russia/0_Face_min.jpg',
          face: '/Russia/0_Face.jpg',
          title: 'Russia',
          name: 'State Duma & Federation Council - Federal Assembly',
          to: '/Russia',
        },
        {
          icon: '/Germany/0_Face_icon.jpg',
          face: '/Germany/0_Face.jpg',
          title: 'Germany',
          name: 'Bundestag',
          to: '/Germany'
        },
        {
          icon: '/UK/0_Face_icon.jpg',
          face: '/UK/0_Face.jpg',
          title: 'United Kingdom',
          name: 'House of Commons & House of Lords',
          to: '/UK'
        },
        {
          icon: '/Germany/1.jpg',
          face: '',
          title: 'Hungary',
          name: '',
          to: '/Hungary'
        }
      ],
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
      clipped: true,
      fixed: false,
    }
  },
  mounted(){
    this.$store.commit("setPages", this.pages);
    this.$vuetify.theme.light;
  }
}
</script>

<style>
.menu-item {
    padding-right: 2px !important;
    padding-left: 2px !important;
}
</style>