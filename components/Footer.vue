<template>
  <div class="footer">
  
      <div class="bottomBar">
        <nuxt-link to="/">
          <img src="../assets/image/home.png" class="to_home">
        </nuxt-link>
        <nuxt-link to="category">
        <img src="../assets/image/category.png" class="to_category">
        </nuxt-link>
        <nuxt-link to="wish" class="title_btb">
          <img src="../assets/image/wish.png" class="to_wish">
        </nuxt-link>
        <nuxt-link to="myPage" class="title_btb">
          <img src="../assets/image/mypage.png" class="to_mypage">
        </nuxt-link>
      </div>

    </div>
</template>

<script>
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;

  background: white;
  color: white;

  padding: 10px;

  border-top: 0.5px solid lightgray;
}

.bottomBar {
    display: flex;
}

.bottomBar>h3 {
    margin: 25px;
}

.title_btb {
  text-decoration: none;
  color: white;
}

.to_home {
  padding: 10px;
  margin-right: 25px;
  width: 50px;
  height: 50px;

}

.to_category {
  padding: 10px;
  margin-right: 25px;
  width: 50px;
  height: 50px;


}

.to_wish {
  padding: 10px;
  margin-right: 25px;
  width: 50px;
  height: 50px;


}

.to_mypage {
  padding: 10px;
  width: 50px;
  height: 50px;


}

</style>