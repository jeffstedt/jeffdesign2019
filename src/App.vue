<template>

    <div class="page" v-bind:class="setTheme">

      <transition
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <router-view></router-view>

      </transition>

      <ProfileImg />

      <Nav v-bind:tabs="tabs" />

    </div>

</template>

<script>
import router from './router'
import Nav from '@/components/Nav.vue'
import ProfileImg from '@/components/ProfileImg.vue'

export default {

  name: 'app',

  components: {
    Nav,
    ProfileImg
  },

  data() {
    return {
      tabs:
        [
          {label: 'Home', status: false, theme: 'Red'},
          {label: 'Development', status: false, theme: 'Orange'},
          {label: 'Design', status: false, theme: 'Pink'},
        ]
    }
  },

  mounted() {

    console.log('       ██╗███████╗███████╗███████╗██████╗ ███████╗███████╗██╗ ██████╗ ███╗   ██╗');
    console.log('       ██║██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔════╝██║██╔════╝ ████╗  ██║');
    console.log('       ██║█████╗  █████╗  █████╗  ██║  ██║█████╗  ███████╗██║██║  ███╗██╔██╗ ██║');
    console.log('  ██   ██║██╔══╝  ██╔══╝  ██╔══╝  ██║  ██║██╔══╝  ╚════██║██║██║   ██║██║╚██╗██║');
    console.log('  ╚█████╔╝███████╗██║     ██║     ██████╔╝███████╗███████║██║╚██████╔╝██║ ╚████║');
    console.log('   ╚════╝ ╚══════╝╚═╝     ╚═╝     ╚═════╝ ╚══════╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝');

  },

  created() {

    this.setActiveTab()

  },

  computed: {

    //Loop tab arr and return active row
    //to set app theme color
    setTheme() {
      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].status == true) {
          return this.tabs[i].theme
        }
      }
    }

  },

  methods: {

    //Function takes input (current router.name)
    //and sets it to active
    setActiveTab() {

      for (var i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].label == this.$route.name) {
          this.tabs[i].status = true
        } else {
          this.tabs[i].status = false
        }
      }

    },

    //Ani for fading in an item
    enter(el, done) {
			const tl = new TimelineMax({
				onComplete: done
			})

			tl.set(el, {
				x: window.innerWidth/2 * -1.5,
				scale: 0.95,
				transformOrigin: '50% 50%',
        force3D: false,
        z: 0.01,
			})

			tl.to(el, 0.5, {
        transformPerspective:1000,
				x: 0,
				ease: Circ.easeOut
			});

			tl.to(el, 1, {
        transformPerspective:1000,
				scale: 1,
				ease: Circ.easeOut
			});
		},

    //Ani for fading out an item
		leave(el, done) {
			TweenMax.fromTo(el, 1, {
        transformPerspective:1000,
				autoAlpha: 1,
        x: 0,
        scale: 1,
        force3D: false,
        z: 0.01,
			}, {
        transformPerspective:1000,
        scale: 0.95,
        x: window.innerWidth/2,
				autoAlpha: 0,
				ease: Circ.easeOut,
				onComplete: done
			});
		}

  }
}
</script>

<style lang="scss">
@import './styles/App.scss';
</style>
