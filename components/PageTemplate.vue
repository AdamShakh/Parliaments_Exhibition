<template>
    <v-container id="page_template">

        <v-row justify="center" align="center" :style="!isMobile ? 'margin-bottom: 28px;' : 'margin-bottom: 12px;'">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%;">
                <v-card light height="65%" width="73%">
                    <v-img
                        :lazy-src="faceMinSrc" 
                        :src="faceSrc"
                        eager>
                    </v-img>
                    <div align="center" style="font-size: 1.3em; padding: 10px;">
                        <slot name="Face"></slot>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- === -->

        <!-- forDesktop -->
        <v-card v-if="!isMobile" light style="margin-bottom: 35px;">
            <v-row justify="center" align="center">
                <v-col cols="6" justify="start" align="center">
                    <v-card><v-img :src="leftSrc" eager></v-img></v-card>
                </v-col>
                <v-col cols="6" justify="end" align="start">
                    <div style="margin-right: 20px; margin-top: 16px; font-size: 1.09em;" align="justify">
                        <slot name="First"></slot>
                    </div>
                </v-col>
            </v-row>
        </v-card>
        <!-- forMobile -->
        <v-row v-if="isMobile" justify="center" align="center" style="margin-bottom: 18px;">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%; padding-bottom: 0%;">
                <v-card light :width="mobileWidth">
                    <v-img :src="leftSrc" eager></v-img>
                    <div align="justify" 
                        :style="(mobileWidth=='100%') ? 'margin: 12px' : 'margin: 15px'" 
                        style="padding-bottom: 1px; font-size: 1.09em;">
                        <slot name="First"></slot>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- === -->

        <!-- forDesktop -->
        <v-card v-if="!isMobile" light style="margin-bottom: 45px;">
            <v-row justify="center" align="center">
                <v-col cols="6" justify="start" align="start">
                    <div style="margin-left: 20px; margin-top: 16px; font-size: 1.09em;" align="justify">
                        <slot name="Second"></slot>
                    </div>
                </v-col>
                <v-col cols="6" justify="end" align="center">
                    <v-card><v-img :src="rightSrc" eager></v-img></v-card>
                </v-col>
            </v-row>
        </v-card>
        <!-- forMobile -->
        <v-row v-if="isMobile" justify="center" align="center" style="margin-bottom: 20px;">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%; padding-bottom: 0%;">
                <v-card light :width="mobileWidth">
                    <v-img :src="rightSrc" eager></v-img>
                    <div align="justify" 
                        :style="(mobileWidth=='100%') ? 'margin: 12px' : 'margin: 15px'" 
                        style="padding-bottom: 1px; font-size: 1.09em;">
                        <slot name="Second"></slot>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- === -->
        
        <v-card light style="margin-bottom: 25px;">
            <v-carousel
                :height="carouselHeight"
                cycle
                interval="8000"
                show-arrows-on-hover
                hide-delimiter-background
                :hide-delimiters="isMobile"
                progress
                :progress-color="footerTheme"
            >
                <template v-slot:prev="{ on, attrs }">
                    <v-btn
                        height="45" width="45"
                        :class="footerTheme" icon
                        style="opacity: 0.8"
                        v-bind="attrs" v-on="on">
                        <v-icon size="45px">mdi-chevron-left</v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn
                        height="45" width="45"
                        :class="footerTheme" icon
                        style="opacity: 0.8"
                        v-bind="attrs" v-on="on">
                        <v-icon size="45px">mdi-chevron-right</v-icon>
                    </v-btn>
                </template>
                <v-carousel-item
                    v-for="(image, i) in imagesSrc"
                    :key="i"
                    eager
                >
                    <v-sheet
                        height="100%"
                        tile
                    >
                        <v-row
                            class="fill-height"
                            justify="center" align="center"
                        >
                            <v-img :src="image" eager></v-img> 
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
            type: String, required: true
        },
        country: {
            type: String, required: true
        },
        imgNum: {
            type: Number, required: true
        },
        footerTheme: {
            type: String, required: true
        },
        lang: {
            type: String, required: true
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
        },
    },
    created() {
        this.$nuxt.$emit('getPageInfo', {
            bgSrc:     this.flagSrc, 
            footerThm: this.footerTheme,
            lang:      this.lang,
            country:   this.country,
        });
    },
    data: () => ({ isMobile: false, mobileWidth: '', carouselHeight: 640, }),
    methods: {
        adaptiveSize() {
            if (window.innerWidth < 520){
                this.isMobile = true
                this.mobileWidth = '100%'
                this.carouselHeight = 240
            }
            else if (window.innerWidth < 880){
                this.isMobile = true
                this.mobileWidth = '90%'
                this.carouselHeight = 440
            }
            else if (window.innerWidth > 1904){
                this.isMobile = false
                this.carouselHeight = 1000
            }
            else if (window.innerWidth > 1600){
                this.isMobile = false
                this.carouselHeight = 760
            }
            else if (window.innerWidth > 880){
                this.isMobile = false
                this.carouselHeight = 640
            }
        },
    },
    mounted() {
        //if (process.client) {
        this.adaptiveSize();
        window.addEventListener('resize', this.adaptiveSize, { passive: true });
        this.$store.commit('setIsMobile', this.isMobile);
    },
    watch: {
        isMobile(isIt){
            this.$store.commit('setIsMobile', isIt);
        },
    },
    beforeDestroy() {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', this.adaptiveSize, { passive: true })
    },
    head() {
        const title = this.title
        return { title }
    }
}
</script>