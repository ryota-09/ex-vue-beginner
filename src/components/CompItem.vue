<template>
  <div>
    <input type="text" v-model="price" v-on:change="preChange"><button type="button" v-on:click="preClick">削除</button>
  </div>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from "vue-property-decorator";
@Component
export default class CompItem extends Vue {
  @Prop({default: 0})
  private index!:number;
  private price = 0;

  @Emit()
  onChange(price: number, index: number): void{
    console.log(price, index);
  }

  @Emit()
  onClick(index: number): void{
    console.log(index);
  }

  preChange(): void{
    this.onChange(this.price, this.index);
  }

  preClick(): void{
    this.onClick(this.index);
  }
}
</script>

<style scoped>

</style>
