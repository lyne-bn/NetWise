import { useState } from "react";
import "./Dashboard.css"
import "./ChatBot.css";
import { Link } from 'react-router-dom'
import profile_pic from '../assets/Vector.png'
import log from "../assets/logo_blue.png"


import Logo from '../assets/logo.svg'
const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "bot" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "user" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "bot" },
        { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", sender: "user" },
    ]);

    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, sender: "user" }]);
            setInput("");
        }
    };

    return (
        <>
            <Navbar />
            <div class="bg-white" className="chatbot-container">
                <div className="messages-container">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender}`}>
                            <div className="logo-placeholder"><img src={log}/></div>
                            <p>{msg.text}</p>
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="How can I help you?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={Logo}/></div>
            <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/topology">Topology</Link>
                <Link to="/chatBot">ChatBot</Link>
            </div>
            <div className="profile-icon"><img src={profile_pic}  /></div>
        </nav>
    );
};


export default ChatBot;
