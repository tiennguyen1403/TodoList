import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TodoCreate from "./pages/TodoCreate";
import TodoDetail from "./pages/TodoDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    if (todoList) {
      dispatch({ type: "SET_TODO_LIST", payload: todoList });
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<TodoCreate />} />
        <Route path="/detail" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
