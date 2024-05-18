import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../Redux/registerSlice/registerSlice';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ذخیره داده‌ها در localStorage
  const saveToLocalStorage = (users: any) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  // بازیابی داده‌ها از localStorage
  const loadFromLocalStorage = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  const registerHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '') {
      const newUser = { id: crypto.randomUUID(), username, password, email, todos: [] };
      dispatch(register(newUser));

      // بازیابی کاربران قبلی از localStorage و افزودن کاربر جدید
      const users = loadFromLocalStorage();
      users.push(newUser);
      saveToLocalStorage(users);

      navigate('/');
    }
    setUsername('')
    setEmail('')
    setPassword('')
  };

  // بازیابی داده‌های کاربران از localStorage هنگام بارگذاری صفحه
  useEffect(() => {
    const users = loadFromLocalStorage();
    if (users.length > 0) {
      const lastUser = users[users.length - 1];
      setUsername(lastUser.username);
      setPassword(lastUser.password);
      setEmail(lastUser.email);
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="circle_one"></div>
      <div className="circle_two"></div>
      <div>
        <form>
          <div className="title"><h1>Register Here</h1></div>
          <div className="input_display">
            <div className="User">
              <label>Username</label>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                className='Username'
                placeholder='john-doe'
              />
              <span className="Username_statues"></span>
            </div>
            <div className="User">
              <label>Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                className='Username'
                placeholder='Email@gmail.com'
              />
              <span className="Username_statues"></span>
            </div>
            <div className="pass">
              <label>Password</label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type='password'
                placeholder='password'
              />
              <span className="password_statues"></span>
            </div>
          </div>
          <div className="log_button">
            <button onClick={registerHandler} className="log_in">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
