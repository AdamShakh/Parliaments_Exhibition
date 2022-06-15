<template>
  <v-app light>
    <v-main light>
      <v-row justify="center" align="left">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title v-if="error.statusCode === 404">
                {{ pageNotFound }}
            </v-card-title>
            <v-card-title v-else>
                {{ otherError }}
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="primary"
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
  name: 'EmptyLayout',
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
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
