import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css'
import logo from '../assets/logo.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("Email:", email);
        console.log("Password:", password);
        // After successful login, navigate to the dashboard
        navigate('/dashboard');
    };

    return (
        <div className='signin_page'>
        <div className="login-container">
               <div className="logo-container">
                 <img src={logo} alt="Logo" /></div>
                
                
        <div className="login-container">
            <div className="login-box">
                <h3>Sign in</h3>
                <p>Please sign in to continue to your account.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="etudiant@estin@dz"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                {showPassword ? '🙈' : '👁️'}
              </span>
                        </div>
                    </div>
                    <button type="submit" className="login-btn">Sign in</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Login;
