<template>
  <div class="wrap_detailList">
    <div class="wrap_product_list">
      <div class="product_list">
        <div class="product">
         <img src="../assets/image/base1.png" class="product_img" />
          <nuxt-link to="/product_detail" class="to_pr_detail">
            <h5>{{ baseProduct[0].title }}</h5>
          </nuxt-link>
          <h6>{{ baseProduct[0].content }}</h6>
          <h4>{{ baseProduct[0].price }}</h4>
        </div>
        <div class="product">
          <img src="../assets/image/base2.jpeg" class="product_img" />
          <nuxt-link to="/product_detail" class="to_pr_detail">
            <h5>{{ baseProduct[1].title }}</h5>
          </nuxt-link>
          <h6>{{ baseProduct[1].content }}</h6>
          <h4>{{ baseProduct[1].price }}</h4>
      </div>
      </div>
      <div class="product_list2">
        <div class="product2">
          <img src="../assets/image/base3.jpeg" class="product_img" />
          <nuxt-link to="/product_detail" class="to_pr_detail">
            <h5>{{ baseProduct[2].title }}</h5>
          </nuxt-link>
          <h6>{{ baseProduct[2].content }}</h6>
          <h4>{{ baseProduct[2].price }}</h4>
      </div>
        <div class="product2">
          <img src="../assets/image/base4.jpeg" class="product_img" />
          <nuxt-link to="/product_detail" class="to_pr_detail">
            <h5>{{ baseProduct[3].title }}</h5>
          </nuxt-link>
          <h6>{{ baseProduct[3].content }}</h6>
          <h4>{{ baseProduct[3].price }}</h4>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../assets/data/base_product.js";

export default {
  data() {
    return {
      baseProduct: data
    };
  },
};
</script>

<style scoped>
h5 {
  margin: 0 0 0 0;
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

.to_pr_detail {
  text-decoration: none;
  color: black;
}

.to_pr_detail>h3 {
  margin: 0px;
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

  flex-direction: column;
}

.product_list {
  display: flex;
  padding: 8px;

  margin-top: -60px;
}

.product_list2 {
  display: flex;
  padding: 5px;

}

.product, .product2 {
  background: gray;
  width: 160px;
  height: 160px;

  margin: 70px 10px 10px 10px;
}

.to_productDetail {
  text-decoration: none;
  color: black;
}
</style>
