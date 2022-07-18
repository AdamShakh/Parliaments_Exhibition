<template>
    <page-template v-bind=info>

        <template v-slot:Face>
            <div>National Assembly</div>
            <div>Hungary</div>
        </template>

        <template v-slot:First>
            <p>
                Palace built in 1904.
                Parliament occupying Palace in <b>neo-Gothic Revival</b> architectural style.
                It was designed by Hungarian architect Imre Steindl.
                It has been the largest building in Hungary since its completion.
                The architectural style of the Hungarian parliament building was influenced by 
                the gothic <b>Vienna City Hall</b>,
                the <b>Renaissance</b> elements like the cupola was influenced by the <b>Maria vom Siege church</b> in Vienna.
                During the People's Republic of Hungary a <u>red star</u> perched on the top of the dome.
            </p>
        </template>

        <template v-slot:Second>
            <p><b>National Assembly</b> - A Unicameral Parliament of Hungary
            consists of 199 members elected to 4-year terms</p>
            <p>It's represents the people and on their behalf introduces bills, amendments 
            and elects the Prime Minister</p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
    name: 'Hungary',
    components:{
        PageTemplate
    },
    data(){
        return{
            info: {
                imgNum: 21,
                country: "Hungary",
                title: "National Assembly of Hungary",
                footerTheme: "pink darken-4",
                lang: 'en',
            }
        }
    }
}
</script>