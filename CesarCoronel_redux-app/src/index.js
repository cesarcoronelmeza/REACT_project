import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import storeTask from './store/TaskStore';
import App from './App';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App storeTask={storeTask} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render();
storeTask.subscribe(render);
