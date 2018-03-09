import * as types from '../types'

const initialState = {
  todos: [],
  incompleted: 0,
  current: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO: {
      return {
        ...state,
        todos: state.todos.concat({ ...action.payload }),
        incompleted: state.incompleted + 1
      }
    }
    case types.SET_TODOS: {
      return {
        ...state,
        todos: action.payload.todos,
        incompleted: action.payload.incompleted
      }
    }
    case types.SET_TODO: {
      return {
        ...state,
        current: { ...action.payload }
      }
    }
    default: {
      return state
    }
  }
}
