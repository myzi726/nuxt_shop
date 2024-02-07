<template>
    <div class="wrap_detailList">
        <div class="wrap_product_list">
            <div class="product_list">
                <div class="product">
                    <div class="wrap_product_img">
                        <img src="/assets/product.png" class="product_img">
                    </div>
                    <nuxt-link to="product_detail" class="to_productDetail"><h3>제품1</h3></nuxt-link>
                    <h6>제품설명</h6>
                    <h4>9,999원</h4>
                </div>

                <div class="product">
                    <div class="wrap_product_img">
                        <img src="/assets/product.png" class="product_img">
                    </div>
                    <h3>제품2</h3>
                    <h6>제품설명</h6>
                    <h4>9,999원</h4>
                </div>
            </div>

            <div class="product_list">
                <div class="product">
                    <div class="wrap_product_img">
                        <img src="/assets/product.png" class="product_img">
                    </div>
                    <h3>제품3</h3>
                    <h6>제품설명</h6>
                    <h4>9,999원</h4>
                </div>
                <div class="product">
                    <div class="wrap_product_img">
                        <img src="/assets/product.png" class="product_img">
                    </div>
                    <h3>제품4</h3>
                    <h6>제품설명</h6>
                    <h4>9,999원</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

h3 {
    margin: 0 5px 0 0;

    display: inline-block;
}

h4 {
    margin: 0;
}

h6 {
    margin: 0;
    color: gray;
    display: inline-block;
}

.wrap_product_img {
    overflow: hidden;
}

.product_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.wrap_detailList {
    margin: 0;

    background: white;

    width: 100vw;
    height: 510px;
}

.wrap_product_list {
    display: flex;
    justify-content: center;

    vertical-align: middle;
}

.product_list {
    padding: 8px;

    margin-top: -20px;
}

.product {
    background: gray;
    width: 160px;
    height: 160px;

    margin: 58px 10px 10px 10px;

}

.to_productDetail {
    text-decoration: none;
    color: black;
}

</style>