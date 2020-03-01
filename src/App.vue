<template>
  <div class="page" v-bind:class="setTheme">
    <transition
      v-on:enter="enterPage"
      v-on:leave="leavePage"
      v-bind:css="false"
      appear
    >
     <router-view></router-view>
    </transition>
    <ProfileImg />
    <Nav :changeTheme="changeTheme" />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import ProfileImg from '@/components/ProfileImg.vue'
import animations from '@/animations.js'

export default {
  name: 'app',
  components: {
    Nav,
    ProfileImg
  },
  mixins: [animations],

  data() {
    return {
      pages:
        [
          {label: 'Home', status: false, theme: 'Red'},
          {label: 'Development', status: false, theme: 'Orange'},
          {label: 'Design', status: false, theme: 'Pink'},
        ]
    }
  },

  created() {
    this.changeTheme()
  },

  computed: {
    setTheme() {
      return this.pages.map(page => !!page.status && page.theme)
    }
  },

  methods: {
    changeTheme() {
     this.pages.forEach((page) => page.label === this.$route.name ? (page.status = true) : (page.status = false))
    }
  }
}
</script>

<style lang="scss">
@import './styles/App.scss';
</style>
