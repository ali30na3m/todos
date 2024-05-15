import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const todoArr = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    todoArr.find(todo => {
      if (todo.username === username && todo.password === password) {
        navigate(`/TodoList/${todo.username}`);
      } else {
        alert('username or password incorrect')
      }
    })
    setUsername('')
    setPassword('')
  }

  return (
    <div className="wrapper">
      <div className="circle_one"></div>
      <div className="circle_two"></div>
      <div>
        <form>
          <div className="title"><h1>Login Here</h1></div>
          <div className="input_display">
            <div className="User">
              <label >Username</label>
              <input type="text" value={username} onChange={(event) => setUsername(event?.target.value)} className='Username' placeholder='UserName' />
              <span className="Username_statues"></span>
            </div>
            <div className="pass">
              <label>Password</label>
              <input type='text' value={password} onChange={(event) => setPassword(event?.target.value)} className='password' placeholder='password' />
              <span className="password_statues"></span>
            </div>
          </div>
          <div className="log_button">
            <button onClick={clickHandler} className="log_in">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
