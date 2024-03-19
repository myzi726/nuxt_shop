<template>
    <div class="wrap-title">
        <div class="titleBar_name"><h3>SHOP</h3></div>
        <div class="titleBar_menu">
            <nuxt-link to="cart" class="title_cart"><h4>장바구니</h4></nuxt-link>
            <nuxt-link to="search" class="title_search"><h4>검색</h4></nuxt-link>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.wrap-title {
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 60px;

    background: white;
}

.titleBar_name{
    display: inline-block;
    /* margin-top: 10px; */
    margin-right: 150px;
}

.titleBar_menu {
    display: flex;
    justify-content: space-between;
    color: white;
}

.titleBar_menu>h4{
    display: inline-block;
    /* margin-top: 10px; */
    margin-left: 15px;

}

.title_cart, .title_search {
    text-decoration: none;
    color: black;
    /* margin-top: 10px; */
    margin-left: 15px;
}

</style>