<template>
  <div class="login_box">
    <h1>로그인</h1>

  <form v-on:submit.prevent="submitForm">
      <div class="input_id">
          <v-text-field
            v-model="userId"
            label="아이디"
            type="input"
        ></v-text-field>
      </div>

      <div class="input_pw">
          <v-text-field
              v-model="userPw"
              label="비밀번호"
              type="password"
        ></v-text-field>
      </div>

      <div class="btn_login">
        <v-btn
          color="primary"
          elevation="2"
          outlineda
          rounded
        >로그인</v-btn>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

h1 {
  margin-top: 50px;
  padding: 30px;
}

.login_box {
  /* background: gray; */
  text-align: center;
}

.input_id {
  font-size: 20px;
  padding: 20px;
}

.input_form_id {
  padding: 7px;
}

.input_pw {
  font-size: 20px;
  padding: 20px;
}

.input_form_pw {
  padding: 7px;
}


</style>