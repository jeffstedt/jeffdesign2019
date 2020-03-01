<template>
  <div class="Nav Col vCenter">
    <div class="Container Nav__Container">
      <ul>
        <li v-on:click="() => this.changeTheme()"><router-link to="/">Jeffdesign</router-link></li>
        <li v-on:click="() => this.changeTheme()"><router-link to="/development">Development</router-link></li>
        <li v-on:click="() => this.changeTheme()"><router-link to="/design">Design</router-link></li>
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
      return {}
  }

}
</script>

<style lang="scss">
.Nav {
  right: 0;
}
</style>
