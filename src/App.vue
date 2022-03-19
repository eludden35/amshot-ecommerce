<template>
  <v-app>
    <div class="main">
      <v-app-bar
        dense
        app
      >


        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <img class="logo" src="./assets/amshotLogo.png" alt="amshot-logo"/>
        </v-toolbar-title>
        
        <v-toolbar-title >
          <h3>commerce</h3>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-text-field v-if="showSearch" label="Search">
          <v-icon
            slot="append"
            color="red"
            v-on:click="toggleSearch"
          >
            mdi-close
          </v-icon>
        </v-text-field>

        <v-btn icon v-if="!showSearch">
          <v-icon color="red">mdi-heart</v-icon>
        </v-btn>

        <v-btn 
          icon
          v-on:click="toggleSearch"
          v-if="!showSearch"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn v-on:click="log(getCartCount)" icon v-if="!showSearch">
            <v-badge
              overlap
              :content="getCartCount"
              :value="getCartCount"
            >
          <v-icon>
              mdi-cart
          </v-icon>
            </v-badge>
        </v-btn>
      </v-app-bar>

    </div>


      <v-main class="grey lighten-3">
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
              <v-list
                nav
                dense
              >
                  <v-list-item
                    v-for="({name, icon, route}, i) in navItems" 
                    :key="i"
                    :href="route"
                    link
                    
                  >
                      <v-list-item-icon>
                        <v-icon>{{icon}}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{name}}</v-list-item-title>
                  </v-list-item>
              </v-list>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="10"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
              <v-container
                id="scroll-target"
                style="max-height: 90vh; display: flex; overflow-x: hidden;"
                class="overflow-y-auto"
                fluid
              >
                <v-row 
                  align="center"
                  style="height: 800px; justify-content: space-around"
                >
                  <router-view/>
                </v-row>

              </v-container>
              </v-sheet>
            </v-col>

          </v-row>
        </v-container>
      </v-main>

  </v-app>
</template>

<script>

  import { mapGetters } from 'vuex';
  export default {
    name: 'App',

    data: () => ({
      drawer: false,
      showSearch: false,
      navItems: [
        {name: 'Home', icon: 'mdi-home', route: '#/'},
        {name: 'Products', icon: 'mdi-basket', route: '#/products'},
        {name: 'About Us', icon: 'mdi-account-question', route: '#/about'}
      ]
    }),
    methods: {
      toggleSearch: () => this.showSearch = !this.showSearch,
      log: (info) => console.log(info),
    },
    computed: {
      ...mapGetters(['allProducts', 'getCartCount']),
      cartCount: () => {
        cart = getCartCount
      }
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poppins:wght@200;300;400;500;700&display=swap');

  .custom-anchor{
    text-decoration: none;
    width: 100%;
  }
  .main h3{
    font-family: 'Montserrat', sans-serif;
  }

</style>
