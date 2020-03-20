<template>
  <div class="container">
    <Tabbar></Tabbar>
    <div class="note-header">
      <span>记事本</span>
      <svgicon name="more" width="30" height="30"></svgicon>
    </div>
    <div class="note-form">
      <div class="note-write">
        <input
          v-model="note"
          class="write-input"
          type="text"
          placeholder="待办事项"
          @keyup="subNote"
        />
        <button class="sub-input" @click="subNote">提交</button>
      </div>
      <div class="note-control">
        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>未完成</span>
            <svgicon
              name="down"
              width="25"
              height="25"
              @click="toogle('todo')"
            ></svgicon>
          </div>
          <div v-show="todo">
            <div
              class="detail-line"
              v-for="(item, index) in sortArr(noteList)"
              :key="index"
            >
              <div>
                <input type="checkbox" @click="changeNote(item, 1)" />
                <span>{{ item.title }}</span>
              </div>
              <button class="undo" @click="changeNote(item, 2)">取消</button>
            </div>
          </div>
        </div>

        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>已完成</span>
            <svgicon
              name="down"
              width="25"
              height="25"
              @click="toogle('hasdone')"
            ></svgicon>
          </div>
          <div v-show="hasdone">
            <div
              class="detail-line"
              v-for="(item, index) in sortArr(doneList)"
              :key="index"
            >
              <div class="under-line">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>已取消</span>
            <svgicon
              name="down"
              width="25"
              height="25"
              @click="toogle('undo')"
            ></svgicon>
          </div>
          <div v-show="undo">
            <div
              class="detail-line"
              v-for="(item, index) in sortArr(undoList)"
              :key="index"
            >
              <div>
                <span>{{ item.title }}</span>
              </div>
              <button class="undo" @click="changeNote(item, 0)">恢复</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/icons/more'
import '@/assets/icons/down'
import Tabbar from '@/components/tabbar/Index'
import { getNote, addNote, changeState } from '@/service/api'
import { parseTime } from '@/utils/date'
export default {
  name: 'Note',
  components: {
    Tabbar
  },
  data() {
    return {
      noteList: [],
      doneList: [],
      undoList: [],
      note: '',
      todo: true,
      hasdone: true,
      undo: true
    }
  },
  computed: {
    getdate() {
      return parseTime(new Date(), 'y-m-d')
    }
  },
  mounted() {
    this.fetchNote()
  },
  methods: {
    sortArr(arr) {
      return arr.slice().sort((a, b) => a.id - b.id)
    },
    deleteArr(arr, id) {
      return arr.splice(
        arr.findIndex(it => it.id === id),
        1
      )
    },
    async fetchNote() {
      const res = await getNote(this.getdate)
      this.noteList = res.data.noteList
      this.doneList = res.data.doneList
      this.undoList = res.data.undoList
      console.log(this.noteList, this.doneList, this.undoList)
    },

    async subNote() {
      try {
        console.log(this.note)
        const res = await addNote({
          title: this.note,
          time: this.getdate
        })
        const data = {
          id: res.data.id,
          title: this.note
        }
        this.noteList.push(data)
        this.note = ''
      } catch (err) {
        console.log(err)
      }
    },
    async changeNote(item, val) {
      try {
        const res = await changeState(item.id, val)
        console.log(res)
        if (val === 1) {
          this.doneList.push(item)
          this.deleteArr(this.noteList, item.id)
        } else if (val === 2) {
          this.undoList.push(item)
          this.deleteArr(this.noteList, item.id)
        } else {
          this.noteList.push(item)
          this.deleteArr(this.undoList, item.id)
        }
      } catch (err) {
        console.log(err)
      }
    },
    toogle(val) {
      if (val === 'todo') this.todo = !this.todo
      if (val === 'hasdone') this.hasdone = !this.hasdone
      if (val === 'undo') this.undo = !this.undo
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 180px;
}
.note-header {
  padding: 15px 0;
  background: aquamarine;
  font-size: 25px;
  display: flex;
  color: white;
  margin-bottom: 10px;
}
.note-header span {
  flex: 4 1;
  text-align: center;
}
.note-header svg {
  flex: 1 1;
}
.note-form {
  padding: 10px;
}
.note-write {
  display: flex;
  justify-content: space-between;
}
.write-input {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
  flex: 3 1;
}
.sub-input {
  background: aquamarine;
  color: white;
  padding: 10px;
  flex: 1 1;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 10px;
}
.note-control {
  margin-top: 30px;
}
.detail-line {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid rgb(172, 170, 170);
  border-left: 1px solid rgb(172, 170, 170);
  border-right: 1px solid rgb(172, 170, 170);
}
.detail-title {
  background: aquamarine;
  color: white;
  border: none;
}
.undo {
  background: none;
  border: 1px solid grey;
  padding: 10px;
  width: 80px;
  border-radius: 5px;
}
.under-line {
  text-decoration: line-through;
  color: gray;
}
</style>
