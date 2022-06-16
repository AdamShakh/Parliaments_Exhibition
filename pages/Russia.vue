<template>
  <v-container>
    <v-row justify="center" align="center">
        <v-col cols="12" justify="center" align="center">
          <v-card light height="65%" width="65%">
            <v-img src="/Russia/0_Face.jpg"></v-img>
            <div align="center">
                <h4>State Duma & Council of Federation</h4>
                <h4>Federal Assembly</h4>
                <h4>Russian Federation</h4>
            </div>
          </v-card>
        </v-col>
    </v-row>

    <v-card>
      <v-row justify="center" align="center">
          <v-col cols="6" justify="start" align="center">
            <v-img src="/Russia/0_Left.jpg"></v-img>
          </v-col>
          <v-col cols="6" justify="end" align="center">
            <p>
              State Duma is placed in the building of <b>Soviet of Labor and Defense</b>.
              Previously in that building breafly were placed a <b>Soviet of Labor and Defense</b> of USSR
              Than in building were placed part of <b>Soviet of People's Commissars - Soviet of Ministers</b> of USSR.
              And finally there were placed <b>State Planning Committee</b>
              After Soviet Union collapse, since 1994, 
              the <b>State Duma</b> of RF has been working in this building.
            </p>
          </v-col>
      </v-row>
    </v-card>

    <v-card>
      <v-row justify="center" align="center">
        <v-col cols="6" justify="start" align="center">
          <div>
            <p>Federal Assembly - A bicameral Parliament of Russia.</p>
            <p><b>State Duma</b> is a lower house that's represents the <b>People</b> of country. There are 450 Deputies</p>
            <p><b>Council of Federation</b> is an upper house that's represents the <b>Federal Subject</b>. 
            There are 170 Senators, 2 from every of 85 subjects</p>
          </div>
        </v-col>
        <v-col cols="6" justify="start" align="center">
          <v-img src="/Russia/0_Right.jpg"></v-img>
        </v-col>
      </v-row>
    </v-card>

    <v-card>
      <v-carousel 
        v-model="model" 
        height="640"
        cycle
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item
          v-for="(image, i) in images"
          :key="i"
        >
          <v-sheet
            height="100%"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-img :src="image"></v-img> 
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'Russia',
  computed: {
    images (){
      let images = []
      let n=18;
      for (let i=1; i<=n; i++) {
        images.push('/Russia/' + i + '.jpg')
      }
      console.log(images)
      return images
    }
  },
  head () {
    const title = 'State Duma & SovFed of Russia'
    return {
      title
    }
  }
}
</script>