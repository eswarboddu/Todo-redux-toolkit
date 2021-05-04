import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodoAsync, toggleTodoAsync} from "../redux/todoSlice";

const ToDoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleTodoAsync({id: id, completed: !completed}))
	}

	const handleDelete = () => {
		dispatch(deleteTodoAsync({id : id}))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={completed}
					onChange = {handleCompleteClick}
					
					></input>
					{title}
				</span>
				<button onClick = {handleDelete} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default ToDoItem;