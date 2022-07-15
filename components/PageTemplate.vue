<template>
    <v-container id="page_template">
        <v-row justify="center" align="center">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%;">
                <v-card light height="65%" width="73%" >
                    <v-img
                        :lazy-src="faceMinSrc" 
                        :src="faceSrc">
                    </v-img>
                    <div align="center" style="font-size: 1.3em; padding: 0.5em;">
                        <slot name="Face"></slot>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <br>

        <v-card light>
            <v-row justify="center" align="center">
                <v-col cols="6" justify="start" align="center">
                    <v-card><v-img :src="leftSrc"></v-img></v-card>
                </v-col>
                <v-col cols="6" justify="end" align="center">
                    <div style="margin-right: 1em; margin-top: 16px; font-size: 1.09em">
                        <slot name="First"></slot>
                    </div>
                </v-col>
            </v-row>
        </v-card>
        <br> <br>

        <v-card light>
            <v-row justify="center" align="center">
                <v-col cols="6" justify="start" align="center">
                    <div style="margin-left: 1em; margin-top: 16px; font-size: 1.09em">
                        <slot name="Second"></slot>
                    </div>
                </v-col>
                <v-col cols="6" justify="end" align="center">
                    <v-card><v-img :src="rightSrc"></v-img></v-card>
                </v-col>
            </v-row>
        </v-card>
        <br> <br>
        
        <v-card light>
            <v-carousel
                height="640"
                cycle
                show-arrows-on-hover
                hide-delimiter-background
            >
                <v-carousel-item
                    v-for="(image, i) in imagesSrc"
                    :key="i"
                >
                    <v-sheet
                        height="100%"
                        tile
                    >
                        <v-row
                            class="fill-height"
                            justify="center" align="center"
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
        title: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        imgNum: {
            type: Number,
            required: true
        },
        footerTheme: {
            type: String,
            required: true
        },
    },
    computed: {
        _imgSrcs(){
            return this.$store.getters.getPageImgSrcs
        },
        faceSrc(){
            return this._imgSrcs.face(this.country)
        },
        faceMinSrc(){
            return this._imgSrcs.min(this.country)
        },
        leftSrc(){
            return this._imgSrcs.left(this.country)
        },
        rightSrc(){
            return this._imgSrcs.right(this.country)
        },
        flagSrc(){
            return this._imgSrcs.flag(this.country)
        },
        imagesSrc(){
            let images = []
            for (let i=1; i <= this.imgNum; i++) {
                images.push('/' + this.country + '/' + i + '.jpg')
            }
            return images
        }
    },
    created() {
        this.$nuxt.$emit('bgSrc-footerThm', {
            bgSrc: this.flagSrc, 
            footerThm: this.footerTheme
        })

        // this.$nuxt.$emit('bg-path', this.flagSrc);
        // this.$nuxt.$emit('footer-theme', this.footerTheme);
    },
    head() {
        const title = this.title
        return { title }
    }
}
</script>