<script>
  export default {
    name: "Item",
    functional: true,
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    render(h, context) {
      const { icon, title } = context.props;
      const vnodes = [];

      if (icon) {
        vnodes.push(<svg-icon icon-class={icon}></svg-icon>)
      }
      if (title) {
        vnodes.push(h('span', {slot: 'title'}, title))
      }
      return vnodes
    }
  }
</script>


