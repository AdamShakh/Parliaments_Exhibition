<template>
    <page-template v-bind:imgNum=this.imgNum :country=this.country :title=this.title>

        <template v-slot:Face>
            <p style="margin: 0em;">State Duma & Federation Council</p>
            <p style="margin: 0em;">Federal Assembly</p>
            <p style="margin: 0em;">Russian Federation</p>
        </template>

        <template v-slot:Left>
            <p>
                State Duma is placed in the building of <b>Soviet of Labor and Defense</b> Moscow Russia built in 1935.
                Previously in that building breafly were placed a <b>Soviet of Labor and Defense</b> of USSR
                Than in building were placed part of <b>Soviet of People's Commissars - Soviet of Ministers</b> of USSR.
                And finally there were placed <b>State Planning Committee</b>
                After Soviet Union collapse, since 1994, 
                the <b>State Duma</b> of RF has been working in this building.
            </p>
            <p>
                Federation Council is placed in the building of 
                <b>State Organization of Construction and State Communal Architecture Organization</b> built in 1936.
            </p>
        </template>

        <template v-slot:Right>
            <p>Federal Assembly - A bicameral Parliament of Russia.</p>
            <p>
                <b>State Duma</b> is a lower house that's represents the <b>People</b> of country. There are 450 Deputies.
                The Duma creates bills and amendments on behalf of the people. The Prime Minister is also accountable to the Duma.
            </p>
            <p>
                <b>Federation Council</b> is an upper house that's represents the <b>Federal Subject</b>. 
                There are 170 Senators, 2 from every of 85 subjects.
                The Federation Council scrutinises bills that have been approved by the State Duma. 
                It regularly reviews and amends bills from the Duma. 
                In this capacity, the Federation Council checks the acceptability of amendments of
                State Duma on behalf of the subjects.
            </p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
  name: 'Russia',
  components:{
    PageTemplate
  },
  data(){
    return{
      imgNum: 24,
      country: "Russia",
      title: "State Duma & SovFed of Russia"
    }
  },
  created(){
      this.$nuxt.$emit('bg-path', "/" + this.country + "/Flag.jpg");
      this.$nuxt.$emit('footer-theme', "indigo darken-2");
  }
}
</script>