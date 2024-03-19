<template>

  <Header />

  <div v-if="isLoggedIn">
      <Wishlist />
  </div>
  <div v-else>
    <GuestUserWish />
  </div>

  <Footer />
  
</template>


<script>
import Wishlist  from '~/components/Wishlist.vue';
import GuestUserWish from '~/components/GuestUserWish.vue';

export default {
    components: {
      Wishlist,
      GuestUserWish,
    },

    data() {
        return {
            isLoggedIn: false
        }
    },

    created() {
        const token = typeof window !== 'undefined' ?  sessionStorage.getItem('token') : null;

        if(token) {
            this.isLoggedIn = true
        } else {
            this.isLoggedIn = false
        }
    }
}
</script>

<style>

</style>