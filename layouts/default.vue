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
        <!-- <v-list-item-avatar>
          <v-img src="/Russia/0_Face.jpg"></v-img>
        </v-list-item-avatar> -->
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

    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
          icon: 'v.png',
          title: 'Welcome',
          to: '/Welcome'
        },
        {
          icon: '/home.png',
          title: 'Parler Square',
          to: '/'
        },
        {
          icon: '/Russia/0_Face.jpg',
          title: 'Russia',
          name: 'State Duma & Council of Federation - Federal Assembly',
          to: '/Russia',
        },
        {
          icon: '/Germany/0_Face.jpg',
          title: 'Germany',
          name: 'Bundestag',
          to: '/Germany'
        },
        {
          icon: '/Russia/2.jpg',
          title: 'Inspire',
          name: 'Inpire BS',
          to: '/inspire'
        },
        {
          icon: '/Germany/1.jpg',
          title: 'Tutor',
          to: '/tutorial'
        }
      ],
      clipped: true,
      fixed: false,
    }
  },
  mounted(){
    this.$store.commit("setPages", this.pages)
  }
}
</script>

<style>
.menu-item {
    padding-right: 2px !important;
    padding-left: 2px !important;
}
</style>