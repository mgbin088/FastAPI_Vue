<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView: needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixHeader}">
        <Header />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
  import { AppMain, Sidebar, Header, TagsView } from './components'
  import { mapState } from 'vuex'
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    components: {
      Sidebar,
      Header,
      AppMain,
      TagsView
    },
    mixins: [ResizeMixin],
    computed: {
      ...mapState({
        sidebar: state => state.app.sidebar,
        device: state => state.app.device,
      }),
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      },
      needTagsView() {
        return true
      },
      fixHeader() {
        return true
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('app/closeSidebar', { withoutAnimation: false })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/mixin.scss";
  @import "../styles/variables.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }
  .mobile .fixed-header {
    width: 100%;
  }

</style>