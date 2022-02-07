<template>
  <div class="ex01">
    <div>
      <span v-show="!canShowFrag">名前: </span>
      <span v-show="canShowFrag">名前: {{ myName }}</span>
    </div>
    <div>
      <span v-show="!canShowFrag">年齢: 0歳</span>
      <span v-show="canShowFrag">年齢: {{ age }} 歳</span>
    </div>
    <div>
      <span v-show="!canShowFrag">10年後の年齢: 0歳</span>
      <span v-show="canShowFrag">10年後の年齢: {{ age + 10 }}歳</span>
    </div>
    <div>
      <span>趣味:</span>
      <span v-for="hobby of hobbys" v-bind:key="hobby" v-show="canShowFrag">
      <span>&nbsp;{{ hobby }}</span>
    </span>
    <br>
    <div>
      <a v-show="!canShowFrag">自社ページリンク</a>
      <a v-bind:href="webUrl" v-show="canShowFrag">自社ページリンク</a>
    </div>
    <div>
      <img v-bind:src="imgUrl" v-show="canShowFrag">
    </div>
    <div>
      <button type="button" v-bind:disabled="canShowFrag" v-on:click="onClick">ボタン</button>
    </div>
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXXXXComponent extends Vue {
  private myName = "山田たろう";
  private age = 33;
  private hobbys = ["スイム", "バイク", "ラン"];
  private webUrl = "https://google.com";
  private imgUrl = "/img/DSC_0545.JPG";
  private canShowFrag = false;

  onClick(): void{
    this.canShowFrag = true;
  }
}

</script>
<style scoped>
.ex01 {
  text-align: left;
}
img {
  width: 250px;
}
</style>
