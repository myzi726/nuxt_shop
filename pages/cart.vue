<template>
  <div>

    <div class="header_cart">
      <h3 class="title_cart">CART</h3>
    </div>

    <div class="content_cart">
      <h3> 전체 상품 ({{total_quantity}}) </h3>
      <div>
        <img src="@/assets/image/base1.png" class="product_img">
          <h5 class="product_title">{{ product1[0].title }}</h5>
          <h6 class="product_content">{{ product1[0].content }}</h6>
          <h6 class="product_price">{{product1[0].price}} 원 </h6>
      </div>

      <div>
        <img src="@/assets/image/eye2.jpeg" class="product_img">
          <h5 class="product_title">{{ product2[1].title }}</h5>
          <h6 class="product_content">{{ product2[1].content }}</h6>
          <h6 class="product_price">{{product2[1].price}} 원 </h6>
      </div>

      <div class="total_price">
        <h3>총 상품금액 : {{total_product_price}} 원 </h3>
        <h3>배송비  : {{delivery_price}} 원 </h3>
        <h2>총 주문금액  : {{total}} 원 </h2>
      </div>

    </div>
    <div class="footer_cart">
        <div class="wrap_btn_order">
          <nuxt-link to="search"><button class="btn_order">주문하기</button></nuxt-link>
        </div>
    </div>
     
  </div>
</template>

<script>
import order1 from '../assets/data/base_product.js'
import order2 from '../assets/data/eye_product.js'

const allProduct = order1[0].price + order2[1].price;
const total_price = allProduct + 3000;

export default {

  data() {
    return {
      product1 : order1,
      product2 : order2,
      total_quantity : 2,
      total_product_price : allProduct,
      delivery_price : 3000,
      total : total_price
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 0;
}

.header_cart {
  width: 100vw;
  height: 80px;

  background: white;
}

.title_cart {
  font-size: 30px;
  font-weight: 900;

  text-align: center;
  padding: 20px;
}

.content_cart {
  width: 100vw;
  height: 500px;

}

.product_img {
  width: 60px;
  height: 60px;

  margin: 10px;
}

.product_title {
  display: inline-block;

  font-weight: 900;

  vertical-align: top;
  margin-top: 20px;

}

.product_content {
  margin-left: 80px;
  color:  gray;

  margin-top: -40px;

}

.product_price {
  margin-left: 80px;
}

.total_price {
  /* background: gray; */
  padding: 60px;
  margin-top: 100px;
}

.wrap_btn_order {
  display: flex;
  justify-content: center;
}

.btn_order {
  width: 80px;
  height: 50px;

  padding: 10px;

  margin-top: 10px;
  
  border-radius: 10px;
  color: white;
  background: black;
}

.footer_cart {
  width: 100vw;
  height: 100px;

  background: white;
}

</style>