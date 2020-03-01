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
          {h1: '<span class="Banner">Hi. My name is Jeffrey.</span><br><span class="Sub__Title">I do creative stuff.</span>'},
          {h2: 'My story - wrapped in a few sentences.'},
          {p: "I was born and raised in Sweden - Norrköping. In 2015 I moved to Stockholm to learn tech while studying Web Development at Medieinstitutet. After graduating I pursued my career as a frontend developer working as a freelancer. I later started working for a full-service agency where I've worked on many challenging cases. Today I work for a company who enables people to move freely."},
          {a: '<a class="Cta" href="mailto:contact@jeffdesign.se">Contact</a>'},
        ]
      }
  }
}
</script>
