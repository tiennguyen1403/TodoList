import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "./home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todo.todoList);

  const handleEdit = (todoItem) => {
    dispatch({ type: "SET_CURRENT", payload: todoItem });
    navigate("/create");
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  const handleChangeStatus = (id) => {
    dispatch({ type: "TOGGLE_STATUS", payload: id });
  };
  const navigateDetail = (todoItem) => {
    dispatch({ type: "SET_CURRENT", payload: todoItem });
    navigate("/detail");
  };

  console.log(todoList);

  return (
    <div className="home">
      <div className="todo-list">
        <p className="todo-list-title">Todo List</p>
        <p>{todoList.length === 0 ? <span>Todo list is empty</span> : null}</p>

        <ul>
          {todoList &&
            todoList.map((item, index) => (
              <li
                className={`todo-list-item ${item.status && "done"}`}
                key={index}
              >
                <div>
                  <a
                    href="#a"
                    className="todo-list-link"
                    onClick={() => navigateDetail(item)}
                  >
                    {item.name} ({item.desc})
                  </a>
                </div>
                <div>
                  <EditIcon
                    className="todo-list-edit"
                    onClick={() => handleEdit(item)}
                  />
                  <CheckBoxIcon
                    className="todo-list-check"
                    onClick={() => handleChangeStatus(item.id)}
                  />
                  <DeleteForeverIcon
                    className="todo-list-remove"
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* <div className="home-create">
        <h4 className="home-create-title">Create/Update</h4>
        <form className="home-create-form" onSubmit={handleSubmit}>
          <TextField
            name="name"
            id="outlined-basic"
            label="Name"
            size="small"
            variant="outlined"
            className="home-create-input"
            onChange={handleChange}
            value={todoItem?.name}
          />
          <TextField
            name="desc"
            id="outlined-basic"
            label="Description"
            size="small"
            variant="outlined"
            className="home-create-input"
            onChange={handleChange}
            value={todoItem?.desc}
          />
          <Grid container justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              className="home-create-submit"
            >
              Submit
            </Button>
          </Grid>
        </form>

        {currentTodo ? (
          <div className="home-info">
            <p>
              Name: <span>{currentTodo.name}</span>
            </p>
            <p>
              Description: <span>{currentTodo.desc}</span>
            </p>
            <p>
              Status: <span>{currentTodo.status ? "Done" : "Pending"}</span>
            </p>
            <div className="btns">
              <Button
                variant="contained"
                onClick={() => {
                  dispatch({ type: "REMOVE_TODO", payload: currentTodo.id });
                  dispatch({ type: "SET_CURRENT", payload: null });
                }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  setTodoItem({
                    name: currentTodo.name,
                    desc: currentTodo.desc,
                  })
                }
              >
                Update
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  dispatch({ type: "TOGGLE_STATUS", payload: currentTodo.id })
                }
              >
                Done
              </Button>
            </div>
          </div>
        ) : null}
      </div> */}
    </div>
  );
}

export default Home;
