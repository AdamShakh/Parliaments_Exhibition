const PageImgSrcs = {
    icon:  (country) => ('/' + country + '/0_Face_icon.jpg'),
    face:  (country) => ('/' + country + '/0_Face.jpg'),
    min:   (country) => ('/' + country + '/0_Face_min.jpg'),
    left:  (country) => ('/' + country + '/0_Left.jpg'),
    right: (country) => ('/' + country + '/0_Right.jpg'),
    flag:  (country) => ('/' + country + '/Flag.jpg'),
};
function addImgSrcs(item){
    const country = item.to.slice(1);
    item.icon = PageImgSrcs.icon(country);
    item.face = PageImgSrcs.face(country);
    item.min  = PageImgSrcs.min(country);
}

export const state = () => ({
    Pages: [
        {
            icon: '', face: '', min:  '',
            title: 'Russia',
            name: 'State Duma & Federation Council',
            to: '/Russia',
        },
        {
            icon: '', face: '', min:  '',
            title: 'Germany',
            name: 'Bundestag',
            to: '/Germany'
        },
        {
            icon: '', face: '', min:  '',
            title: 'Belarus',
            name: 'House of Represent. & Council of Republic',
            to: '/Belarus'
        },
        {
            icon: '', face: '', min:  '',
            title: 'United Kingdom',
            name: 'House of Commons & House of Lords',
            to: '/UK'
        },
        {
            icon: '', face: '', min:  '',
            title: 'Hungary',
            name: 'National Assembly',
            to: '/Hungary'
        },
        {
            icon: '', face: '', min:  '',
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
        state.Pages.forEach(addImgSrcs)
        return state.Pages
    },
    getFooterIcons(state) {
        return state.FooterIcons
    },
    getPageImgSrcs(state) {
        return PageImgSrcs
    },
}
// export const mutations = {
//     setPages(state, newPages) {
//         state.Pages = newPages
//     }
// }