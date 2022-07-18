<template>
    <page-template v-bind=info>

        <template v-slot:Face>
            <div>Bundestag</div>
            <div>Federal Republic of Germany</div>
        </template>

        <template v-slot:First>
            <p>
                Nowadays Parliament of Germany - Bundestag - occupying several building in "Administrative district".
                Among these buildings: 
                <b>Reichstag-building, the Jakob-Kaiser-Haus, Paul-Löbe-Haus and Marie-Elisabeth-Lüders-Haus.</b> 
                Last two buildings with the Federal Chancellery are part of so called "Federal Ribbon".
            </p>
            <p>
                Plenary sessions are held in the Reichstag building itself, and there is a permanent exhibition 
                about the German parliament, with a beautiful public space under the dome. 
                The offices of the deputies are located in the Jakob-Kaiser-Haus. 
                In the Paul-Löbe-Haus there are committees, offices, and small meeting rooms. 
                There is a library in the Elisabeth-Lüders-Haus.
            </p>
        </template>

        <template v-slot:Second>
            <p>
                <b>Bundestag (Federal Assembly)</b> - Unicameral Federal Parliament. 
                It is the only federal representative body that is directly elected by the German people.
            </p>
            <p>
                It is comparable to the United States House of Representatives, 
                the House of Commons of the United Kingdom 
                and State Duma of Russian Federation.
                It's one of the legislative bodies of Germany and thus it is the historical successor 
                to the earlier Reichstag.
            </p>
            <p>
                <b>Bundesrat (Federal Council)</b> - It is usually considered the upper house of parliament, 
                although it is not formally such. 
                Аnd is a separate legislative body that de facto performs the role of the upper house
            </p>
        </template>

    </page-template>
</template>

<script>
import PageTemplate from '@/components/PageTemplate.vue'

export default{
    name: 'Germany',
    components:{
        PageTemplate
    },
    data(){
        return{
            info: {
                imgNum: 25,
                country: "Germany",
                title: "Bundestag of Germany",
                footerTheme: "red darken-3",
                lang: 'en',
            }
        }
    }
}
</script>