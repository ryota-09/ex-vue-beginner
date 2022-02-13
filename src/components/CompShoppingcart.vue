<template>
  <div>
    <span>{{ itemById(id).name }}( {{ itemById(id).price }} 円)</span>&nbsp;
    <button type="button" v-on:click="preClick">削除</button>
  </div>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from "vue-property-decorator";
import { Item } from "@/types/item";
@Component
export default class CompShoppingcart extends Vue {
  @Prop()
  private id!:number;

  @Emit()
  onClick(id: number): void{
    console.log(id);
  }
  preClick(): void{
    this.onClick(this.id);
  }
  get itemList(): Array<Item>{
    return this.$store.getters.getAllItems;
  }

  itemById(id: number): Item{
    return this.$store.getters.getItemById(id);
  }
}
</script>

<style scoped>

</style>
