<template>
  <div>
    <h1>従業員検索</h1>
    <span>名前: </span>
    <input type="text" v-model="serchText">&nbsp;
    <button type="button" v-on:click="serchFunction">検索</button>
    <hr>
    <div>
      <h2>検索結果 ( {{ count }} 件)</h2>
      <div v-for=" name of serchResultList" v-bind:key="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Student } from "@/types/student";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class XXXComponent extends Vue {
  private serchText = "";
  private count = 0;
  private serchResultList = new Array<string>();

  serchFunction(): void{
    this.count = 0;
    this.serchResultList = new Array<string>();

    for(let student of this.studentList){
      if( student.name.includes(this.serchText)){
        this.count++;
        this.serchResultList.push(student.name);
      }
    }
  }

  get studentList(): Array<Student>{
    return this.$store.getters.getStudentList;
  }
}
</script>

<style scoped>

</style>
