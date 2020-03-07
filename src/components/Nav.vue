<template>
<div class="Nav Col vCenter">
  <div class="Container Nav__Container">
    <ul>
      <template v-for="(route, idx) in routes">
        <li v-on:click="() => changeTheme()" v-bind:key="idx">
          <router-link :to="route.path">{{route.text}}</router-link>
        </li>
      </template>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    changeTheme: Function
  },
  data() {
    return {
      routes: [{
          path: '/',
          text: 'Jeffdesign'
        },
        {
          path: '/development',
          text: 'Development'
        },
        {
          path: '/design',
          text: 'Design'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.Nav {
  right: 0;
}
</style>
