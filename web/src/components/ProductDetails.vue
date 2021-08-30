<template>
    <div class="modal fullscreen">
        <div class="modal-dialog">
            <div class="dialog-header">
                <img :src="product.images.full" class="object-cover w-full" style="height: 30vh">
                <div class="dialog-title"><h2 v-text="product.title.rendered" class=""></h2></div>
                <button class="close" @click="$emit('close')"></button>
            </div>
            <div class="dialog-content">
                <div class="my-8" v-html="product.content.rendered"></div>    
                <div class="flex items-center justify-end">
                    <span class="number-picker"><button @click.stop="product.cart--"></button><input type="text" v-model="product.cart"><button @click.stop="product.cart++"></button></span>
                    <span class="button primary p-2 pop" @click.stop="$emit('select', $event, product.id)"><em class="material-icons">shopping_cart</em></span>
                    <span class="button bg-gray-300 ml-4 p-2" @click="$emit('close')" v-text="strings.back"></span>
                </div>   
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
        selected: String,
        strings: Object
  },
}
</script>