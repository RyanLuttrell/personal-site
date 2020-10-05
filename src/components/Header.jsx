import React from 'react';
import Navbar from './Navbar.jsx';
// import Navbar2 from './Navbar2.jsx';
import './components-css/Header.css'

export default function Header() {

    return (
        <div className="main-header">
            <div className="profile-badge">
                <div className="profile-image-container">
                    <img src="me.png" className="profile-image" alt="Ryan Luttrell"/>
                </div>
                <div className="profile-content">
                    <h4 className="name">Ryan Luttrell</h4>
                    <p className="position">Full-Stack Software Engineer</p>
                    <p>Calgary, AB, Canada</p>
                </div>
            </div>
            <div className="main-navigation">
                <Navbar />
                {/* <Navbar2 /> */}
            </div>
        </div>
    )
}