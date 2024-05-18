<template>
  <div class="todo-list" @keyup.enter="handleEnterKey">
    <h1>Todo List</h1>
    <input v-model="newTodo" placeholder="Add a new todo" />
    <button class="btn btn-outline-success" ref="addButton" @click="addTodo" >Add</button>
    
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div v-if="editIndex !== index">
          <span :class="{ done: todo.done }">
            {{ todo.text }}
          </span>
          <button class="btn btn-success ms-5" @click="editTodo(index)">Edit</button>
          <button class="btn btn-info ms-3" @click="toggleDone(index)">
            {{ todo.done ? 'Undo' : 'Complete' }}
          </button>
          <button class="btn btn-danger ms-3" @click="removeTodo(index)">x</button>
        </div>
        <div v-else>
          <input v-model="editText" placeholder="Edit todo" @keyup.enter="saveTodo"  />
          
         
          <button class="btn btn-success ms-3" @click="saveTodo" ref="saveButton" >Save</button>
          <button class="btn btn-danger ms-3" @click="cancelEdit">Cancel</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      editIndex: null,
      editText: ''
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, done: false });
        this.newTodo = '';
      }
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(index) {
      this.editIndex = index;
      this.editText = this.todos[index].text;
    },
    saveTodo() {
      if (this.editText.trim() !== '') {
        this.$set(this.todos, this.editIndex, {
          ...this.todos[this.editIndex],
          text: this.editText
        });
        this.editIndex = null;
        this.editText = '';
      }
    },
    cancelEdit() {
      this.editIndex = null;
      this.editText = '';
    },
    handleEnterKey() {
      if (this.editIndex !== null) {
        this.$refs.saveButton.click();
      } else {
        this.$refs.addButton.click();
      }
    }
  }
};
</script>

<style scoped>
.todo-list {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.done {
  text-decoration: line-through;
  color: #ccc;
}

</style>
