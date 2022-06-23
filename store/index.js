export const state = () => ({
    Pages: [
        {
            icon: '/Russia/0_Face_min.jpg',
            face: '/Russia/0_Face.jpg',
            min: '/Russia/0_Face_min.jpg',
            title: 'Russia',
            name: 'State Duma & Federation Council',
            to: '/Russia',
        },
        {
            icon: '/Germany/0_Face_icon.jpg',
            face: '/Germany/0_Face.jpg',
            min: '/Germany/0_Face_min.jpg',
            title: 'Germany',
            name: 'Bundestag',
            to: '/Germany'
        },
        {
            icon: '/Belarus/0_Face_icon.jpg',
            face: '/Belarus/0_Face.jpg',
            min: '/Belarus/0_Face_min.jpg',
            title: 'Belarus',
            name: 'House of Represent. & Council of Republic',
            to: '/Belarus'
        },
        {
            icon: '/UK/0_Face_icon.jpg',
            face: '/UK/0_Face.jpg',
            min: '/UK/0_Face_min.jpg',
            title: 'United Kingdom',
            name: 'House of Commons & House of Lords',
            to: '/UK'
        },
        {
            icon: '/Hungary/0_Face_icon.jpg',
            face: '/Hungary/0_Face.jpg',
            min: '/Hungary/0_Face_min.jpg',
            title: 'Hungary',
            name: 'National Assembly',
            to: '/Hungary'
        },
        {
            icon: '/Moscow/0_Face_icon.jpg',
            face: '/Moscow/0_Face.jpg',
            min: '/Moscow/0_Face_min.jpg',
            title: 'Moscow',
            name: 'Moscow City Duma',
            to: '/Moscow',
        },
    ],
})
export const mutations = {
    setPages(state, newPages) {
        state.Pages = newPages
    }
}
export const getters = {
    getPages(state) {
        return state.Pages
    }
}