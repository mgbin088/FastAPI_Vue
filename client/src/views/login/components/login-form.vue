<template>
  <Form ref="loginForm" :module="loginForm" @keydown.enter.native="handleSubmit">
    <Alert v-if="alertShow" :type="alertType">{{ alertData }}</Alert>
    <FormItem>
      <Input v-model="loginForm.username" placeholder="请输入用户名" @on-focus="alertShow=false">
        <span slot="prepend">
          <icon :size="16" type="ios-person"></icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Input type="password" v-model="loginForm.password" placeholder="请输入密码" @on-focus="alertShow=false">
        <span slot="prepend">
          <icon :size="14" type="md-lock"></icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>

<script>
  const alertTypes = ["", "success", "warning", "error"];
  export default {
    name: 'LoginForm',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        alertShow: false,
        alertData: "",
        alertType: alertTypes[3]
      }
    },
    methods: {
      handleSubmit () {
        if (this.loginFormValidate()) {
          this.$emit('on-success-valid', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
        }
      },
      loginFormValidate(){
        if (this.loginForm.username === "") {
          this.setAlertData(true, "用户名不能为空");
          return false
        } else if (this.loginForm.password === "") {

          this.setAlertData(true, "密码不能为空");
          return false
        } else if (this.loginForm.password.length < 6) {
          this.setAlertData(true, "6位数密码");
          return false
        }
        return true
      },
      setAlertData(show, data, type) {
        this.alertShow = show;
        this.alertData = data;
        this.alertType = type? type: this.alertType;
      }
    }
  }
</script>