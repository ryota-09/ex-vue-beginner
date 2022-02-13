import Vue from 'vue'
import Vuex from 'vuex'
import { Student } from "@/types/student";
import { Item } from "@/types/item";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    studentList: [
      new Student(10, "イチロー", 21, 1),
      new Student(20, "ジロー", 32, 2),
      new Student(30, "サブロー", 43, 1)
    ],
    itemList: [
      new Item(10, "手帳ノート", 1000),
      new Item(20, "文房具セット", 1500),
      new Item(30, "ファイル", 2000)
    ]
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    getStudentList(state): Array<Student>{
      return state.studentList;
    },
    getAllItems(state): Array<Item>{
      return state.itemList;
    },
    getItemById(state){
      return (id: number) => {
        const newArray = [];
        for(const item of state.itemList){
          if( item.id === id){
            newArray.push(item)
          }
        }
        return newArray[0];
      }
    }
  },
  modules: {
  }
})
