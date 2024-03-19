<template>
    <div class="wrap_category">
      <div class="category">
        
        <nuxt-link to="base_product">
            <img src="../assets/image/baseIcon.png" class="to_base_pr">
        </nuxt-link>

        <nuxt-link to="lip_product">
            <img src="../assets/image/lipIcon.png" class="to_lip_pr">
        </nuxt-link>

        <nuxt-link to="eye_product">
            <img src="../assets/image/eyeIcon.png" class="to_eye_pr">
        </nuxt-link>

      </div>
    </div>
</template>

<script>


</script>

<style scoped>
h4 {
    margin: 0px;
}

.wrap_category {
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 162px;
}

.category {
    margin: 10px;
}

.to_base_pr,
.to_lip_pr,
.to_eye_pr{
    display: inline-block;

    width: 80px;

    margin: 30px 15px 0 15px;
    
}

</style>