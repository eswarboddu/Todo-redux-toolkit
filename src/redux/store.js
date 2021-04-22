import {configureStore} from "@reduxjs/toolkit";
import addTodoReducer from "./todoSlice";
import toggleComplete from "./todoSlice";
import deleteTodo from "./todoSlice"

export default configureStore({
    reducer: {
        list: addTodoReducer, toggleComplete, deleteTodo
    },
})

