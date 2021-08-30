<template>
    <div>
            <ul class="item-list overflow-y-auto">
                <li class="item" v-for="(cartItem, index) in cart" :key="index">
                  <img :src="products[cartItem.index].images.thumbnail">
                  <div class="text">
                    <div class="title"><b v-text="products[cartItem.index].title.rendered"></b><span class="description" v-if="products[cartItem.index].excerpt.rendered != ''" v-html="products[cartItem.index].excerpt.rendered"></span></div>
                    <div class="control">
                      <span class="number-picker"><button @click.stop="cartItem.count--"></button><input type="text" class="px-1 w-8 mx-1 text-center bg-gray-200" v-model="cartItem.count"><button class="" @click.stop="cartItem.count++"></button></span>
                      <span class="button p-2 ml-auto md:ml-0" @click="removeItem(index)"><em class="material-icons">delete</em></span>
                    </div>   
                  </div>
                </li>
            </ul>      
       </div>     

</template>


<script>
export default {
  name: 'Product',
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