<template>
  <div>
    <div class="item-list">
      <span>商品一覧</span>
      <div class="item" v-for="item of itemList" v-bind:key="item.id">
        <CompItemList v-bind:id="item.id" v-on:on-click="addCartItem"></CompItemList>
      </div>
      <hr>
    </div>
    <div class="shoppingcart">
      <div>ショッピングカート</div>
      <div class="cart-item" v-for="item of shoppingCartArray" v-bind:key="item.id">
        <CompShoppingcart v-bind:id="item.id" v-on:on-click="removeItem"></CompShoppingcart>
      </div>
      <span>合計 {{ totalPrice }} 円</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types/item";
import { Component, Vue } from "vue-property-decorator";
import CompItemList from "@/components/CompItemList.vue";
import CompShoppingcart from "@/components/CompShoppingcart.vue";

@Component({
  components: {
    CompItemList,
    CompShoppingcart
  }
})
export default class XXXComponent extends Vue {
  private totalPrice = 0;
  private shoppingCartArray = new Array<Item>();

  addCartItem(id: number): void{
    this.shoppingCartArray.push(this.itemById(id))
    this.calcTotalPrice(this.shoppingCartArray);
  }
  removeItem(id: number): void{
    for(let i = 0; i < this.shoppingCartArray.length;i++){
      if ( this.shoppingCartArray[i].id === id){
        this.shoppingCartArray.splice(i, 1);
      }
    }
    this.calcTotalPrice(this.shoppingCartArray);
  }
  calcTotalPrice(array: Array<Item>): void{
    this.totalPrice = 0;
    for(let item of array){
      this.totalPrice += item.price
    }
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
