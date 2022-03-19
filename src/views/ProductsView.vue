<template>
    <v-row>
        <v-col md="3" v-for="product in allProducts" :key="product.id">
            <products class="product" v-bind:product="product"></products>
        </v-col>
    </v-row>
</template>

<script>
import products from '@/components/products.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: { products },
    data: () => ({
        drawer: false,
    }),
    computed: {
        ...mapGetters(['allProducts'])
    },
    created(){
        this.GET_PRODUCTS()
    },
    methods: {
        ...mapActions(['GET_PRODUCTS'])
    }


}
</script>

<style>
    .product{
        height: 100%;
    }
</style>