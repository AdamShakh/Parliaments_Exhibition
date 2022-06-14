<template>
  <v-row justify="center" align="center">
    <v-col 
        cols="12" sm="8" md="6"
        v-for="(page, i) in pages"
        :key="i"
    >
        <v-card light
            :to="page.to"
            router
            hover="true"
        >
            <v-img :src="page.icon"></v-img>
            <v-card-title class="headline">
                {{ page.title }}
            </v-card-title>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
    computed: {
        pages(){
            return this.$store.getters["getPages"].slice(2); 
        }
    }
}
</script>