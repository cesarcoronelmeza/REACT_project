import { actionUpdateTask } from '../actions/TaskAction';

const Tasks = ({ storeTask }) => {
  const state = storeTask.getState();

  const updateTask = (id) => {
    storeTask.dispatch(actionUpdateTask(id));
  };
  return (
    <ul className="list-group">
      {state.map((task) => {
        return (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task.name}
            <div onClick={() => updateTask(task.id)}>
              {task.isDone ? (
                <span className="badge bg-success">Terminada</span>
              ) : (
                <span className="badge bg-warning">Pendiente</span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Tasks;
