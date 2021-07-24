const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'addTask':
      return [...state, action.payload];
    case 'updateTask':
      const { id } = action.payload;
      return state.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    default:
      return state;
  }
};

export default taskReducer;
