<template>
    <div class="grid grid-cols-2 gap-12">
        <div>
            <ul class="item-list overflow-y-auto">
                <li class="item" v-for="(cartItem, index) in cart" :key="index">
                  <img :src="products[cartItem.index].images.thumbnail">
                  <div class="text">
                    <div class="title"> <b v-text="products[cartItem.index].title.rendered"></b><span class="description" v-if="products[cartItem.index].excerpt.rendered != ''" v-html="products[cartItem.index].excerpt.rendered"></span></div> 
                  </div>
                  <div class="count"><b v-text="cartItem.count"></b>x</div>
                </li>
            </ul>     
        </div>
        <div>
            <form>
                <div class="input-text mb-10" :class="{'error': user.forename.error}">
                    <label v-text="strings.forename"></label>
                    <input v-model="user.forename.value" type="text" required>
                    <span v-if="user.forename.error" class="error-message" v-text="user.forename.msg"></span>
                </div>
                <div class="input-text mb-10" :class="{'error': user.surname.error}">
                    <label v-text="strings.surname"></label>
                    <input v-model="user.surname.value" type="text" required>
                    <span v-if="user.surname.error" class="error-message" v-text="user.surname.msg"></span>
                </div>
                <div class="input-text mb-10" :class="{'error': user.email.error}">
                    <label v-text="strings.email"></label>
                    <input v-model="user.email.value" type="text" required>
                    <span v-if="user.email.error" class="error-message" v-text="user.email.msg"></span>
                </div>
                <div class="input-text mb-10" :class="{'error': user.address.error}">
                    <label v-text="strings.address"></label>
                    <input v-model="user.address.value" type="text" required>
                    <span v-if="user.address.error" class="error-message" v-text="user.address.msg"></span>
                </div>
                <div class="input-text mb-10" :class="{'error': user.zip.error}">
                    <label v-text="strings.zip"></label>
                    <input v-model="user.zip.value" type="text" required>
                    <span v-if="user.zip.error" class="error-message" v-text="user.zip.msg"></span>
                </div>
                <div class="input-text mb-10" :class="{'error': user.city.error}">
                    <label v-text="strings.city"></label>
                    <input v-model="user.city.value" type="text" required>
                    <span v-if="user.city.error" class="error-message" v-text="user.city.msg"></span>
                </div>
                <div class="input-textarea mb-10" :class="{'error': user.comment.error}">
                    <label v-text="strings.comment"></label>
                    <textarea v-model="user.comment.value"></textarea>
                    <span v-if="user.comment.error" class="error-message" v-text="user.comment.msg"></span>
                </div>
                <div class="input-checkbox mb-10" :class="{'error': user.forename.error}">
                    <input v-model="user.consent.value" type="checkbox" required>
                    <label v-html="strings.consent"></label>
                    <span v-if="user.consent.error" class="error-message" v-text="user.consent.msg"></span>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    model: {
        prop: 'user',
        event: 'change'
    },
    props: {
        products: Object,
        cart: Object,
        user: Object,
        strings: Object
    }
}
</script>