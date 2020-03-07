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
      content: [{
          h1: '<span class="Banner">Development.</span>'
        },
        {
          h2: 'What can I do?'
        },
        {
          p: "First languages I learned was primarily PHP and mySQL. I quickly emerged into the world of Javascript where I've grown a solid knowledge of ES6. My frameworks of choice is React & Vue. To keep it short - I've done all from web apps, ads to games."
        },
        {
          h2: 'Technologies I use'
        },
        {
          ul: ['Javscript', 'Typescript', 'Node.js', 'React.js', 'Vue.js', 'GraphQL', 'Apollo', 'Docker', 'Webpack', 'GIT', 'SASS/LESS', 'GSAP']
        },
        {
          a: '<a class="Cta" href="https://github.com/jeffdesign" target="_blank">Github</a>'
        },
      ]
    }
  }
}
</script>
