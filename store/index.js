const faceTemplates = {
    icon: (country) => ('/' + country + '/0_Face_icon.jpg'),
    face: (country) => ('/' + country + '/0_Face.jpg'),
    min:  (country) => ('/' + country + '/0_Face_min.jpg'),
};
export const state = () => ({
    Pages: [
        {
            icon: faceTemplates.icon('Russia'),
            face: faceTemplates.face('Russia'),
            min:  faceTemplates.min('Russia'),
            title: 'Russia',
            name: 'State Duma & Federation Council',
            to: '/Russia',
        },
        {
            icon: faceTemplates.icon('Germany'),
            face: faceTemplates.face('Germany'),
            min:  faceTemplates.min('Germany'),
            title: 'Germany',
            name: 'Bundestag',
            to: '/Germany'
        },
        {
            icon: faceTemplates.icon('Belarus'),
            face: faceTemplates.face('Belarus'),
            min:  faceTemplates.min('Belarus'),
            title: 'Belarus',
            name: 'House of Represent. & Council of Republic',
            to: '/Belarus'
        },
        {
            icon: faceTemplates.icon('UK'),
            face: faceTemplates.face('UK'),
            min:  faceTemplates.min('UK'),
            title: 'United Kingdom',
            name: 'House of Commons & House of Lords',
            to: '/UK'
        },
        {
            icon: faceTemplates.icon('Hungary'),
            face: faceTemplates.face('Hungary'),
            min:  faceTemplates.min('Hungary'),
            title: 'Hungary',
            name: 'National Assembly',
            to: '/Hungary'
        },
        {
            icon: faceTemplates.icon('Moscow'),
            face: faceTemplates.face('Moscow'),
            min:  faceTemplates.min('Moscow'),
            title: 'Moscow',
            name: 'Moscow City Duma',
            to: '/Moscow',
        },
    ],
    FooterIcons: [
        {icon: 'mdi-github',  href: "https://github.com/AdamShakh/Parliaments_Exhibition"},
        {icon: 'mdi-vuetify', href: "https://vuetifyjs.com/"},
        {icon: 'mdi-nuxt',    href: "https://nuxtjs.org/"},
        {icon: 'mdi-vuejs',   href: "https://vuejs.org/"},
    ],
})
export const getters = {
    getPages(state) {
        return state.Pages
    },
    getFooterIcons(state) {
        return state.FooterIcons
    }
}
export const mutations = {
    setPages(state, newPages) {
        state.Pages = newPages
    }
}