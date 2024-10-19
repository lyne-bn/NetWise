import { useState } from "react";
import Logo from '../assets/logo-notext.png';
import { NavLink } from 'react-router-dom';



import profile_pic from '../assets/Vector.png'

/*import NavBar from '../components/navBar.jsx';*/
import "./Dashboard.css";

// Sample data for network tracking
const initialData = [
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    { clientId: "4736829", time: "8:00 pm", requestedBw: "15 Mb/s", allocatedBw: "20 Mb/s", connected: true },
    // Add more data entries as needed
];


const Dashboard = () => {
    const [clients, setClients] = useState(initialData);
     

    const handleConnect = (index) => {
        const updatedClients = [...clients];
        updatedClients[index].connected = true;
        setClients(updatedClients);
    };

    const handleDisconnect = (index) => {
        const updatedClients = [...clients];
        updatedClients[index].connected = false;
        setClients(updatedClients);
    };

    const handleAdjustBandwidth = (index) => {
        const newBandwidth = prompt("Enter new bandwidth (e.g., 25 Mb/s):");
        if (newBandwidth) {
            const updatedClients = [...clients];
            updatedClients[index].allocatedBw = newBandwidth;
            setClients(updatedClients);
        }
    };

    return (
        <>
            <Navbar />
            <div class="bg-white w-full " className="dashboard-container" >
                <div className="title" ><h1 className="dashboard-title" style={{color:"white"}}>Network Tracking</h1></div>
                <div className="table-color"><table className="dashboard-table">
                    <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Time</th>
                        <th>Requested bw</th>
                        <th>Allocated bw</th>
                        <th>Control Panel</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td>{client.clientId}</td>
                            <td>{client.time}</td>
                            <td>{client.requestedBw}</td>
                            <td>{client.allocatedBw}</td>
                            <td>
                                {client.connected ? (
                                    <button className="button disconnect" onClick={() => handleDisconnect(index)}>
                                        Disconnect
                                    </button>
                                ) : (
                                    <button className="button connect" onClick={() => handleConnect(index)}>
                                        Connect
                                    </button>
                                )}
                                <button className="button adjust" onClick={() => handleAdjustBandwidth(index)}>
                                    Adjust Bw
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
};

// Navbar Component
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo"><img src={Logo} className='logo-img' /></div>
            <div className="nav-links">
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/analytics"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    Analytics
                </NavLink>
                <NavLink
                    to="/topology"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    Topology
                </NavLink>
                <NavLink
                    to="/chatBot"
                    className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                    ChatBot
                </NavLink>
            </div>
            <div className="profile-icon"><img src={profile_pic} /></div>
        </nav>
    );
};

export default Dashboard;