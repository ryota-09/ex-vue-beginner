<template>
  <div class="ex05">
    <form action="">
       <div>
      <div><span style="color:red;" v-show="!canShowName">名前が入力されていません。</span></div>
      <span>名前: </span>
      <input type="text" v-model="name" name="name">
    </div>
    <div>
      <div><span style="color:red;" v-show="!canShowAge">年齢が入力されていません。</span></div>
      <span>年齢: </span>
      <input type="text" name="age" v-model.number="age">
    </div>
    <div>
      <div><span style="color:red;" v-show="!canShowComment">コメントが入力されていません。</span></div>
      <span>コメント: </span><br>
      <textarea name="comment" id="" cols="25" rows="5" v-model="comment"></textarea>
    </div>
    <div><button type="button" v-on:click="onCheck">入力値チェック</button></div>
    <hr>
    <div>
      <div>
        <span>入力値:</span>
      </div>
      <div>
        <span>名前: </span><span>{{ name }}</span>
      </div>
      <div>
        <span>年齢: </span><span>{{ age }}</span>
      </div>
      <div>
        <span>コメント: </span><pre>{{ comment }}</pre>
      </div>
    </div>
    </form>
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

  onCheck (): void{
    if( this.name === ""){
      this.canShowName = false;
    }
    if( this.age === ""){
      this.canShowAge = false;
    }
    if( this.comment === ""){
      this.canShowComment = false;
    }

    //ここの処理を改善したい。
    if (!(this.name === "" ||  this.age === "" ||  this.comment === "")){
      alert("送信完了しました。")
    }
  }
}
</script>

<style scoped>
.ex05 {
  text-align: left;
}
</style>
