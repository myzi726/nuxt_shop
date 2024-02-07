<template>
  <div>
    <Header />

    <div class="wrap_product_detail_box">
        <div class="product_img">제품이미지</div>
        <div class="product_title"><h3>제품명</h3></div>
        <div class="product_price"><h3>가격</h3></div>
        <div class="select_wish_cart">
            <h3 class="product_wish">WISH</h3>
            <h3 class="product_cart">CART</h3>
        </div>
    </div>

    <Footer />
  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>

h3 {
    margin: 0;
}

.wrap_product_detail_box {
    background: white;
    width: 100vw;
    height: 510px;
}

.product_img {
    background: pink;
    width: 100vw;
    height: 300px;
}

.product_title {
    font-size: 30px;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
}

.product_price {
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
}

.select_wish_cart{
    color: black;
    font-size: 20px;

    text-align: center;
}

.product_wish{
    display: inline-block;
    margin-right: 30px;
}

.product_cart{
    display: inline-block;
}

</style>