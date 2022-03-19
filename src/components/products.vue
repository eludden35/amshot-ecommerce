<template>
    <v-card
        max-width="374"
        class="outer"
    >
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            :src="product.image"
        ></v-img>

        <v-card-title>{{product.title}}</v-card-title>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                :value="product.rating.rate"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                    {{`${product.rating.rate}(${product.rating.count})`}}
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                {{product.category}}
            </div>

            <div>{{product.description}}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="actions">
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="ADD_TO_CART(product.id)"
            >
                Add To Cart
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
export default {
    name: 'products',
    props: {product: Object},
    methods: {
        ...mapActions(['ADD_TO_CART'])
    }
}
</script>

<style>
    .outer{
        padding-bottom: 50px;
    }

    .actions{
        position: absolute;
        bottom: 0;
        right: 5%;
        justify-content: flex-end;
    }

</style>