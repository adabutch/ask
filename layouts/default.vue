<template>
  <div>
    <div><headerComponent /></div>
    <nuxt />
  </div>
</template>

<script>
import headerComponent  from '~/components/headerComponent'

export default {
  components: { headerComponent },
}
</script>

<style>
</style>
