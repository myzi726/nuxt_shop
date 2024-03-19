<template>
  <div class="login_box">
    <h1>로그인</h1>

    <form @submit.prevent="HandleLogin">
      <div class="input_id">
        <input
          id="u_id"
          v-model="user_id"
          placeholder="아이디"
          type="text"
        />
      </div>

      <div class="input_pw">
        <input
          id="u_pw"
          v-model="user_pw"
          placeholder="비밀번호"
          type="password"
        />
      </div>

      <div class="wrap_btn_login">
        <button type="submit" class="btn_login">LOGIN</button>
      </div>
    </form>
  </div>   
</template>

<script>
export default {
  data() {
    return {
      user_id: "",
      user_pw: "",
    }
  },

  methods: {
    async HandleLogin() {
        try {
        const token = sessionStorage.getItem('token');
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: this.user_id,
            user_pw: this.user_pw
          })
        })


        const data = await response.json()

        if(response.ok) {
          alert('로그인 성공')
          sessionStorage.setItem('token', data.token)
          this.$router.push('/')
        } else {
          alert('로그인 실패')
        }

      } catch (error) {
        console.error(error)
      }
      }
    }
  }
</script>

<style>
h1 {
  margin-top: 80px;
  margin-bottom: 15px;
  padding: 30px;
}

.login_box {
  /* background: gray; */
  text-align: center;
}

.input_id, .input_pw {
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
}

#u_id, #u_pw {
  border-style: solid;
  border-radius: 8px;

  padding: 10px;
}

.wrap_btn_login {
  margin: 50px;
}

.btn_login {
  width: 100px;
  height: 40px;

  font-size: 20px;
  font-weight: bold;

  border-radius: 10px;

  background: lightskyblue;
}

</style>
