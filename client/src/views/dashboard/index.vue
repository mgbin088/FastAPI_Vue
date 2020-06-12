<template>
  <h1>您是第{{ number }}位访问者</h1>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: "index",
    data() {
      return {
        number: 0
      }
    },
    created() {
      this.get_number()
    },
    methods: {
      get_number() {
        const k = "number";
        if (this.number === 0){
          this.number = Cookies.get(k) || Math.round(Math.random()*50) + 1;
          Cookies.set(k, this.number, {expires: 1})
        }
      }
    }
  }
</script>

<style scoped>

</style>