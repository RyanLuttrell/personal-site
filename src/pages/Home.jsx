import React from 'react';
import './pages-css/Home.css';
import Project from '../components/Project.jsx';


function Home() {
    return (
        <div className="primary-home-container clearfix">
                <Project />
        </div>
    )
}

export default Home