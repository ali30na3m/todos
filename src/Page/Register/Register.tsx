import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../../Redux/registerSlice/registerSlice'

export default function Register(): React.ReactNode {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerHandler = () => {
        if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '') {
            dispatch(register({ id: crypto.randomUUID(), username, password, email }))
            navigate('/')
        }
    }

    return (
        <div className="wrapper">
            <div className="circle_one"></div>
            <div className="circle_two"></div>
            <div>
                <form>
                    <div className="title"><h1>Register Here</h1></div>
                    <div className="input_display">
                        <div className="User">
                            <label >Username</label>
                            <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" className='Username' placeholder='john-doe' />
                            <span className="Username_statues"></span>
                        </div>
                        <div className="User">
                            <label >Email</label>
                            <input value={email} onChange={event => setEmail(event.target.value)} type="text" className='Username' placeholder='Email@gmail.com' />
                            <span className="Username_statues"></span>
                        </div>
                        <div className="pass">
                            <label>Password</label>
                            <input value={password} onChange={(event) => setPassword(event.target.value)} type='password' placeholder='password' />
                            <span className="password_statues"></span>
                        </div>
                    </div>
                    <div className="log_button">
                        <button onClick={registerHandler} className="log_in">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
