<template>
<div class="wrap_wishlist_box">
<div class="wish_title">
  <h1>MY WISHLIST</h1>
</div>

<div class="wrap_wishlist">
  <div v-for="item in wishItem" :key="item.id" class="wrap_wishlist_content">
    <h3>{{ item.pr_name }} </h3>
    <h5>{{ item.pr_detail }} </h5>
    <h4>{{ item.pr_price }} </h4>
  </div>

</div>
</div>
</template>


<script>
export default {
  data() {
    return {
      wishItem: []
    }
  },

  async created() {
    try {
      const response = await fetch('http://localhost:3001/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        this.wishItem = await response.json()
      } else {
        alert('데이터 조회 실패')
      }
    }catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>
.wrap_wishlist_content>h3,
.wrap_wishlist_content>h4,
.wrap_wishlist_content>h5 {
  margin: 5px 5px 5px 0;
}


.wish_title {
  display: flex;
  justify-content: center;

  height: 50px;
  
  margin: 0;
}

.wish_title>h1 {
  margin: 0px;
}

.wrap_wishlist_box {
  height: 77vh;
}

.wrap_wishlist {
  margin: 0px;
  padding: 0px;
}

.wrap_wishlist_content {
  /* background: gray; */

  margin: 40px 10px 50px 80px;
}
</style>