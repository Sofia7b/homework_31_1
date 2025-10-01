export const ADD_TODO = "ADD_TODO";
export const LOAD_TODOS = "LOAD_TODOS";
export const SET_TODOS = "SET_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CLEAR_TODOS = "CLEAR_TODOS";

export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const loadTodos = () => ({ type: LOAD_TODOS });
export const setTodos = (todos) => ({ type: SET_TODOS, payload: todos });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});
export const clearTodos = () => ({ type: CLEAR_TODOS });
