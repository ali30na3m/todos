import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/authSlice/authSlice";
import './Login.css'

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // شبیه‌سازی اعتبارسنجی کاربر
    if (username === 'ali30na' && password === 'sina1234') {
      dispatch(login({ id: 1, username, password }));
      navigate(`/TodoList/${username}`);
    } else {
      alert('Invalid credentials');
    }
  };

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
            <button onClick={handleLogin} className="log_in">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
