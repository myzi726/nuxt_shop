<template>
    <div>
      <nuxt-link to="login" class="to_login"><h3>로그인</h3></nuxt-link>
      <nuxt-link to="join" class="to_join"><h3>회원가입</h3></nuxt-link>
    </div>
</template>

<script>
</script>

<style scoped>
h3 {
    font-size: 30px;
    text-align: center;

    margin-top: 200px;
}

.to_login, .to_join {
    text-decoration: none;
    color: black;
}
</style>