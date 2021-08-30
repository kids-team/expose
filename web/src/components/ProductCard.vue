<template>
     <div @click="$emit('details', $event, product.id)" class="flex card bg-white overflow-visible" :class="{'flex-row card bg-white': attributes.style === 'list', 'flex-col card bg-white': attributes.style === 'card'}">
          <span v-if="attributes.showCategory" class="inline-block absolute bg-primary text-primary-contrast rounded-tl-lg rounded-br-lg top-0 right-0 px-2  mr-4 text-sm -mt-2"><span v-if="product.categories" v-text="product.categories.length != 0 ? product.categories[0].name : ''"></span></span>
          <img class="object-cover" v-bind:class="{ 'h-32 w-32': attributes.style === 'list', 'h-64 w-full': attributes.style === 'card' }" :src="product.images.large">
          <div class="flex flex-grow flex-col p-4 w-full">
                <h3 class="block font-bold text-primary inline-block" v-text="product.title.rendered"></h3>
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