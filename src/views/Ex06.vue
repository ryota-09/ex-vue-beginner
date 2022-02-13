<template>
  <div>
    <button v-on:click="addItem">追加</button>
    <div v-for="(item, index) of itemCart" v-bind:key="index">
      <CompItem v-bind:index="index" v-on:on-change="changePrice" v-on:on-click="deleteItem"></CompItem>
    </div>
    <div>
      <span>税抜き価格: {{ formatPretty(total) }} 円</span>
    </div>
    <div>
      <span>税込み価格: {{ formatPretty(total * 1.1) }} 円</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompItem from "@/components/CompItem.vue";

@Component({
  components: {
    CompItem
  }
})
export default class XXXComponent extends Vue {
  private itemCart = new Array<number>();
  private total = 0;

  addItem(): void{
    this.itemCart.push(0);
  }

  changePrice(price: number, index: number): void{
    this.total = 0;
    this.itemCart[index] = price;
    this.sumPrice();
  }

  deleteItem(index: number): void{
    this.itemCart.splice(index, 1);
    this.total = 0;
    this.sumPrice();
  }

  sumPrice(): void{
    for(let i = 0; i < this.itemCart.length;i++){
      this.total += Number(this.itemCart[i]);
    }
  }

  formatPretty(num: number): string{
    return Math.floor(num).toLocaleString();
  }
}
</script>

<style scoped>

</style>
