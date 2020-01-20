<template>
  <div class="layout-default">
    <div><headerComponent /></div>
    <nuxt />
  </div>
</template>

<script>
import headerComponent  from '~/components/headerComponent'

export default {
  // middleware: 'auth',
  components: { headerComponent },
}
</script>

<style lang="scss">
.layout-default {
  position: relative;
  top: 90px;
}
</style>
