const actionUpdateTask = (id) => {
  return {
    type: 'updateTask',
    payload: {
      id: id,
    },
  };
};

const actionAddTask = (name) => {
  return {
    type: 'addTask',
    payload: {
      id: Math.floor(Math.random() * 999999) + 1,
      name: name,
      isDone: false,
    },
  };
};

export { actionUpdateTask, actionAddTask };
