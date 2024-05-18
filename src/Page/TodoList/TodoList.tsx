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
import { UserInfo } from '../../Redux/registerSlice/registerSlice';

const TodoList: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const { value: username } = useParams<{ value: string }>();

    useEffect(() => {
        const localUsers = localStorage.getItem('users');
        if (localUsers) {
            const users = JSON.parse(localUsers);
            const currentUser = users.find((user: UserInfo) => user.username === username);
            if (currentUser && currentUser.todos) {
                dispatch(getLocal(currentUser.todos));
            }
        }
    }, [dispatch, username]);

    const saveTodosToLocalStorage = (updatedTodos: TodoInfo[]) => {
        const localUsers = localStorage.getItem('users');
        if (localUsers) {
            const users = JSON.parse(localUsers);
            const userIndex = users.findIndex((user: UserInfo) => user.username === username);
            if (userIndex !== -1) {
                users[userIndex].todos = updatedTodos;
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    };

    const handleAddTodo = (): void => {
        if (title.trim() !== '') {
            // const newTodo = { id: crypto.randomUUID(), title, isComplete: false };
            dispatch(addTodo(title));
            setTitle('');
        }
    };

    useEffect(() => {
        saveTodosToLocalStorage(todos);
    }, [todos]);

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
            <h1 className='todoList-header'>hello {username} to todo App </h1>
            <div className='todoList-mainAdd'>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    onKeyDown={handleKeyPress}
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
