<template>
    <div>
            <ul class="list">
                <li class="list__item" v-for="(cartItem, index) in cart" :key="index">
                  <img class="list__image" :src="products[cartItem.index].images.thumbnail">
                  <div class="list__content">
                    <div class="list__title" v-text="products[cartItem.index].title.rendered"></div>
                    <div class="list__subtitle" v-if="products[cartItem.index].excerpt.rendered != ''" v-html="products[cartItem.index].excerpt.rendered"></div>
                    
                  </div>
                  <div class="list__controls">
                      <div class="number-picker"><button @click.stop="cartItem.count--"></button><input type="text" v-model="cartItem.count"><button @click.stop="cartItem.count++"></button></div>
                      <a class="button button--link button--icon button--gray hidden lg:show" @click="removeItem(index)"><em class="material-icons">delete</em></a>
                    </div>   
                </li>
            </ul>      
       </div>     
</template>


<script>
export default {
  name: 'Cart',
  props: {
        products: Object,
        attributes: Object,
        cart: Object
  },
  methods: {
      removeItem(item) {
          this.cart.splice(item, 1)
      }
  }
}
</script>