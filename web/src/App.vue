<template>
  <div>
    <div class="text-right">
      <span class="button bg-primary text-white" @click="showCartModal = true; showCartList = true;"><i class="material-icons">shopping_cart</i><span v-text="strings.cart"></span> <span class="badge ml-2 primary-inverse" v-text="countCartItems()" v-if="countCartItems() != 0"></span></span>
    </div>
    <div v-if="!attributes.sortByCategory" class="posts gap-12 grid" :class='["grid-cols-" + attributes.columnsSmall, "md:grid-cols-" + attributes.columnsMedium, "lg:grid-cols-" + attributes.columnsLarge]'>
      <ul>
        <li @click="selectedCategory = 0" v-text="strings.all"></li>
        <li v-for="(category, index) in filteredCategories" :key="index" @click="this.selectedCategory = category.id" v-text="category.name"></li>
      </ul>
      <ProductCard 
        v-for="(product, index) in filteredShopItems()"
        :key="index"
        :product="product"
        :attributes="attributes"
        @select="addToCart"
        @details="showDetails"
      ></ProductCard>
    </div>
    <div v-if="attributes.sortByCategory">
      <div class="mb-8" v-for="(category, idx) in filteredCategories()" :key="idx">
          <h4 class="my-2 text-gray-500 uppercase text-sm font-bold" v-text="category.name.toUpperCase()"></h4>
          <div  class="posts gap-12 grid" :class='["grid-cols-" + attributes.columnsSmall, "md:grid-cols-" + attributes.columnsMedium, "lg:grid-cols-" + attributes.columnsLarge]'>
          <ProductCard 
              v-for="(product, index) in filteredShopItems(category.id)"
              :key="index"
              :product="product"
              :attributes="attributes"
              @select="addToCart"
              @details="showDetails"
          ></ProductCard>
      </div>
      </div>
    </div>
    <ProductDetails 
      v-if="currentProduct != -1"
      :product="products[currentProduct]"
      :attributes="attributes"
      :strings="strings"
      @select="addToCart"
      @close="currentProduct = -1"
    >
    </ProductDetails>
    <div class="modal fullscreen" :class="{'primary': !success, 'success': success}" v-if="showCartModal">
        <div class="modal-dialog">
            <div class="dialog-header">
                <div class="dialog-title"><h2 v-text="strings.cart"></h2></div>
                <button class="close" @click="showCartModal = false"></button>
            </div>
            <div class="dialog-content">
                <Cart
                    v-if="showCartList"
                    :products="products"
                    :attributes="attributes"
                    :strings="strings"
                    :cart="cart"
                    @close="showCartModal = false"
                ></Cart>
                
                <Checkout
                v-if="showCheckout"
                    :products="products"
                    :attributes="attributes"
                    :strings="strings"
                    :cart="cart"
                    v-model:user="user"
                ></Checkout>

                <div v-if="success" class="success-window">
                    <h2 v-text="strings.thanksHead"></h2>
                    <p v-text="strings.thanksText"></p>
                    
                </div>

                <div class="foot button-group right">
                    <button @click="showCartList = false; showCheckout = true;" v-if="showCartList" class="button primary" v-text="strings.order"></button>
                    <button @click="showCartList = true; showCheckout = false;" v-if="showCheckout" class="button primary" v-text="strings.back"></button>
                    <button @click="order()" v-if="showCheckout" class="button primary" v-text="strings.order"></button>
                    <button @click="showCartModal = false" v-if="success" class="button close" v-text="strings.close"></button>
                    
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
const wpApiSettings = window.ctx_products_vuejs;
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
      products: [
        {
          title: ""
        }
      ],
      categories: [],
      cart: [],
      strings: [],
      selectedCategory: 0,
      user: {
          title: { value: "", error: false, msg: "" },
          forename: { value: "", error: false, msg: "" },
          surname: { value: "", error: false, msg: "" },
          email: { value: "", error: false, msg: "" },
          address: { value: "", error: false, msg: "" },
          zip: { value: "", error: false, msg: "" },
          city: { value: "", error: false, msg: "" },
          comment: { value: "", error: false, msg: "" },
          consent: { value: "", error: false, msg: "" },
      },
      success: false
  }),

  methods: {
    addToCart(event, index) {
      var cartItem = _.findIndex(this.products, function(item) { return item.id == index; });
      var product = this.products[cartItem];
      var itemExistsInCart = _.findIndex(this.cart, function(item) { return item.index == cartItem; });
      console.log(itemExistsInCart);
      if(itemExistsInCart != -1) {
        this.cart[itemExistsInCart].count += this.products[cartItem].cart
        this.products[cartItem].cart = 1;
        console.log(this.cart);
        return
      }
      this.cart.push({ index: cartItem, id: index, count: this.products[cartItem].cart})
      this.products[cartItem].cart = 1;
      this.currentProduct = -1
    },
    showDetails(event, index) {
      this.currentProduct = _.findIndex(this.products, function(item) { return item.id == index; });
    },
     filteredShopItems(cat = 0) {
        if (this.selectedCategory != 0 || cat != 0) {
            cat = cat == 0 ? this.selectedCategory : cat;
            let filtered = _.filter(this.products, function(item) { 
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
         var allowedCategories = this.attributes.selectedCategories;
         let filtered = _.filter(this.categories, function(item) { 
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
     countCartItems() {
       var result = 0;
       this.cart.forEach(element => {
         result += element.count
       });
       return result;
     },    
     async order() {
         var removeErrors = this.user;
         Object.keys(removeErrors).forEach(function(key){ 
             removeErrors[key]['error'] = false
             removeErrors[key]['msg'] = ''
         });
         console.log(removeErrors)
         let options = {
            method: "POST",
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: { 
                'Content-Type': 'application/json',
                'X-WP-Nonce': wpApiSettings.nonce 
            },
            body: JSON.stringify({ user: removeErrors, cart: this.cart }) // body data type must match "Content-Type" header
          };
         let url = `${ wpApiSettings.root }ctx-products/v2/order`;
          fetch( url, options ).then( response => response.json() ).then( response => {
              if(response.status == 'invalid') {
                  this.user = response.data;
              }
              if(response.status == 'ok') {
                  this.success = true;
                  this.showCheckout = false;
                  this.showCartList = false;
              }
              console.log(response)
          } );
     }
  },
  async created () {
          this.strings = wpApiSettings.strings;
          let options = {
              headers: { 'X-WP-Nonce': wpApiSettings.nonce }, // Add nonce for WP REST API
          };

          
          let url = `${ wpApiSettings.root }wp/v2/ctx-products?_embed`;
          if (this.attributes.selectedCategories.length != 0) {
              url += '&product-categories=' + this.attributes.selectedCategories.join(',')
          }
          fetch( url, options ).then( response => response.json() ).then( response => {
              this.products = response;
              console.log(response)
          } );;

          let caturl = `${ wpApiSettings.root }wp/v2/product-categories`;
          fetch( caturl, options ).then( response => response.json() ).then( response => {
              this.categories = response;
              console.log(response)
          } );;
  }
      
          
    
}
</script>

