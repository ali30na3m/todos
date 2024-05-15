import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../Redux/Todos/todos';
import { RootState } from '../../Redux/Store';
import './TodoList.css';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const TodoList: React.FC = () => {

    const [title, setTitle] = useState<string>('')
    const todos = useSelector((state: RootState) => state.todos)
    const paramName = useParams();
    const dispatch = useDispatch()

    const addClickBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addTodo(title))
        setTitle('')
    }

    return (
        <div className='todoList'>
            <h1 className='todoList-header'>hello {paramName.value} to todo App </h1>
            <div className='todoList-mainAdd'>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className='todo-input' placeholder='add todo' />
                <button className='todoList-add' onClick={addClickBtn}>
                    <AddOutlinedIcon />
                </button>
            </div>
            <div>
                {
                    todos.map(todo => (
                        <div key={todo.id} className='todoList-userList'>
                            <h2>
                                {todo.title}
                            </h2>
                            <div className='todoList-div'>
                                <button className='todoList-btn'>
                                    <DeleteOutlineOutlinedIcon />
                                </button>
                                <button className='todoList-btn'>
                                    <CheckOutlinedIcon />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;
