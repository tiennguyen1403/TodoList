import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";

import "./todo-list.scss";

function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  console.log(todoList);
  return (
    <div className="todo-list">
      <h4 className="todo-list-title">Todo List</h4>

      <ul>
        {todoList &&
          todoList.map((item, index) => (
            <li
              className={`todo-list-item ${item.status && "done"}`}
              key={index}
            >
              <div>
                <ArrowRightIcon className="todo-list-icon" />
                <a href="#a" className="todo-list-link">
                  {item.name}
                </a>
              </div>
              <div>
                <span>
                  <EditIcon className="todo-list-edit" />
                </span>
                <span
                  onClick={() =>
                    dispatch({ type: "DONE_TODO", payload: item.id })
                  }
                >
                  <CheckCircleIcon className="todo-list-check" />
                </span>
                <span
                  onClick={() =>
                    dispatch({ type: "REMOVE_TODO", payload: item.id })
                  }
                >
                  <DeleteIcon className="todo-list-remove" />
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
