<template>
  <div class="wrap_detailList">
    <div class="wrap_product_list">
      <div class="product_list">
        <div class="product">
          <img src="../assets/image/eye1.jpeg" class="product_img">
          <h5>{{ eyeProduct[0].title }}</h5>
          <h6>{{ eyeProduct[0].content }}</h6>
          <h4>{{ eyeProduct[0].price }}</h4>
        </div>
          <div class="product">
          <img src="../assets/image/eye2.jpeg" class="product_img">
          <h5>{{ eyeProduct[1].title }}</h5>
          <h6>{{ eyeProduct[1].content }}</h6>
          <h4>{{ eyeProduct[1].price }}</h4>
        </div>
      </div>
        <div class="product_list2">
        <div class="product2">
          <img src="../assets/image/eye3.jpeg" class="product_img">
          <h5>{{ eyeProduct[2].title }}</h5>
          <h6>{{ eyeProduct[2].content }}</h6>
          <h4>{{ eyeProduct[2].price }}</h4>
        </div>
          <div class="product2">
          <img src="../assets/image/eye4.jpeg" class="product_img">
          <h5>{{ eyeProduct[3].title }}</h5>
          <h6>{{ eyeProduct[3].content }}</h6>
          <h4>{{ eyeProduct[3].price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../assets/data/eye_product.js";

export default {
  data() {
    return {
      eyeProduct: data,
    };
  },
};
</script>

<style scoped>
h5 {
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
  /* margin-left: px; */

  background: white;

  width: 100vw;
  height: 510px;
}

.wrap_product_list {
  display: flex;
  justify-content: center;

  flex-direction: column;

  vertical-align: middle;
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
