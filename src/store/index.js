import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: null,
        cart: [],
    },
    getters: {
        allProducts: (state) => state.products,
        getCart: (state) => state.cart,
        getCartCount: (state) => (state.cart ? state.cart.length : null),
    },
    mutations: {
        SET_PRODUCTS: (state, payload) => {
            state.products = payload;
        },
        SET_CART: (state, payload) => {
            state.cart = [...state.cart, payload];
        },
    },
    actions: {
        GET_PRODUCTS: async ({ commit }, payload) => {
            let { data } = await Axios.get("https://fakestoreapi.com/products");
            commit("SET_PRODUCTS", data);
        },
        ADD_TO_CART: ({ commit }, payload) => {
            commit("SET_CART", payload);
        },
    },
    modules: {},
});
