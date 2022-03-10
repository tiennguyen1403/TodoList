import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import "./todo-create.scss";

function TodoCreate() {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState({ name: "", desc: "" });
  const currentTodo = useSelector((state) => state.todo.currentTodo);
  const todoList = useSelector((state) => state.todo.todoList);

  const handleChange = (e) => {
    setTodoInput({ ...todoInput, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTodo) {
      dispatch({
        type: "UPDATE_TODO",
        payload: {
          ...todoInput,
          id: currentTodo.id,
          status: currentTodo.status,
        },
      });
      dispatch({ type: "SET_CURRENT", payload: null });
      setTodoInput({ name: "", desc: "" });
      return;
    }
    if (todoInput.name && todoInput.desc) {
      const newTodo = {
        id: todoList.length + 1,
        name: todoInput.name,
        desc: todoInput.desc,
        status: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setTodoInput({ name: "", desc: "" });
    }
  };

  useEffect(() => {
    if (currentTodo) {
      setTodoInput({ name: currentTodo.name, desc: currentTodo.desc });
    }
  }, [currentTodo]);

  return (
    <div className="todo-create">
      <h4 className="todo-create-title">Create/Update</h4>
      <form className="todo-create-form" onSubmit={handleSubmit}>
        <TextField
          name="name"
          id="outlined-basic"
          label="Name"
          size="small"
          variant="outlined"
          className="todo-create-input"
          onChange={handleChange}
          value={todoInput.name}
        />
        <TextField
          name="desc"
          id="outlined-basic"
          label="Description"
          size="small"
          variant="outlined"
          className="todo-create-input"
          onChange={handleChange}
          value={todoInput.desc}
        />
        <Grid container justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            className="todo-create-submit"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default TodoCreate;
