<template>
  <div class="app-main-layout">

    <Navbar @toggle-click="changeNavWidth"></Navbar>

    <Sidebar v-model="isOpen"></Sidebar>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue">
        <i class="large material-icons">add</i>
      </router-link>s
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'MainLayout',
  data: () => ({
    isOpen: false
  }),
  components: {
    Navbar,
    Sidebar
  },
  methods: {
    changeNavWidth () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>

</style>
