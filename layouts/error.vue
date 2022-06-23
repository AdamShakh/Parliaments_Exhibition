<template>
  <v-app light style="margin-top: 25px">
    <v-main light class="back-lowbright">
      <v-row justify="start" align="center" style="margin-left: 26%;">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title v-if="error.statusCode === 404">
                <p>{{ pageNotFound }}</p>
            </v-card-title>
            <v-card-text v-if="error.statusCode === 404" style="font-size: 1.2em">
                <p>There is no such country.</p>
                <p>Or this country is not represented in the current exhibition.</p>
            </v-card-text>
            <v-card-title v-else>
                {{ otherError }}
            </v-card-title>
            <v-card-actions>
              <v-btn
                class="grey lighten-1"
                nuxt
                to="/"
              >
                Back to Parler Square
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'ErrorLayout',
  //layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  created (){
      this.$nuxt.$emit('footer-theme', "");
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
