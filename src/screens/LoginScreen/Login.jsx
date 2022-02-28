import * as React from "react";
import './login.css';
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from 'react-router-dom';

export default function Register() {   
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [errMessage, setErrMessage] = useState({});

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = {}
        console.log(email, password)
        if(email === '' || password === ''){
            } if (email === '') {
                msg.email = "Vui lòng nhập email!"
            } else if (!isEmail(email)) {
                msg.email = "Email không đúng!"
            } if (password === '') {
                msg.password = "Vui lòng nhập mật khẩu!"
                
            } else if(password.length < 8 || password.length > 16){
                msg.password = "Giới hạn mật khẩu là từ 8 đến 16 ký tự!"
        } else {
            setSubmitted(true)
            navigate('/');
            console.log(e);
        } 
        
        setErrMessage(msg)
        if (Object.keys(msg).length > 0) return false
        else return true
    };

    return (
        <div className="container-item">
            <div className="app-wrapper">
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="text title">
                        <h1>Đăng nhập</h1>
                    </div>
                    <div className="email">
                        <input className="input" onChange={handleEmail} 
                            name="email"
                            id="email"
                            autoComplete="email"
                            value={email}
                            placeholder="email@gmail.com" />
                        <p className="p1" style={{color: "red"}}>{ errMessage.email }</p>
                    </div>
                    <div className="password">
                            <input className="input" onChange={handlePassword}
                            name="password"
                            id="password"
                            value={password}
                            type="password" 
                            placeholder="Mật khẩu" />
                        <p className="p1" style={{color: "red"}}> { errMessage.password } </p>
                    </div>

                    <button onSubmit={handleSubmit} className="submit">Đăng nhập</button>
                    <p className="text text-item">
                        Bạn chưa có tài khoản? <a href="#">Đăng ký</a>
                    </p>
                </form>
            </div>     
        </div>
    );
}
