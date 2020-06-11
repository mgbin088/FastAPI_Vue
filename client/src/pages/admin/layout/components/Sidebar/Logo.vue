<template>
  <div class="sidebar-logo-container" :class="{'collapse': collapse}">
    <transition name="sidebarLogo">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      collapse: {
        type: Boolean,
        required: true
      }
    },
    data(){
      return {
        title: "Admin"
      }
    }
  }
</script>
<style lang="scss" scoped>

  .sidebarLogo-enter-active {
    transition: opacity 1.5s;
  }

  .sidebarLogo-enter,
  .sidebarLogo-leave-to{
    opacity: 0;
  }

  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    /*background: #2b2f3a;*/

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;
      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #000000;
        font-weight: 600;
        line-height: 50px;
        font-size: 32px;
        font-family: Avenir, Helvetica Neu, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    }
    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }
  }
</style>