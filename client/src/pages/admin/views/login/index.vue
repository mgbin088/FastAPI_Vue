<template>
  <div id="Login">
    <div class="login">
      <div class="login-con">
        <Card icon="log-in" title="欢迎登录" :bordered="false">
          <div class="form-con">
            <login-form @on-success-valid="handleSubmit" ref="alertObj"></login-form>
            <p class="login-tip">hello world</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginForm from './components/login-form'
  export default {
    name: 'Login',
    data(){
      return {
        alertObj: {
          alertShow: false,
          alertData: "",
          alertType: "error"
        },
        redirect: undefined
      }
    },
    components: {
      LoginForm
    },
    watch: {
      $route: {
        handler: function (route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      handleSubmit({username, password}) {

        this.$store.dispatch("userInfo/login", {username, password}).then(res => {
          let { data } = res;
          if (data.code === 1) {
            this.$router.push({ path: this.redirect || '/'})
          } else if (data.code === 2) {
            this.$refs.alertObj.setAlertData(true, "账号或密码错误");
          } else {
            this.$refs.alertObj.setAlertData(true, "错误：" + data.code);
          }
        }).catch(err => {
          console.log(err);
          this.$refs.alertObj.setAlertData(true, "参数错误");
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles/login.scss";
  #Login {
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    text-align: left;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }
</style>
