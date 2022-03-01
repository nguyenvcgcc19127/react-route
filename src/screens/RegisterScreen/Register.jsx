import * as React from "react";
import './register.css';
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Register() {
    // States for registration
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [errMessage, setErrMessage] = useState({})
    // const [successMessage, setSuccessMessage] = useState("Ban da dang ki thanh cong")
    
    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the phone change
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the form submission
    const validateAll = () => {
        const msg = {}
        console.log(name, email, phone, password)
        if (name === '') {
            msg.name = "Vui lòng nhập họ và tên!"
        } if (email === '') {
            msg.email = "Vui lòng nhập email!"
        } else if (!isEmail(email)) {
            msg.email = "Email không đúng!"
        } if (password === '') {
            msg.password = "Vui lòng nhập mật khẩu!"
        } else if(password.length < 8 || password.length > 16){
            msg.password = "Mật khẩu phải từ 8 đến 16 ký tự!"
        } if (phone === '') {
            msg.phone = "Vui lòng nhập số điện thoại!"
        } else if (phone.length < 10 || phone.length >= 11){
            msg.phone = "Số điện thoại phải là 10 số!"
        } 
            
        

        setErrMessage(msg)
        if (Object.keys(msg).length > 0) return false
        else return true
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const isValid = validateAll(e)
        if (!isValid) return 
        setSubmitted(true)
        navigate('/login')
    }
    
    return (
        <div className="container-item">
            <div className="app-wrapper">
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="text title">
                        <h1>Đăng ký</h1>
                    </div>
                    <div className="name">
                            <input className="input" onChange={handleName}
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            placeholder="Họ và tên" />
                        <p className="p1" style={{color: "red"}}>{ errMessage.name }</p>
                    </div>

                    <div className="phone">
                            <input className="input" onChange={handlePhone}
                            name="phone"
                            id="phone"
                            value={phone}
                            placeholder="Số điện thoại" />
                        <p className="p1" style={{color: "red"}}>{ errMessage.phone }</p>
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

                    <button onSubmit={handleSubmit} className="submit">Đăng ký</button>
                    <p className="text text-item">
                        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                    </p>
                </form>
            </div>     
        </div>
    );
}
