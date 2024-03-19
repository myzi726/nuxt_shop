<template>
  <div class="wrap_join_box">
    <h1 class="join_title">회원가입</h1>

    <form @submit.prevent="HandleSignup">
      <div class="input_userId">
        <input
          id="userId"
          type="text"
          placeholder="아이디"
          v-model="user_id" />
      </div>

      <div class="input_userPw">
        <input
          id="userPw"
          type="password"
          placeholder="비밀번호"
          v-model="user_pw"
        />
      </div>

      <div class="input_userName">
        <input
          id="userName"
          type="text"
          placeholder="이름"
          v-model="user_name"
        />
      </div>


      <div class="wrap_btn_join">
        <button type="submit" class="btn_join">JOIN</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        user_id:'',
        user_pw:'',
        user_name:''
      }
    },

  methods: {
    async HandleSignup() {
        try{
          const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user_id: this.user_id,
              user_pw: this.user_pw,
              user_name: this.user_name
            })
          })

          if (response.ok) {
            alert('회원가입 성공')
            this.$router.push('/')
          } else {
            alert('회원가입 실패')
          }
        
        } catch (e) {
          console.error(e)
        }
      }
    }
}
</script>

<style scoped>
.join_title {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 15px;
}

.input_userName,
.input_userId,
.input_userPw {
  padding: 15px;

  text-align: center;

  font-size: 18px;
  font-weight: bold;
}

#userName,
#userId,
#userPw {
  border-style: solid;
  border-radius: 8px;

  padding: 10px;
}

.wrap_btn_join {
  display: flex;
  justify-content: center;

  margin: 50px;
}

.btn_join {
  width: 100px;
  height: 40px;

  font-size: 20px;
  font-weight: bold;

  background: lightskyblue;
  border-radius: 10px;
}
</style>
