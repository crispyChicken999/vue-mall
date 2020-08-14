import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goodStatus: false,
        cartStatus: false,
        nowChoosedItem: null,
        cartItem: [{ "id": 1, "name": "夏威夷果", "price": 20, "img": ["/img/food1.png", "/img/food3.png", "/img/food5.png"], "explain": "夏威夷果含有丰富的钙，磷 ，铁，维生素B1、B2和人体必需的8种氨基酸。", "num": 1 }],
        paidList: [],
    },
    mutations: {},
    actions: {},
    modules: {}
})