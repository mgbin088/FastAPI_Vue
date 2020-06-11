<script>
  export default {
    created() {
      const { params, query } = this.$store;
      const { path } = params;
      this.$route.replace({ path: '/' + path, query})
    },
    render: function (h) {
      return h()
    }
  }
</script>