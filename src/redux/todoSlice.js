import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create the thunk
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosAsync",
  async () => {
    const response = await fetch("http://localhost:7000/todos");

    if (response.ok) {
      const todos = await response.json();
      return { todos };
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync", 
  async (payload) => {
    const response = await fetch("http://localhost:7000/todos", {
      method : "POST",
      headers: {
        "content-Type" : "application/json" 
      },
      body: JSON.stringify({title: payload.title})
    })

    if(response.ok){
      const todo = await response.json();
      return {todo};
    }
});

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async(payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`, {
      method: "PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({completed: payload.completed})
  })

  if(response.ok){
    const todo = await response.json();
    return {id: todo.id, completed: todo.completed};
  }
});

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async(payload) => {
    const response = await fetch(`http://localhost:7000/todos/${payload.id}`,{
      method: "DELETE",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({id: payload.id})
    })

    if(response.ok){
      return {id: payload.id};
    }
});

const todoSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    deleteTodo: (state, action) => {
      //const index = state.findIndex((todo) => todo.id === action.payload.id)
      //return state.splice(index)
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },

  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      console.log("Fetching");
    },

    [fetchTodos.fulfilled]: (state, action) => {
      console.log("Successfull");
      return action.payload.todos;
    },

    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },

    [toggleTodoAsync.fulfilled]: (state, action) => {

      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },

    [deleteTodoAsync.fulfilled]: (state,action) => {
      console.log(state);
      // const index = state.findIndex((todo) => todo.id === action.payload.id);
      // return state.splice(index);
      return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
