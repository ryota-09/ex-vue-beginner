<template>
  <div class="ex01">
    <div>
      <span>名前: {{ myName }}</span>
    </div>
    <div>
      <span>年齢: {{ age }} 歳</span>
    </div>
    <div>
      <span>10年後の年齢: {{ age + 10 }}歳</span>
    </div>
    <div>
      <span>趣味:</span>
      <span v-for="hobby of hobbys" v-bind:key="hobby">
      <span>&nbsp;{{ hobby }}</span>
    </span>
    <br>
    <div>
      <a v-bind:href="webUrl">自社ページリンク</a>
    </div>
    <div>
      <img v-bind:src="imgUrl">
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
}
</script>
<style scoped>
.ex01 {
  text-align: left;
  border: 2px solid black;
  padding: 10px;
  width: 250px;
}
img {
  width: 250px;
}
</style>
