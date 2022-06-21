<template>
    <page-template v-bind:imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em; padding-top: 0.5em">Moscow City Duma</p>
            <p style="margin: 0em; padding-bottom: 0.5em">Russian federal city of Moscow</p>
        </template>

        <template v-slot:Left>
            <p>
                In 2015, the Moscow City Duma moved to a new complex located in historical buildings 
                and on the territory of the former Gagarin estate on Strastnoy Boulevard. Previously, 
                from 1833 to 2009, the Novo—Catherine Hospital was located in the main building of the estate. 
            </p>
            <p>
                The old buildings were restored, and a new building was built in the protected area of the monument, 
                for meetings and public discussions, on the project of the Speech bureau.
            </p>
        </template>

        <template v-slot:Right>
            <p>
                The Moscow City Duma is the Russian regional parliament in Moscow, 
                the unicameral City Duma (city council, a local parliament) of the Russian capital city of Moscow. 
                As Moscow is one of three federal cities, the city duma's legislation can only be overridden 
                by the mayor and the federal government.
                It consists of 45 deputies.
            </p>
            <p>
               There are 12.5 million people living in Moscow, which is more than half of the European countries, 
               so Moscow can be considered as a small country in some sense.
            </p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
  name: 'Moscow',
  components:{
    PageTemplate
  },
  data(){
    return{
      imgNum: 17,
      country: "Moscow",
      title: "Moscow City Duma"
    }
  },
  created(){
    this.$nuxt.$emit('bg-path', "/" + this.country + "/Flag.jpg")
  }
}
</script>