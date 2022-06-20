<template>
    <page-template :imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em; padding-top: 0.5em">House of Commons & House of Lords</p>
            <p style="margin: 0em;">Parliament</p>
            <p style="margin: 0em; padding-bottom: 0.5em">United Kingdom</p>
        </template>

        <template v-slot:Left>
            Parliament occupying Palace of Westminster.
            It's lies on the north bank of the River Thames in the City of Westminster
            Its name, which derives from the neighbouring Westminster Abbey, 
            may refer to several historic structures but most often: the Old Palace, 
            a medieval building-complex largely destroyed by fire in 1834, or its replacement, 
            the New Palace that stands today.
        </template>

        <template v-slot:Right>
            <p>United Kingdom have a bicameral Parliament.</p>
            <p>
                House of Commons is an elected body consisting of 650 members known as members of Parliament (MPs). 
                MPs are elected to represent constituencies by the first-past-the-post system and 
                hold their seats until Parliament is dissolved.
                The lower house represents the people and on their behalf introduces bills, amendments 
                and elects the Prime Minister.
            </p>
            <p>
                House of Lords is an non-elected body consisting of 768. 
                Membership is by appointment, heredity or official function.
                The House of Lords scrutinises bills that have been approved by the House of Commons.
                It regularly reviews and amends bills from the Commons.
                In this capacity, the House of Lords acts as a check on the more powerful House of Commons
            </p>
        </template> 

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
  name: 'UK',
  components:{
    PageTemplate
  },
  data(){
    return{
      imgNum: 17,
      country: "UK",
      title: "UK Parliament"
    }
  },
  created(){
    $nuxt.$emit('bg-path', "/" + this.country + "/Flag.jpg")
  }
}
</script>