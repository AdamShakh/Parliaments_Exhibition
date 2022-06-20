<template>
    <v-app light>
        <v-main light class="indigo lighten-2">
            <v-container light>
                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'IndexLayout',
    footer_icons: [
        {icon: 'mdi-home', href: "/"},
        {icon: 'mdi-github', href: "https://github.com/AdamShakh/Parliaments_Exhibition"},
        {icon: 'mdi-vuetify', href: "https://vuetifyjs.com/"},
        {icon: 'mdi-nuxt', href: "https://nuxtjs.org/"},
        {icon: 'mdi-vuejs', href: "https://vuejs.org/"},
    ],
}
</script>