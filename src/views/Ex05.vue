<template>
  <div class="ex05">
    <div>
      <span style="color:red;" v-show="!canShowName">名前が入力されていません。</span><br>
      <span>名前: </span>
      <input type="text" v-model="name">
    </div>
    <div>
      <span style="color:red;" v-show="!canShowAge">年齢が入力されていません。</span><br>
      <span>年齢: </span>
      <input type="text" v-model.number="name">
    </div>
    <div>
      <span style="color:red;" v-show="!canShowComment">コメントが入力されていません。</span><br>
      <span>コメント: </span><br>
      <textarea name="" id="" cols="25" rows="5" v-model="comment"></textarea>
    </div>
    <div><button type="button">入力値チェック</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private name = "";
  private age = "";
  private comment = "";
  private canShowName = true;
  private canShowAge = true;
  private canShowComment = true;
}
</script>

<style scoped>
.ex05 {
  text-align: left;
}
</style>
