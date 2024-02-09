<template>
    <div class="container"> 
      <div class="main_img">
        <img src="../assets/thumbImg.jpeg" class="thumb_img">
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
  background:lightgray;

  text-align: center;

  width: 100vw;
  height: 350px;
}

.thumb_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>