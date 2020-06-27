<template>
  <div id="app">
    <component :is="layout">
      <!--<router-view/>-->
    </component>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
import ModalLayout from './layouts/ModalLayout'

export default {
  components: {
    MainLayout,
    ModalLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'modal-layout')
    }
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assests/index.css';
</style>
