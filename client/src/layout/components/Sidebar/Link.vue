<template>
  <comment :is="type" v-bind="linkProps(to)">
    <slot />
  </comment>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    computed: {
      isExternal() {
        return /^(http?:|mailto:|tel:)/.test(this.to)
      },
      type() {
        if (this.isExternal) {
          return 'a'
        }
        return 'router-link'
      }
    },
    methods: {
      linkProps(to) {
        if (this.isExternal) {
          return {
            href: 'to',
            target: '_blank',
            rel: 'noopener'
          }
        }
        return {
          to: to
        }
      },

    }
  }
</script>