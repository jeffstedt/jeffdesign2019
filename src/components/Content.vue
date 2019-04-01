<template>

    <div class="Content">

      <div class="Container">

        <div class="" v-for="item in content">

          <h1 v-if=" 'h1' in item " v-html="item.h1">{{item.h1}}</h1>

          <h2 v-if=" 'h2' in item " v-html="item.h2">{{item.h2}}</h2>

          <p v-if=" 'p' in item " v-html="item.p">{{item.p}}</p>

          <div class="Content__List" v-if=" 'ul' in item " >

            <span v-for="li in item.ul" v-html="li">{{li}}</span>

          </div>

          <div v-if=" 'a' in item " v-html="item.a">

            {{item.a}}
            
          </div>

        </div>

      </div>

    </div>

</template>

<script>
export default {
  name: 'Content',
  props: {
    content: [Object, Array]
  },

  data() {
      return {

      }
  }

}
</script>

<style lang="scss">
.Content {
  left: 0;
}
.Container {
  max-width: 900px;
  margin: auto;
}
</style>
