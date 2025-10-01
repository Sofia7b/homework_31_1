import {
  ADD_TODO,
  SET_TODOS,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  CLEAR_TODOS,
} from "./actions";

const initialState = { items: [] };

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, items: action.payload };

    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          { id: Date.now(), text: action.payload, done: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((t) => t.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        items: state.items.map((t) =>
          t.id === action.payload.id ? { ...t, text: action.payload.text } : t
        ),
      };

    case CLEAR_TODOS:
      return { ...state, items: [] };

    default:
      return state;
  }
}
