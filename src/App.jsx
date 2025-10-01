import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import {
  addTodo, loadTodos, toggleTodo, deleteTodo, editTodo, clearTodos,
} from "./todos/actions";
import { useState } from "react";

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((s) => s.todos.items);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const submit = () => {
    const t = text.trim();
    if (!t) return;
    if (editId) {
      dispatch(editTodo(editId, t));
      setEditId(null);
    } else {
      dispatch(addTodo(t));
    }
    setText("");
  };

  return (
    <div className="app">
      <h1 className="header">
        TODO <span className="accent">+ Redux Saga</span>
      </h1>

      <div className="card">
        <div className="row" style={{ marginBottom: 12 }}>
          <button className="btn ghost" onClick={() => dispatch(loadTodos())}>
            Load initial
          </button>
        </div>

        <div className="row">
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={editId ? "Edit task…" : "Add task…"}
          />
          <button className="btn primary" onClick={submit}>
            {editId ? "Save" : "Add"}
          </button>
          <button className="btn danger" onClick={() => dispatch(clearTodos())}>
            Clear
          </button>
        </div>
      </div>

      <ul className="list">
        {todos.map((t) => (
          <li key={t.id} className="todo">
            <div
              className={`check ${t.done ? "done" : ""}`}
              title="Toggle done"
              onClick={() => dispatch(toggleTodo(t.id))}
            >
              {t.done ? "✓" : ""}
            </div>

            <span
              className={`text ${t.done ? "done" : ""}`}
              onClick={() => dispatch(toggleTodo(t.id))}
            >
              {t.text}
            </span>

            <button
              className="btn ghost"
              title="Edit"
              onClick={() => {
                setEditId(t.id);
                setText(t.text);
              }}
            >
              ✏
            </button>

            <button
              className="btn danger"
              title="Delete"
              onClick={() => dispatch(deleteTodo(t.id))}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>

      <div className="toolbar">
        <div className="count">
          <strong>{todos.length}</strong> {todos.length === 1 ? "task" : "tasks"}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
