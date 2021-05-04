import React, { useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../redux/todoSlice";

const ToDoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {todos.map((todo,index) => (
        <ToDoItem id={todo.id} title={todo.title} completed={todo.completed} key={index}/>
      ))}
    </ul>
  );
};

export default ToDoList;
