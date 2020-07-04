<template>

  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="(link) in links"
      tag="li"
      :key="link.path"
      :to="link.path"
      active-class="active"
      :exact="link.exact">
      <a class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>

</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data: () => ({
    links: [
      {
        title: 'Счет',
        path: '/',
        exact: true

      },
      {
        title: 'История',
        path: '/history',
        exact: true
      },
      {
        title: 'Планирование',
        path: '/planning',
        exact: true
      },
      {
        title: 'Новая запись',
        path: '/record',
        exact: true
      },
      {
        title: 'Категории',
        path: '/categories',
        exact: true
      }
    ]
  })
}
</script>
