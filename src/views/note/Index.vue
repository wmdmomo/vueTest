<template>
  <div>
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
        />
        <button class="sub-input" @click="subNote">提交</button>
      </div>
      <div class="note-control">
        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>未完成</span>
            <svgicon name="down" width="25" height="25"></svgicon>
          </div>
          <div
            class="detail-line"
            v-for="(item, index) in noteList"
            :key="index"
          >
            <div>
              <input type="checkbox" />
              <span>{{ item }}</span>
            </div>
            <button class="undo" @click="undoNote(item)">取消</button>
          </div>
        </div>

        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>已完成</span>
            <svgicon name="down" width="25" height="25"></svgicon>
          </div>
        </div>

        <div class="note-detail">
          <div class="detail-line detail-title">
            <span>已取消</span>
            <svgicon name="down" width="25" height="25"></svgicon>
          </div>
          <div
            class="detail-line"
            v-for="(item, index) in undoList"
            :key="index"
          >
            <div>
              <input type="checkbox" />
              <span>{{ item }}</span>
            </div>
            <button class="undo" @click="undoNote">恢复</button>
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
      note: ''
    }
  },
  methods: {
    subNote() {
      this.noteList.push(this.note)
      this.note = ''
    },
    undoNote(val) {
      this.undoList.push(val)
    }
  }
}
</script>

<style scoped>
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
</style>
