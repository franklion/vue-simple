const types = {
  ADD_NEW_ITEM: 'todos/ADD_NEW_ITEM',
  DELETE_ITEM: 'todos/DELETE_ITEM',
  UPDATE_ITEM: 'todos/UPDATE_ITEM',
}

const state = {
  todos: [{
    id: 1,
    context: 'shopping',
  }, {
    id: 2,
    context: 'wathing a movie',
  }, {
    id: 3,
    context: 'do housework',
  }],
}

const getters = {
  getTodos: state => state.todos,
}

const actions = {
  actionAddNewItem({ commit }, newItem) {
    commit(types.ADD_NEW_ITEM, newItem)
  },
  actionDeleteItem({ commit }, deleteItem) {
    commit(types.DELETE_ITEM, deleteItem)
  },
  actionUpdateItem({ commit }, { itemIndex, newContext }) {
    commit(types.UPDATE_ITEM, { itemIndex, newContext })
  },
}

const mutations = {
  [types.ADD_NEW_ITEM](state, newItem) {
    state.todos.push({ id: state.todos.length + 1, context: newItem })
  },
  [types.DELETE_ITEM](state, deleteItem) {
    const deleteItemIndex = state.todos.indexOf(deleteItem)
    state.todos.splice(deleteItemIndex, 1)
  },
  [types.UPDATE_ITEM](state, { itemIndex, newContext }) {
    state.todos[itemIndex].context = newContext
    if (newContext === '') state.todos.splice(itemIndex, 1)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
