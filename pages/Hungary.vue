<template>
    <page-template :imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em; padding-top: 0.5em">National Assembly</p>
            <p style="margin: 0em; padding-bottom: 0.5em">Hungary</p>
        </template>

        <template v-slot:Left>
            <p>
                Parliament occupying Palace in Gothic Revival architectural style.
                Palace built in 1904.
            </p>
        </template>

        <template v-slot:Right>
            <p>National Assembly - A Unicameral Parliament of Hungary
            consists of 199 members elected to 4-year terms</p>
            <p>It's represents the people and on their behalf introduces bills, amendments 
            and elects the Prime Minister</p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
  name: 'Hungary',
  components:{
    PageTemplate
  },
  data(){
    return{
      imgNum: 21,
      country: "Hungary",
      title: "National Assembly of Hungary"
    }
  },
  created(){
      this.$nuxt.$emit('bg-path', "/" + this.country + "/Flag.jpg");
      this.$nuxt.$emit('footer-theme', "pink darken-4");
  }
}
</script>