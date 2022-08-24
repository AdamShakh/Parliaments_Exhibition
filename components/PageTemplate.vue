<template>
    <v-container id="page_template">

        <v-row justify="center" align="center" :style="!isMobile ? 'margin-bottom: 28px;' : 'margin-bottom: 12px;'">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%;">
                <v-card light height="65%" width="73%">
                    <v-img
                        :lazy-src="faceMinSrc" 
                        :src="faceSrc"
                        eager
                        @contextmenu="showContext(faceSrc)"
                    >
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
                    <v-card><v-img :src="leftSrc" eager @contextmenu="showContext(leftSrc)"></v-img></v-card>
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
                    <v-img :src="leftSrc" eager @contextmenu="showContext(leftSrc)"></v-img>
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
                    <v-card><v-img :src="rightSrc" eager @contextmenu="showContext(rightSrc)"></v-img></v-card>
                </v-col>
            </v-row>
        </v-card>
        <!-- forMobile -->
        <v-row v-if="isMobile" justify="center" align="center" style="margin-bottom: 20px;">
            <v-col cols="12" justify="center" align="center" style="padding-top: 0%; padding-bottom: 0%;">
                <v-card light :width="mobileWidth">
                    <v-img :src="rightSrc" eager @contextmenu="showContext(rightSrc)"></v-img>
                    <div align="justify" 
                        :style="(mobileWidth=='100%') ? 'margin: 12px' : 'margin: 15px'" 
                        style="padding-bottom: 1px; font-size: 1.09em;">
                        <slot name="Second"></slot>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <!-- === -->
        
        <v-card light style="margin-bottom: 35px;">
            <v-carousel
                :height="carouselHeight"
                cycle
                interval="8000"
                show-arrows-on-hover
                hide-delimiter-background
                :hide-delimiters="isMobile"
                progress
                :progress-color="pageTheme"
            >
                <template v-slot:prev="{ on, attrs }">
                    <v-btn
                        height="50" width="50"
                        :class="pageTheme" icon
                        :style="!isMobile ? 'opacity: 1' : 'opacity: 0.8'"
                        v-bind="attrs" v-on="on">
                        <v-icon size="50px">mdi-chevron-left</v-icon>
                    </v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                    <v-btn
                        height="50" width="50"
                        :class="pageTheme" icon
                        :style="!isMobile ? 'opacity: 1' : 'opacity: 0.8'"
                        v-bind="attrs" v-on="on">
                        <v-icon size="50px">mdi-chevron-right</v-icon>
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
                        :style="i != imgNum ? '' : 'margin-left: 30%; margin-right: 30%'"
                    >
                        <v-row
                            class="fill-height"
                            justify="center" :align="(isMobile && i==imgNum) ? 'end' : 'center'"
                        >
                            <v-img :src="image" eager @contextmenu="showContext(image, true)"></v-img> 
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-card>

        <v-menu
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
            transition="slide-y-transition"
            rounded="lg"
        >
            <v-list>
                <v-list-item @click.stop="showDialog=true; showMenu=false">
                    <v-icon style="margin-right: 10px">mdi-magnify-plus-outline</v-icon>
                    <v-list-item-title>{{ contextMenuMessages.enlarge }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click.stop="openOriginalImg">
                    <v-icon style="margin-right: 10px">mdi-file-image</v-icon>
                    <v-list-item-title>{{ contextMenuMessages.original }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click.stop="downloadImg">
                    <v-icon style="margin-right: 10px">mdi-download</v-icon>
                    <v-list-item-title>{{ contextMenuMessages.download }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
        <v-dialog
            v-model="showDialog"
            max-width="70%"
            overlay-opacity="0.6"
            :fullscreen="dialogFullScreen"
        >
            <v-card @click="showDialog=false" v-ripple="false">
                <v-toolbar
                    dark :color="pageTheme"
                    v-if="dialogFullScreen"
                ></v-toolbar>
                <v-img :src="contextSrc"></v-img>
            </v-card>
        </v-dialog>
        <a id="openOriginalImg" href="#" target="_blank" style="display:none"></a>
        <a id="downloadImg" href="#" download style="display:none"></a>

    </v-container>
</template>

<script>
export default {
    name: 'PageTemplate',
    props: {
        title:     { type: String, required: true },
        country:   { type: String, required: true },
        imgNum:    { type: Number, required: true },
        pageTheme: { type: String, required: true },
        lang:      { type: String, required: true },
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
        coatSrc(){
            return this._imgSrcs.coat(this.country)
        },
        imagesSrc(){
            let images = []
            for (let i=1; i <= this.imgNum; i++) {
                images.push('/' + this.country + '/' + i + '.jpg')
            }
            images.push(this.coatSrc)
            return images
        },
        contextMenuMessages(){
            return this.$store.getters.getContextMenuMessages
        },
    },
    created() {
        this.$nuxt.$emit('getPageInfo', {
            bgSrc:     this.flagSrc, 
            pageTheme: this.pageTheme,
            lang:      this.lang,
            country:   this.country,
        });
    },
    data: () => ({ 
        isMobile: false, mobileWidth: '', carouselHeight: 640,
        contextSrc: '', showMenu: false, x: 0, y: 0, showDialog: false, dialogFullScreen: false,
    }),
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
        showContext(src, fullScrn = (!this.isMobile) ? false : true) {
            let e = window.event
            e.preventDefault()
            this.showMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.showMenu = true
            this.contextSrc = src
            this.dialogFullScreen = fullScrn
        },
        openOriginalImg() {
            this.showMenu = false
            document.getElementById('openOriginalImg').href = this.contextSrc
            document.getElementById('openOriginalImg').click()
        },
        downloadImg() {
            this.showMenu = false
            document.getElementById('downloadImg').href = this.contextSrc
            document.getElementById('downloadImg').click()
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