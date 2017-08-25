<template>
    <section class="todos-section">

        <div class="todos">
            <h2>Todo List </h2>
            <div class="row">
                <input class="list-input" type="text" v-model="newItem" v-on:keydown.enter="addNewItem" />
                <button class="btn add-btn" @click="addNewItem">+</button>
            </div>
            <div class="row" v-for="(todo,index) in todos" :key="index">
                <input class="list" type="text" :value="todo.context" :id="todo.id" @change="updateItem($event, index, todo.context)"/>
                <button class="btn delete-btn" @click="deleteItem(todo)">-</button>
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      newItem: '',
    }
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos',
    }),
  },
  methods: {
    addNewItem() {
      this.actionAddNewItem(this.newItem)
      this.newItem = ''
    },
    deleteItem(deleteItem) {
      this.actionDeleteItem(deleteItem)
    },
    updateItem(e, itemIndex, itemContext) {
    //   console.log(`type: ${type}`)
    //   console.log(`target: ${target}`)
    //   console.log(`target-value: ${target.value}`)
    //   console.log(`e: ${e.target.value}`)
    //   console.log(`itemIdid: ${itemId}`)
    //   console.log(`itemContext: ${itemContext}`)
    //   console.log(itemIndex)
    //   console.log(e.target.value)

      this.actionUpdateItem({
        itemIndex,
        newContext: e.target.value,
      })
    },
    ...mapActions([
      'actionAddNewItem',
      'actionDeleteItem',
      'actionUpdateItem',
    ]),
  },

}
</script>

<style lang="scss">
.todos-section {
    padding: 50px;
}

.todos {
    width: 250px;
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #F5B689;
    .row {
        margin-bottom: 20px;
    }

    .list-input {
        display: inline-block;
        width: 80%;
        height: 25px;
        font-size: 1rem;
        text-indent: 0.5rem;
    }

    .list {
        display: inline-block;
        width: 80%;
        line-height: 25px;
        border: none;
        font-size: 1rem;
        text-indent: 0.5rem;
    }

    .btn {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 100%;
        margin-left: 10px;
        border: none;
        box-shadow: 0 0 4px 1px #777;
    }

    .add-btn,
    .delete-btn {
        background-color: #fff;
        cursor: pointer;
    }
    .add-btn:hover,
    .delete-btn:hover {
        color: #fff;
        transition-duration: 0.6s;
    }

    .add-btn:hover {
        background-color: #69D4FF;
    }

    .delete-btn:hover {
        background-color: #FF2B36;
    }
}
</style>


