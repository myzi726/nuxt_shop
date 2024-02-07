<template>
  <div class="login_box">
    <h1>로그인</h1>
    <div class="input_id">
        아이디 : <input type="text" class="input_form_id">
    </div>
    <div class="input_pw">
        비밀번호 : <input type="password" class="input_form_pw">
    </div>
    <div class="btn_login">
    <v-btn
      color="primary"
      elevation="2"
      outlined
      rounded
    >로그인</v-btn>
    </div>
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
  padding: 5px;
}

.input_form_id {
  padding: 7px;
}

.input_pw {
  font-size: 20px;
  padding: 5px;
  margin: 10px;
}

.input_form_pw {
  padding: 7px;
}

.btn_login{
  padding: 10px;
}

button {
  width: 100px;
  height: 30px;

  font-size: 15px;
  font-weight: bold;

  background: lightskyblue;

  border: none;
  border-radius: 5px;
}

</style>