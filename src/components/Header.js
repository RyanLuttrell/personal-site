import React from 'react';
import Navbar from './Navbar';

export default function Header() {

    return (
        <div className="main-header">
            <div className="profile-badge">
                <div className="profile-image-container">
                    <img src="me.png" className="profile-image"/>
                </div>
                <div className="profile-content">
                    <h4>Ryan Luttrell</h4>
                    <p>Full-Stack Software Engineer</p>
                    <p>Calgary, AB, Canada</p>
                </div>
            </div>
            <div className="main-navigation">
                <Navbar />
            </div>
        </div>
    )
}