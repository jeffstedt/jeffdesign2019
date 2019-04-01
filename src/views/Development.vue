<template>

    <div class="View Col Left vCenter">

      <Content v-bind:content="content" />

    </div>

</template>

<script>
import Content from '../components/Content.vue'

export default {

  name: 'Home',

  components: {
    Content
  },

  data() {
      return {
        content: [
          {h1: '<span class="Banner">Development.</span>'},
          {h2: 'What can I do?'},
          {p: "First languages I learned was primarily PHP and mySQL. I quickly emerged into the world of Javascript where I've grown a solid knowledge of Vanilla JS. My framework of choice is Vue.js. For UI design I enyoy using libraries such as GSAP. To keep it short - I've done everything from webapps, dynamic ads to games."},
          {h2: 'Technologies I use'},
          {ul: ['Javscript','Node.js','Vue.js','SASS/LESS','GSAP','jQuery','PHP','mySQL','REST','GIT'] },
          {a: '<a class="Cta" href="https://github.com/jeffdesign" target="_blank">Github</a>'},
        ]
      }
  }

}
</script>
