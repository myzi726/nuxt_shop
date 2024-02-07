<template>
  <div class="footer">
      <div class="bottomBar">
        <nuxt-link to="/">
          <img src="../assets/home.png" class="to_home">
        </nuxt-link>
        <img src="../assets/category.png" class="to_category">
        <nuxt-link to="/wish" class="title_btb">
          <img src="../assets/wish.png" class="to_wish">
        </nuxt-link>
        <nuxt-link to="/myPage" class="title_btb">
          <img src="../assets/mypage.png" class="to_mypage">
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

  background: lightgray;

  color: white;
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
  width: 70px;
  height: 70px;
}

.to_category {
  padding: 10px;
  margin-right: 25px;
  width: 70px;
  height: 70px;
}

.to_wish {
  padding: 10px;
  margin-right: 25px;
  width: 70px;
  height: 70px;
}

.to_mypage {
  padding: 10px;
  width: 70px;
  height: 70px;
}

</style>