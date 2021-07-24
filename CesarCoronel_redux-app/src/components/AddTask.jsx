import { actionAddTask } from '../actions/TaskAction';

const AddTask = ({ storeTask }) => {
  const addTask = (e) => {
    e.preventDefault();
    const name = e.target.task.value;
    e.target.task.value = '';
    storeTask.dispatch(actionAddTask(name));
  };
  return (
    <form onSubmit={addTask}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese una tarea"
          name="task"
        />
        <button className="btn btn-outline-primary" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};

export default AddTask;
