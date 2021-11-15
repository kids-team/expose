<template>
    <div class="grid xl:grid--columns-2 grid--gap-12">
        <div class="hidden xl:show">
            <ul class="list">
                <li class="list__item" v-for="(cartItem, index) in cart" :key="index">
                  <img class="list__image" :src="products[cartItem.index].images.thumbnail">
                  <div class="list__content">
                    <div class="list__title"> <b v-text="products[cartItem.index].title.rendered"></b><span class="description" v-if="products[cartItem.index].excerpt.rendered != ''" v-html="products[cartItem.index].excerpt.rendered"></span></div> 
                  </div>
                  <div class="count"><b v-text="cartItem.count"></b>x</div>
                </li>
            </ul>     
        </div>
        <div>
            <form class="form">
                <div class="form__group input" :class="{'error': user.forename.error}">
                    <label v-text="strings.forename"></label>
                    <input class="form__input" v-model="user.forename.value" type="text" required>
                    <span v-if="user.forename.error" class="form__error" v-text="user.forename.msg"></span>
                </div>
                <div class="form__group input" :class="{'error': user.surname.error}">
                    <label v-text="strings.surname"></label>
                    <input class="form__input" v-model="user.surname.value" type="text" required>
                    <span v-if="user.surname.error" class="form__error" v-text="user.surname.msg"></span>
                </div>
                <div class="form__group input" :class="{'error': user.email.error}">
                    <label v-text="strings.email"></label>
                    <input class="form__input" v-model="user.email.value" type="text" required>
                    <span v-if="user.email.error" class="form__error" v-text="user.email.msg"></span>
                </div>
                <div class="form__group input" :class="{'error': user.address.error}">
                    <label v-text="strings.address"></label>
                    <input class="form__input" v-model="user.address.value" type="text" required>
                    <span v-if="user.address.error" class="form__error" v-text="user.address.msg"></span>
                </div>
                <div class="form__group input" :class="{'error': user.zip.error}">
                    <label v-text="strings.zip"></label>
                    <input class="form__input" v-model="user.zip.value" type="text" required>
                    <span v-if="user.zip.error" class="form__error" v-text="user.zip.msg"></span>
                </div>
                <div class="form__group input" :class="{'error': user.city.error}">
                    <label v-text="strings.city"></label>
                    <input class="form__input" v-model="user.city.value" type="text" required>
                    <span v-if="user.city.error" class="form__error" v-text="user.city.msg"></span>
                </div>
                <div class="form__group textarea" :class="{'error': user.comment.error}">
                    <label v-text="strings.comment"></label>
                    <textarea class="form__textarea" v-model="user.comment.value"></textarea>
                    <span v-if="user.comment.error" class="form__error" v-text="user.comment.msg"></span>
                </div>
                <div class="form__group checkbox" :class="{'error': user.forename.error}">
                    <label class="checkbox__label" for="consent">
                        <input v-model="user.consent.value" name="consent" type="checkbox" required>
                        <div v-html="strings.consent"></div>
                    </label>
                    <span v-if="user.consent.error" class="form__error" v-text="user.consent.msg"></span>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    name: "Checkout",
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