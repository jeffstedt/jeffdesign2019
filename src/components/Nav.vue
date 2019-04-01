<template>

    <div class="Nav Col vCenter">

      <div class="Container Nav__Container">

        <ul>

          <li v-on:click="returnTab('Home')"><router-link to="/">Jeffdesign</router-link></li>
          <li v-on:click="returnTab('Development')"><router-link to="/development">Development</router-link></li>
          <li v-on:click="returnTab('Design')"><router-link to="/design">Design</router-link></li>

        </ul>

      </div>

    </div>

</template>

<script>


export default {
  name: 'Nav',

  props: {
    tabs: [Object, Array]
  },

  data() {
      return {

      }
  },

  mounted() {

  },

  methods: {
     returnTab(input) {

       //Update prop value

       for (var i = 0; i < this.$props.tabs.length; i++) {

         if (this.$props.tabs[i].label == input) {

           this.$props.tabs[i].status = true

         } else {

           this.$props.tabs[i].status = false

         }

       }

     }

   }

}
</script>

<style lang="scss">
.Nav {
  right: 0;
}
</style>
