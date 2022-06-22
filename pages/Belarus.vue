<template>
    <page-template :imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em; padding-top: 0.5em">House of Representatives & Council of Republic</p>
            <p style="margin: 0em;">National Assembly</p>
            <p style="margin: 0em; padding-bottom: 0.5em">Republic of Belarus</p>
        </template>

        <template v-slot:Left>
            <p>
                The Lower House of Parliament and the Cabinet of Ministers are located in the <b>Government building</b>
                - one of the best monuments of <b>Soviet Constructivism</b>, which marked the beginning of the 
                formation of a new city center.
                It was built in 1934 and designed by Iosif Langbard. 
                It stands behind a statue of Vladimir Lenin and is <u>one of the few buildings 
                that survived the Great Patriotic War</u>.
            </p>
            <p>
                The Upper House are located in the old building of the <b>Lenin National Library</b>,
                that is also an excellent example of <b>Soviet Constructivism</b> of the early 20th century.
            </p>
        </template>

        <template v-slot:Right>
            <p>
                The House of Representatives of the National Assembly of the Republic of Belarus 
                is the lower house of the parliament of Belarus, while the upper house is the Council of the Republic.
                It was established after the Constitution of Belarus was amended in 1996, 
                replacing the Supreme Council of Belarus.
                It consists of 110 deputies elected to four year terms
            </p>
            <p>
                The Council of the Republic of the National Assembly of the Republic of Belarus 
                is the upper house of the parliament of Belarus.
                The Council consists of 64 members, and the representation is based geographically, 
                with most of the elected members come from civil society organizations, labour collectives 
                and public associations in their jurisdiction
            </p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
  name: 'Belarus',
  components:{
    PageTemplate
  },
  data(){
    return{
      imgNum: 25,
      country: "Belarus",
      title: "House of Representatives & Council of Republic"
    }
  },
  created(){
    this.$nuxt.$emit('bg-path', "/" + this.country + "/Flag.jpg")
  }
}
</script>