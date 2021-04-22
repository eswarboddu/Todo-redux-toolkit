import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from "./components/ToDoList";
import AddTodoForm from "./components/AddTodoForm";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      <h1>TODO LIST</h1>
      <AddTodoForm />
      <ToDoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
