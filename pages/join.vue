<template>
    <div class="wrap_join_box">
        <h1 class="join_title">회원가입</h1>

        <form v-on:submit.prevent="submitForm">
            <div class="input_userName">
                <input id="userName" type="text" placeholder="Name" v-model="userName" />
            </div>

            <div class="input_userId">
                <input id="userId" type="text" placeholder="ID" v-model="userId"/>
            </div>

            <div class="input_userPw">
                <input id="userPw" type="password" placeholder="Password" v-model="userPw" />
            </div>

            <div class="wrap_btn_join">
                <button type="submit" class="btn_join">JOIN</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                userName: '',
                userId: '',
                userPw: '',
            }
        },

        methods: {
          submitForm: function() {
            console.log(this.userName, this.userId, this.userPw);
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

.input_userName, .input_userId, .input_userPw {
    padding: 15px;

    text-align: center;

    font-size: 20px;
    font-weight: bold;
}

#userName, #userId, #userPw {
    border-style: solid;
    border-radius: 8px;

    padding: 3px;
}

.wrap_btn_join {
    display: flex;
    justify-content: center;

    margin: 50px;

}

.btn_join {

    width: 80px;
    height: 40px;

    font-size: 20px;
    font-weight: bold;

    background: lightskyblue;
    border-radius: 10px;
}


</style>