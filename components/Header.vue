<template>
    <div class="wrap-title">
        <h3>쇼핑몰명</h3>
        <div class="titleBar">
            <h4><nuxt-link to="/cart" class="title_cart">장바구니</nuxt-link></h4>
            <h4>검색</h4>
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
    height: 80px;

    background: #000;
}

.wrap-title>h3 {
    color: white;
    margin-top: 30px;
    margin-right: 150px;
}

.titleBar {
    display: flex;
    justify-content: space-between;
    color: white;
}

.titleBar>h4{
    display: inline-block;
    margin-top: 30px;
    margin-left: 15px;

}

.title_cart {
    text-decoration: none;
    color: white;
    margin-top: 30px;
    margin-left: 15px;
}

</style>