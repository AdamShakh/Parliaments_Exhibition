const PageImgSrcs = {
    icon:  (country) => ('/' + country + '/0_Face_icon.jpg'),
    face:  (country) => ('/' + country + '/0_Face.jpg'),
    min:   (country) => ('/' + country + '/0_Face_min.jpg'),
    left:  (country) => ('/' + country + '/0_Left.jpg'),
    right: (country) => ('/' + country + '/0_Right.jpg'),
    flag:  (country) => ('/' + country + '/Flag.jpg'),
    coat:  (country) => ('/' + country + '/Coat.png'),
};
function addImgSrcs(item) {
    const country = item.to.slice(4);
    item.icon = PageImgSrcs.icon(country);
    item.face = PageImgSrcs.face(country);
    item.min  = PageImgSrcs.min(country);
}

export const state = () => ({
    Pages: {
        en: [
            {
                icon: '', face: '', min:  '',
                title: 'Russia',
                name: 'State Duma & Federation Council',
                to: '/en/Russia',
            },
            {
                icon: '', face: '', min:  '',
                title: 'Germany',
                name: 'Bundestag',
                to: '/en/Germany'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Belarus',
                name: 'House of Represent. & Council of Republic',
                to: '/en/Belarus'
            },
            {
                icon: '', face: '', min:  '',
                title: 'United Kingdom',
                name: 'House of Commons & House of Lords',
                to: '/en/UK'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Hungary',
                name: 'National Assembly',
                to: '/en/Hungary'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Moscow',
                name: 'Moscow City Duma',
                to: '/en/Moscow',
            },
        ],
        ru: [
            {
                icon: '', face: '', min:  '',
                title: 'Россия',
                name: 'ГосДума и Совет Федерации',
                to: '/ru/Russia',
            },
            {
                icon: '', face: '', min:  '',
                title: 'Германия',
                name: 'Бундестаг',
                to: '/ru/Germany'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Беларусь',
                name: 'Палата Представ. и Совет Республики',
                to: '/ru/Belarus'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Великобритания',
                name: 'Палата Общин и Палата Лордов',
                to: '/ru/UK'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Венгрия',
                name: 'Государственное Собрание',
                to: '/ru/Hungary'
            },
            {
                icon: '', face: '', min:  '',
                title: 'Москва',
                name: 'Московская Городская Дума',
                to: '/ru/Moscow',
            },
        ],
    },
    WelcomeMessage: {
        en: {
            title: 'Welcome to',
            text:  'Here you can see Few of the Most Beautiful Parliamentary buildings in the World'
        },
        ru: {
            title: 'Добро пожаловать на',
            text:  'Здесь вы можете увидеть Несколько Самых Красивых Парламентских зданий Мира'
        }
    },
    Langs: [
        {lang: 'en', name: 'English'}, 
        {lang: 'ru', name: 'Русский'},
    ],
    CurrentLang: 'en',
    FooterIcons: [
        {icon: 'mdi-github',  href: "https://github.com/AdamShakh/Parliaments_Exhibition"},
        {icon: 'mdi-vuetify', href: "https://vuetifyjs.com/"},
        {icon: 'mdi-nuxt',    href: "https://nuxtjs.org/"},
        {icon: 'mdi-vuejs',   href: "https://vuejs.org/"},
    ],
    isMobile: false,
})

export const getters = {
    getPages(state) {
        return state.Pages[state.CurrentLang]
    },
    getFooterIcons(state) {
        return state.FooterIcons
    },
    getPageImgSrcs(state) {
        return PageImgSrcs
    },
    getLangs(state){
        return state.Langs
    },
    getCurrentLang(state){
        return state.CurrentLang
    },
    getWelcomeMessage(state){
        return state.WelcomeMessage[state.CurrentLang]
    },
    getIsMobile(state){
        return state.isMobile
    },
}
export const mutations = {
    addImgSrcsForCurrentLang(state){
        state.Pages[state.CurrentLang].forEach(addImgSrcs)
    },
    setCurrentLang(state, lang){
        if (state.Langs.filter(_lang => _lang.lang == lang).length) {
            state.CurrentLang = lang;
        }
    },
    setIsMobile(state, isIt){
        state.isMobile = isIt;
    },
}