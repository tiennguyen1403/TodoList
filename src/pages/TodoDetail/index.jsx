import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import "./todo-detail.scss";

function TodoDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentTodo = useSelector((state) => state.todo.currentTodo);

  const handleEdit = (todoItem) => {
    dispatch({ type: "SET_CURRENT", payload: todoItem });
    navigate("/create");
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
    navigate("/");
  };
  const handleChangeStatus = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
    navigate("/");
  };

  console.log(currentTodo);
  return (
    <div className="todo-detail">
      <div className="todo-info">
        <h3>Todo Detail</h3>
        <div className="todo-field">
          <span className="todo-key">ID:</span>
          <span className="todo-value">{currentTodo?.id}</span>
        </div>
        <div className="todo-field">
          <span className="todo-key">Name:</span>
          <span className="todo-value">{currentTodo?.name}</span>
        </div>
        <div className="todo-field">
          <span className="todo-key">Description:</span>
          <span className="todo-value">{currentTodo?.desc}</span>
        </div>
        <div className="todo-field">
          <span className="todo-key">Status:</span>
          <span className="todo-value">
            {currentTodo?.status ? "Done" : "Pending"}
          </span>
        </div>
        <div className="todo-field">
          <Grid container justifyContent="center">
            <Button variant="contained" onClick={() => handleEdit(currentTodo)}>
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => handleChangeStatus(currentTodo.id)}
            >
              Done
            </Button>
            <Button
              variant="contained"
              onClick={() => handleRemove(currentTodo.id)}
            >
              Remove
            </Button>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
