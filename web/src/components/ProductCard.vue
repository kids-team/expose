<template>
     <div @click="$emit('details', $event, product.id)" class="card bg-white cursor-pointer" :class="{'shadow': attributes.dropShadow, 'image-left': attributes.style === 'list', 'image-top': attributes.style === 'card'}">
          <span v-if="attributes.showCategory" class="card-label bg-primary text-white"><span v-if="product.categories" v-text="product.categories.length != 0 ? product.categories[0].name : ''"></span></span>
          <img class="card-image" :src="product.images.large">
          <div class="card-content">
                <h5 class="text-primary card-title" v-text="product.title.rendered"></h5>
                <span class="block text-gray-500 text-sm" v-html="product.excerpt.rendered"></span>
                <div class="mt-auto text-right">
                      <span class="button primary pop p-2" @click.stop="$emit('select', $event, product.id)"><em class="material-icons">shopping_cart</em></span>
                </div>  
          </div>
      </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
        product: Object,
        attributes: Object,
        selected: String
  },
}
</script>