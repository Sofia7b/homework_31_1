import { put, takeEvery, delay } from "redux-saga/effects";
import { LOAD_TODOS, setTodos } from "./actions";

function* loadTodosWorker() {
  yield delay(500);
  const fakeData = [
    { id: 1, text: "Learn Redux-Saga", done: false },
    { id: 2, text: "Make TODO app", done: true },
  ];
  yield put(setTodos(fakeData));
}

export default function* todosSaga() {
  yield takeEvery(LOAD_TODOS, loadTodosWorker);
}
