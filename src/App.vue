<template>
  <div id="app">
    <GButton primary>Button</GButton>
    <pre>{{ test }}</pre>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
  setup() {
    const test = ref('test')

    return {
      test,
    }
  }
});
</script>

<style src="@golem-ai/design-system/dist/design-system.css"></style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
