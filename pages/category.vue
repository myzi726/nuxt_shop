<template>
  <Header />

  <div class="wrap_cate_box">
    <div class="category_list">
      <nuxt-link to="base_product" class="to_pr_detail"><h3>BASE</h3></nuxt-link>
      <nuxt-link to="eye_product" class="to_pr_detail"><h3>EYE</h3></nuxt-link>
      <nuxt-link to="lip_product" class="to_pr_detail"><h3>LIP</h3></nuxt-link>
    </div>
  </div>

  <Footer />
</template>

<script>

</script>

<style>
.to_pr_detail>h3 {
  margin: 40px;
}

.to_pr_detail {
  text-decoration: none;
  color: black;
}

.wrap_cate_box {
  background: white;
  height: 512px;
}

.category_list {
  text-align: center;
  padding: 80px;

  font-size: 45px;
}
</style>
