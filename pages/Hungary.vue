<template>
    <page-template :imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em;">National Assembly</p>
            <p style="margin: 0em;">Hungary</p>
        </template>

        <template v-slot:Left>
            <p>
                Palace built in 1904.
                Parliament occupying Palace in <b>neo-Gothic Revival</b> architectural style.
                It was designed by Hungarian architect Imre Steindl.
                It has been the largest building in Hungary since its completion.
                The architectural style of the Hungarian parliament building was influenced by 
                the gothic <b>Vienna City Hall</b>,
                the <u>renaissance</u> elements like the cupola was influenced by the <u>Maria vom Siege church</u> in Vienna.
                During the People's Republic of Hungary a red star perched on the top of the dome.
            </p>
        </template>

        <template v-slot:Right>
            <p><b>National Assembly</b> - A Unicameral Parliament of Hungary
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