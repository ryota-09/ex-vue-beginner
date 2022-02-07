<template>
  <div>
    <input type="text" v-model.number="num1"><span>+</span><input type="text" v-model.number="num2">
    <span>=</span>
    <span>{{ num1 + num2 }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private num1 = "";
  private num2 = "";
}
</script>

<style scoped>

</style>
