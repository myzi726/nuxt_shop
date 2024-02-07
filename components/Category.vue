<template>
    <div class="wrap_category">
      <div class="category">
        
        <nuxt-link to="/detail">
            <div class="cate_img1"></div>
        </nuxt-link>

        <nuxt-link to="/">
            <div class="cate_img2"></div>
        </nuxt-link>

        <nuxt-link to="/">
            <div class="cate_img3"></div>
        </nuxt-link>

      </div>
    </div>
</template>

<script>


</script>

<style scoped>
.wrap_category {
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 170px;

  margin-top: -10px;
}

.cate_img1 {
    display: inline-block;

    background: #000;
    color: white;
    width: 100px;
    height: 100px;
    margin: 40px 10px 10px;

    border-radius: 50px;
}

.cate_img2 {
    display: inline-block;

    background: #000;
    color: white;
    width: 100px;
    height: 100px;
    margin: 40px 10px 10px;

    border-radius: 50px;
}

.cate_img3 {
    display: inline-block;

    background: #000;
    color: white;
    width: 100px;
    height: 100px;
    margin: 40px 10px 10px;

    border-radius: 50px;
}

</style>