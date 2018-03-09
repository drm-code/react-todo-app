import * as types from '../types'

const initialState = {
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL: {
      return {
        isOpen: true,
      }
    }
    case types.HIDE_MODAL: {
      return {
        isOpen: false,
      }
    }
    default: {
      return state
    }
  }
}
