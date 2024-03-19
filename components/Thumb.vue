<template>
    <div class="container"> 
      <div class="main_img">
        <nuxt-link to="lip_product"><img src="../assets/image/thumbImg.jpeg" class="thumb_img"></nuxt-link>
      </div>
    </div>
  
</template>

<script>
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.main_img {
  text-align: center;

  width: 100vw;
  height: 350px;
}

.thumb_img {
    width: 330px;
    height: 100%;

    margin-left: 5px;

    object-fit: cover;
}
</style>