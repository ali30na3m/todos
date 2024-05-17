import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, doTodo, removeTodo, TodoInfo, getLocal } from '../../Redux/Todos/todos';
import { RootState } from '../../Redux/Store';
import './TodoList.css';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const TodoList: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const paramName = useParams();

    useEffect(() => {
        const localTodos = localStorage.getItem('todos');
        if (localTodos) {
            const savedTodos = JSON.parse(localTodos);
            savedTodos.forEach((todo: TodoInfo) => {
                dispatch(getLocal(todo));
            });
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (): void => {
        if (title.trim() !== '') {
            dispatch(addTodo(title));
            setTitle('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    };

    const addClickBtn = (): void => handleAddTodo();

    const deleteTodoHandler = (id: string): void => {
        dispatch(removeTodo(id));
    };

    const doTodoHandler = (id: string): void => {
        dispatch(doTodo(id));
    };
  
    return (
        <div className='todoList'>
            <h1 className='todoList-header'>hello {paramName.value} to todo App </h1>
            <div className='todoList-mainAdd'>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                    onKeyDown={handleKeyPress} // اضافه کردن event handler
                    className='todo-input' 
                    placeholder='add todo' 
                />
                <button className='todoList-add' onClick={addClickBtn}>
                    <AddOutlinedIcon />
                </button>
            </div>
            <div >
                {todos.map(todo => (
                    <div key={todo.id} className='todoList-userList'>
                        <h2 className={`${todo.isComplete ? 'todoList-isComplete' : ''}`}>
                            {todo.title}
                        </h2>
                        <div className='todoList-div'>
                            <button className='todoList-btn' onClick={() => deleteTodoHandler(todo.id)}>
                                <DeleteOutlineOutlinedIcon />
                            </button>
                            <button className='todoList-btn' onClick={() => doTodoHandler(todo.id)}>
                                {todo.isComplete ? <CloseOutlinedIcon /> : <CheckOutlinedIcon />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
