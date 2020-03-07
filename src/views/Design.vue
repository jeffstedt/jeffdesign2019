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
          h1: '<span class="Banner">Design & UX.</span>'
        },
        {
          h2: "When I'm not developing<br>I'm probably doing design"
        },
        {
          p: "Before I knew how to make a program write Hello World I'd spend most of my time in Photoshop. Although today I find myself mostly creating prototypes and sketching down ideas in Adobe XD. I've done alot of UX work through CRO where my ideas been rapidly tested and anaylized with great conversion results."
        },
        {
          h2: 'Tools I enjoy using'
        },
        {
          ul: ['Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator']
        },
      ]
    }
  }
}
</script>
