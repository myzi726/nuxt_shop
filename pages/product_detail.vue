<template>
  <Header />

  <ProductDetail />

  <Footer />
</template>

<script>
// import product from '@/assets/data/base_product.js'

// export default {
//   data() {
//     return {
//       imgName: "wish",
//       selectProduct: product,
//       click_num: 0,
//       pr_name: '',
//       pr_detail:'',
//       pr_price:''
//     }
//   },

//   mounted() {
//     this.pr_name = document.getElementById('wish_title').innerText
//     this.pr_detail = document.getElementById('wish_content').innerText
//     this.pr_price = document.getElementById('wish_price').innerText
//   },

//   methods: {
//     async wishClick() {
//       console.log("wishClick")


//       if (this.imgName === "wish") {
//         this.imgName = "wish_click";
//         this.click_num++;
//       } else {
//         this.imgName = "wish";
//         this.click_num--;
//       }

    
//       try{
//         const response = await fetch('http://localhost:3001/wish', {
//           method: 'POST',
//           headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             pr_name: this.pr_name,
//             pr_detail: this.pr_detail,
//             pr_price: this.pr_price
//           })
//         })
//       }catch (e) {
//         console.error(e)
//       }
//     }
//   }
// }
</script>

<style scoped>
/* h3 {
  margin: 0;
}

h6 {
  color: gray;

  padding: 0;
  margin: 5px 0 0 0;
  font-size: 15px;
}

.wrap_product_detail_box {
  background: white;
  width: 100vw;
  height: 510px;
}

.wrap_product_img-2 {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 300px;

  overflow: hidden;
}

.product_img-2 {
  object-fit: cover;
  margin-top: 15px;
  width: 90%;
  height: 100%;
}

.wish_btn {
  float: right;
  border: none;
  background: white;
}

.wish_icon {
  width: 20px;
  height: 20px;

  margin-right: 30px;
}

.click_num {
  margin-left: 325px;
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

.select_wish_cart {
  color: black;
  font-size: 20px;

  text-align: center;
}

.product_wish {
  display: inline-block;
  margin-right: 30px;
}

.product_cart {
  display: inline-block;
}

.to_wish {
  text-decoration: none;
  color: black;
} */
</style>
