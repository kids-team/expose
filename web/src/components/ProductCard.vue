<template>
     <div  class="card bg-white cursor-pointer" :class="{'card--shadow': attributes.dropShadow, 'card--image-left': attributes.style === 'list', 'card--image-top': attributes.style === 'card'}">
          <span v-if="attributes.showCategory" class="card-label bg-primary text-white"><span v-if="product.categories" v-text="product.categories.length != 0 ? product.categories[0].name : ''"></span></span>
          <div class="card__image"><img :src="product.images.large"></div>
          <div class="card__content">
                <h5 class="card__title" v-text="product.title.rendered"></h5>
                <span class="card__text" :class="{'h-16':attributes.style === 'list'}" v-html="product.excerpt.rendered" style="overflow: hidden;"></span>
                <div class="card__footer">
                    <div class="card__actions"><a class="button button--link button--primary" @click="$emit('details', $event, product.id)">Details</a></div>
                    <div class="card__supplemental"><span class="button button--link button--pop button--gray button--icon" @click.stop="$emit('select', $event, product.id)"><em class="material-icons">add_shopping_cart</em></span></div>
                </div>  
          </div>
      </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
        product: Object,
        attributes: Object,
        selected: String
  },
}
</script>