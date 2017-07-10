<template>
  <div>
    <div>{{ share.title }}({{ share.source }})</div>
    <div>{{ share.author }}</div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      image: {
        'min-width': '60%',
        'max-width': '60%'
      }
    }),
    props: {
      share: {
        type: Object,
        default: function () {
          return { title: '', source: '', author: '' }
        }
      },
    },
  }
</script>
