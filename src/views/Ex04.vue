<template>
  <div>
    <input type="text" v-model.number="price1"><br>
    <input type="text" v-model.number="price2"><br>
    <input type="text" v-model.number="price3">
    <div>税抜き価格: {{ ( price1 + price2 + price3 ).toLocaleString() }}円</div>
    <div>税込み価格: {{ Math.floor(( price1 + price2 + price3 ) * 1.1).toLocaleString() }}円</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private price1 = 0;
  private price2 = 0;
  private price3 = 0;

  //ゲッターを作ろう。
}
</script>

<style scoped>

</style>
