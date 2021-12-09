<template>
    <div class="modal modal--fullscreen modal--open">
        <div class="modal__dialog">
            <div class="modal__header">
                <img :src="product.images.full" class="object-cover w-full" style="height: 30vh">
                <div class="modal__title"><h2 v-text="product.title.rendered" class=""></h2></div>
                <button class="modal__close" @click="$emit('close')"></button>
            </div>
            <div class="modal__content">
                <div class="my-8" v-html="product.content.rendered"></div>  
                <hr>  
                <div class="button-group button-group--right">
                    <span class="number-picker"><button @click.stop="product.cart--" :disabled="product.cart < 1 ? '' : disabled"></button><input type="text" v-model="product.cart"><button @click.stop="product.cart++" :disabled="product.cart > 50 ? '' : disabled"></button></span>
                    <span class="button button--primary button--icon button--pop" @click.stop="$emit('select', $event, product.id)"><em class="material-icons">shopping_cart</em></span>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
        product: Object,
        attributes: Object,
        selected: String,
        strings: Object
  },
}
</script>