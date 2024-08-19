import React, { useEffect, useState } from "react";
import './Home.css';

const Home = () => {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowBox(true), 100); // Trigger animation after 100ms
    }, []);

    return (
        <div className="home">
            <div className="containerhome">
                <div className={`details-box ${showBox ? 'show' : ''}`}>
                    <h2>Welcome to the Pracel Management System !</h2>
                    <br />
                    <h3>Features</h3>
                    <br />
                    <p>Realtime location tracking using mobile app</p>
                    <p>SMS service</p>
                    <p>Online chat box</p>
                </div>
                <div className="side-boxes">
                    <div className={`side-box ${showBox ? 'show' : ''}`}>
                        <h3>Details about the view page</h3>
                        <button>View Page Button</button>
                    </div>
                    <div className={`side-box ${showBox ? 'show' : ''}`}>
                        <h3>Details about the Insert Page</h3>
                        <button>Details Page Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
