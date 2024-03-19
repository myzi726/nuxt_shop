<template>
<div>
    <div v-if="isLoggedIn">
        <LoggedInUserPage />
    </div>
    <div v-else>
        <GuestUserPage />
    </div>
</div>
</template>

<script>
import GuestUserPage from "~/components/Mypage/GuestUserPage.vue";
import LoggedInUserPage from "~/components/Mypage/LoggedInUserPage.vue";

export default {
    components: {
        LoggedInUserPage,
        GuestUserPage
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
<style scoped>

</style>