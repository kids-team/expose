<template>
  <div>
    <div class="button-group button-group--right">
      <span class="button button--primary" @click="showCartModal = true; showCartList = true;"><i
          class="material-icons">shopping_cart</i><span v-text="strings.cart"></span> <span
          class="badge ml-2 primary-inverse" v-text="countCartItems()" v-if="countCartItems() != 0"></span></span>
    </div>
    <hr>
    <div v-if="!attributes.sortByCategory" class="grid grid--gap-12"
      :class='["grid--columns-" + attributes.columnsSmall, "md:grid--columns-" + attributes.columnsMedium, "lg:grid--columns-" + attributes.columnsLarge]'>
      <ul>
        <li @click="selectedCategory = 0" v-text="strings.all"></li>
        <li v-for="(category, index) in filteredCategories" :key="index" @click="this.selectedCategory = category.id"
          v-text="category.name"></li>
      </ul>
      <ProductCard v-for="(product, index) in filteredShopItems()" :key="index" :product="product"
        :attributes="attributes" @select="addToCart" @details="showDetails"></ProductCard>
    </div>
    <div v-if="attributes.sortByCategory">
      <div class="mb-8" v-for="(category, idx) in filteredCategories()" :key="idx">
        <h6 class="my-8 text-gray-500 uppercase" v-text="category.name.toUpperCase()"></h6>
        <div class="grid grid--gap-12"
          :class='["grid--columns-" + attributes.columnsSmall, "md:grid--columns-" + attributes.columnsMedium, "lg:grid--columns-" + attributes.columnsLarge]'>
          <ProductCard v-for="(product, index) in filteredShopItems(category.id)" :key="index" :product="product"
            :attributes="attributes" @select="addToCart" @details="showDetails"></ProductCard>
        </div>
      </div>
    </div>
    <ProductDetails v-if="currentProduct != -1" :product="products[currentProduct]" :attributes="attributes"
      :strings="strings" @select="addToCart" @close="currentProduct = -1">
    </ProductDetails>
    <div class="modal modal--fullscreen"
      :class="{'modal--open': showCartModal, 'primary': !success, 'success': success}">
      <div class="modal__dialog">
        <div class="modal__header">
          <div class="modal__title">
            <h2 v-text="strings.cart"></h2>
          </div>
          <button class="modal__close" @click="showCartModal = false"></button>
        </div>
        <div class="modal__content">
          <div class="section">
            <div class="container">
              <Cart v-if="wizzardStep == 1" :products="products" :attributes="attributes" :strings="strings" :cart="cart"
                @close="showCartModal = false"></Cart>

              <Checkout v-if="wizzardStep == 2" :products="products" :attributes="attributes" :strings="strings"
                :cart="cart" v-model:user="user"></Checkout>

              <div v-if="processingCheckout" class="modal__overlay">
                <aside>
                  <div class="spinning-loader"></div>
                  <h2 v-text="strings.wait"></h2>
                </aside>
              </div>

              <div v-if="wizzardStep == 3" class="success-window">
                <h2 v-text="strings.thanksHead"></h2>
                <p v-text="strings.thanksText"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__footer" v-if="!processingCheckout">
          <div class="container">
          <div class="button-group button-group--right">
            
            <button @click="wizzardStep = 1" v-if="wizzardStep == 2"
              class="button button--gray button--link" v-text="strings.back"></button>
            <button @click="wizzardStep = 2" v-if="showCartList && wizzardStep == 1"
              class="button button--primary" v-text="strings.next"></button>
            <button @click="order()" v-if="wizzardStep == 2" class="button button--primary" v-text="strings.order"></button>
            <button @click="showCartModal = false" class="button button--primary"
              v-text="strings.close" v-if="wizzardStep == 3"></button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductCard from './components/ProductCard.vue'
  import ProductDetails from './components/ProductDetails.vue'
  import Checkout from './components/Checkout.vue'
  import Cart from './components/Cart.vue'

  const wpApiSettings = window.expose_vuejs;

  import _ from 'lodash';


  export default {
    name: 'App',
    components: {
      ProductCard,
      ProductDetails,
      Cart,
      Checkout
    },
    data: () => ({
      attributes: window.productSettings ? window.productSettings : {
        columnsLarge: 0,
        columnsMedium: 0,
        columnsSmall: 1,
        dropShadow: false,
        excerptLength: 20,
        order: "desc",
        orderBy: "date",
        selectedCategory: "0",
        selectedTags: [],
        showCategory: true,
        showFilter: false,
        showImages: true,
        showSearchbar: false,
        style: "list",
        textAlignment: "left"
      },
      showProductModal: false,
      currentProduct: -1,
      showCartModal: false,
      showCartList: false,
      showCheckout: false,
      showResult: false,
      wizzardStep: 1,
      processingCheckout: false,
      products: [{
        title: ""
      }],
      categories: [],
      cart: [],
      strings: [],
      selectedCategory: 0,
      user: {
        title: {
          value: "",
          error: false,
          msg: ""
        },
        forename: {
          value: "",
          error: false,
          msg: ""
        },
        surname: {
          value: "",
          error: false,
          msg: ""
        },
        email: {
          value: "",
          error: false,
          msg: ""
        },
        address: {
          value: "",
          error: false,
          msg: ""
        },
        zip: {
          value: "",
          error: false,
          msg: ""
        },
        city: {
          value: "",
          error: false,
          msg: ""
        },
        comment: {
          value: "",
          error: false,
          msg: ""
        },
        consent: {
          value: "",
          error: false,
          msg: ""
        },
      },
      success: false
    }),

    methods: {
      addToCart(event, index) {
        let cartItem = _.findIndex(this.products, function (item) {
          return item.id == index;
        });
        let product = this.products[cartItem];
        let itemExistsInCart = _.findIndex(this.cart, function (item) {
          return item.index == cartItem;
        });
        if (itemExistsInCart != -1) {
          this.cart[itemExistsInCart].count += this.products[cartItem].cart
          this.products[cartItem].cart = 1;
          return
        }
        this.cart.push({
          index: cartItem,
          id: index,
          count: this.products[cartItem].cart
        })
        this.products[cartItem].cart = 1;
        this.currentProduct = -1
      },
      showDetails(event, index) {
        this.currentProduct = _.findIndex(this.products, function (item) {
          return item.id == index;
        });
      },
      filteredShopItems(cat = 0) {
        if (this.selectedCategory != 0 || cat != 0) {
          cat = cat == 0 ? this.selectedCategory : cat;
          let filtered = _.filter(this.products, function (item) {
            if (!item.category) {
              return false;
            }
            return item.category.term_id == cat
          });
          return filtered;
        }
        return this.products;
      },
      filteredCategories() {
        let allowedCategories = this.attributes.selectedCategories;
        let filtered = _.filter(this.categories, function (item) {
          if (item.count == 0) {
            return false;
          }
          if (allowedCategories.length > 0 && !allowedCategories.includes(item.id)) {
            return false;
          }
          return true;
        });
        return filtered;
      },
      backPressed(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.showProductModal) {
          window.history.forward();
          this.showProductModal = false;
          return;
        }

        if (this.showCartModal && this.showCartList) {
          window.history.forward();
          this.showCartModal = false;
          this.showCartList = false;
          return;
        }

        if (this.showCartModal && this.showCheckout) {
          window.history.forward();
          this.showCartModal = true;
          this.showCheckout = false;
          return;
        }

        if (this.success && this.showCartModal) {
          window.history.forward();
          this.showCartModal = false;
          return;
        }
      },
      countCartItems() {
        let result = 0;
        this.cart.forEach(element => {
          result += element.count
        });
        return result;
      },
      async order() {
        this.processingCheckout = true;
        let removeErrors = this.user;
        Object.keys(removeErrors).forEach(function (key) {
          removeErrors[key]['error'] = false
          removeErrors[key]['msg'] = ''
        });

        let options = {
          method: "POST",
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': wpApiSettings.nonce
          },
          body: JSON.stringify({
            user: removeErrors,
            cart: this.cart
          }) // body data type must match "Content-Type" header
        };
        let url = `${ wpApiSettings.root }expose/v2/order`;
        fetch(url, options).then(response => response.json()).then(response => {
          if (response.status == 'invalid') {
            this.user = response.data;
            this.processingCheckout = false;
          }
          if (response.status == 'ok') {
            this.success = true;
            this.showCheckout = false;
            this.processingCheckout = false;
            this.cart = [];
            this.wizzardStep = 3
          }

        });
      }
    },
    async created() {
      this.strings = wpApiSettings.strings;
      let options = {
        headers: {
          'X-WP-Nonce': wpApiSettings.nonce
        }, // Add nonce for WP REST API
      };

 
      let url = `${ wpApiSettings.root }wp/v2/ctx-products?_embed&per_page=100`;
      if (this.attributes.selectedCategories.length != 0) {
        url += '&product-categories=' + this.attributes.selectedCategories.join(',')
      }
      fetch(url, options).then(response => response.json()).then(response => {
        this.products = response;
        console.log(response)
      });;

      let caturl = `${ wpApiSettings.root }wp/v2/product-categories`;
      fetch(caturl, options).then(response => response.json()).then(response => {
        this.categories = response;
      });;
    },

    mounted() {
      document.addEventListener("popstate", this.backPressed, false);
    },
    beforeDestroy() {
      document.removeEventListener("popstate", this.backPressed);
    }



  }
</script>