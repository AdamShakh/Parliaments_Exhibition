<template>
    <page-template v-bind=info>

        <template v-slot:Face>
            <div>Moscow City Duma</div>
            <div>Russian federal city of Moscow</div>
        </template>

        <template v-slot:First>
            <p>
                In 2015, the Moscow City Duma moved to a new complex located in historical buildings 
                and on the territory of the former <b>dukes Gagarin estate</b> on Strastnoy Boulevard. Previously, 
                from 1833 to 2009, the <b>Novo—Catherine Hospital</b> was located in the main building of the estate. 
            </p>
            <p>
                The <u>old buildings were restored</u>, and a <u>new building was built in the protected area of the monument</u>, 
                for meetings and public discussions, on the project of the Speech bureau.
            </p>
        </template>

        <template v-slot:Second>
            <p>
                <b>The Moscow City Duma</b> is the Russian regional parliament in Moscow, 
                the unicameral City Duma (city council, a local parliament) of the Russian capital city of Moscow. 
                As Moscow is one of three federal cities, the city duma's legislation can only be overridden 
                by the mayor and the federal government.
                It consists of 45 deputies.
            </p>
            <p>
               There are <u>12.5 million people living in Moscow</u>, which is more than in half of the European countries, 
               so Moscow can be considered as a <u>small country</u> in some sense.
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
            info: {
                imgNum: 17,
                country: "Moscow",
                title: "City Duma of Moscow",
                pageTheme: "red darken-2",
                lang: 'en',
            }
        }
    }
}
</script>