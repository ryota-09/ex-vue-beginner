import Vue from 'vue'
import Vuex from 'vuex'
import { Student } from "@/types/student";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    studentList: [
      new Student(10, "イチロー", 21, 1),
      new Student(20, "ジロー", 32, 2),
      new Student(30, "サブロー", 43, 1)
    ]
  },
  actions: {
  },
  mutations: {
  },
  getters: {
    getStudentList(state): Array<Student>{
      return state.studentList;
    }
  },
  modules: {
  }
})
