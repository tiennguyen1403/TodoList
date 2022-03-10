const initialState = {
  todoList: [],
  currentTodo: null,
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      const newTodoList = [...state.todoList];
      newTodoList.push(payload);

      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return { ...state, todoList: newTodoList };
    }
    case "REMOVE_TODO": {
      const newTodoList = [...state.todoList];
      const todoIndex = state.todoList.findIndex((item) => item.id === payload);
      if (todoIndex !== -1) {
        newTodoList.splice(todoIndex, 1);
      }

      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return { ...state, todoList: newTodoList };
    }
    case "UPDATE_TODO": {
      const newTodoList = [...state.todoList];
      const todoIndex = state.todoList.findIndex(
        (item) => item.id === payload.id
      );
      if (todoIndex !== -1) {
        newTodoList[todoIndex] = payload;
      }
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return { ...state, todoList: newTodoList };
    }
    case "TOGGLE_STATUS": {
      const newTodoList = [...state.todoList];
      const todoIndex = state.todoList.findIndex((item) => item.id === payload);
      if (todoIndex !== -1) {
        newTodoList[todoIndex].status = !newTodoList[todoIndex].status;
      }
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      return { ...state, todoList: newTodoList };
    }
    case "SET_CURRENT": {
      return { ...state, currentTodo: payload };
    }
    case "SET_TODO_LIST": {
      return { ...state, todoList: payload };
    }
    case "RESET_TODO": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
