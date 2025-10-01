import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import todosReducer from "./todos/reducer";
import todosSaga from "./todos/sagas";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([todosSaga()]);
}
sagaMiddleware.run(rootSaga);
