import * as React from "react";
import './register.css';
import { useState } from "react";

export default function Register() {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("Ban da dang ki thanh cong")
    
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, phone, password)
        if (name === '' || email === '' || password === '' || phone === '') {
            setError(true);
            setErrMessage("Chua nhap thong tin day du")
        }
        else if(password.length < 8 || password.length > 16){
            setError(true);
            setErrMessage("Giới hạn mật khẩu là từ 8 đến 16")
        }
        else if (phone.length < 10 || phone.length > 11){
            setError(true);
            setErrMessage("Số điện thoại phải là 10 số")
        }else {
            setSubmitted(true);
            console.log(e);
        }  
    };
    
    console.log(error)
    return (
        <div className="container">
            <div className="text">
                <h1>User Registration</h1>
            </div>
            <div className="text">
                { 
                    error === true ? errMessage :<span style={{color: "green"}}>{successMessage}</span> 
                }  
            </div>
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-3">
                        <label>Họ và tên:
                            <input onChange={handleName}
                            type="text"
                            value={name}
                            placeholder="Họ và tên" />
                        </label>
                    </div>

                    <div className="col-lg-3">
                        <label>Số điện thoại:
                            <input onChange={handlePhone}
                            value={phone}
                            placeholder="Số điện thoại" />
                        </label>
                    </div>

                    <div className="col-lg-3">
                        <label>Email:
                        </label>
                        <input onChange={handleEmail}
                            type='email' 
                            value={email}
                            placeholder="Email" />
                    </div>
                    
                    <div className="col-lg-3">
                        <label>Mật khẩu:
                            <input onChange={handlePassword}
                            value={password}
                            type="password" 
                            placeholder="Mật khẩu" />
                        </label>

                    </div>

                    <button onSubmit={handleSubmit} className="btn btn-success" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
