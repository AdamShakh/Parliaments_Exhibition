<template>
  <v-container>
    <v-row justify="center" align="center">
        <v-col cols="12" justify="center" align="center">
          <v-card light height="65%" width="65%">
            <v-img :lazy-src="'/'+this.country+'/0_Face_min.jpg'" :src="'/' + this.country + '/0_Face.jpg'"></v-img>
            <div align="center" style="font-size: 1.2em;">
                <slot name="Face"></slot>
            </div>
          </v-card>
        </v-col>
    </v-row>
    <br>

    <v-card light>
      <v-row justify="center" align="center">
          <v-col cols="6" justify="start" align="center">
            <v-card><v-img :src="'/' + this.country + '/0_Left.jpg'"></v-img></v-card>
          </v-col>
          <v-col cols="6" justify="end" align="center">
            <div style="margin: 1em">
              <slot name="Left"></slot>
            </div>
          </v-col>
      </v-row>
    </v-card>
    <br> <br>

    <v-card light>
      <v-row justify="center" align="center">
        <v-col cols="6" justify="start" align="center">
          <div style="margin: 1em">
            <slot name="Right"></slot>
          </div>
        </v-col>
        <v-col cols="6" justify="start" align="center">
          <v-card><v-img :src="'/' + this.country + '/0_Right.jpg'"></v-img></v-card>
        </v-col>
      </v-row>
    </v-card>
    <br> <br>
    
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
  name: 'PageTemplate',
  props: {
    imgNum: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
  },
  computed: {
    images (){
      let images = []
      for (let i=1; i<=this.imgNum; i++) {
        images.push('/' + this.country + '/' + i + '.jpg')
      }
      return images
    }
  },
  head () {
    // const title = 'State Duma & SovFed of Russia'
    const title = this.title
    return {
      title
    }
  }
}
</script>