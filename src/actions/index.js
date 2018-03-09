import * as types from '../types'

const _addTodo = (payload) => ({
  type: types.ADD_TODO,
  payload
})

export const addTodo = (text) => (dispatch) => {
  try {
    const id = btoa(''+Math.random()).substr(8, 15)
    const payload = {
      id,
      text,
      done: false
    }
    let todos = JSON.parse(localStorage.getItem('react-todo.todos') || '[]')

    todos.push(payload)
    localStorage.setItem('react-todo.todos', JSON.stringify(todos))
    dispatch(_addTodo(payload))
  } catch (e) {
    console.log('Error': e)
  }
}

export const getTodos = () => (dispatch) => {
  const todos = JSON.parse(localStorage.getItem('react-todo.todos') || '[]')
  const incompleted = todos.reduce((a, b) => !b.done ? a + 1 : a, 0)
  const payload = { todos, incompleted }

  dispatch(setTodos(payload))
}

const setTodos = (payload) => ({
  type: types.SET_TODOS,
  payload
})

export const showModal = () => ({
  type: types.SHOW_MODAL
})

export const editTodo = (id) => (dispatch) => {
  const todo = JSON.parse(localStorage.getItem('react-todo.todos')).find(t => t.id === id)

  dispatch(setTodo(todo))
  dispatch(showModal())
}

const setTodo = (payload) => ({
  type: types.SET_TODO,
  payload
})
