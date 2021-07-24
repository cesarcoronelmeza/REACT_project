import { createStore } from 'redux';
import taskReducer from '../reducers/TaskReducer';

const storeTask = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeTask;
