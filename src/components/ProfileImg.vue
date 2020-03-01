<template>

    <div class="Profile__Container">

      <img class="Profile__Img" v-bind:src="'./img/' + img.src" />

    </div>

</template>

<script>

export default {

  name: 'ProfileImg',

  components: {

  },

  data() {
      return {
        img: {
            src: 'profile.jpg'
          }
      }
  }
}

</script>
