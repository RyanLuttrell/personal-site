import React from 'react';
// import {Link} from 'react-router-dom';
import {ProjectData} from '../components/data/ProjectData';
import './pages-css/Project.css'
import * as GrIcons from 'react-icons/gr';
import Leftbar from '../components/LeftBar.jsx';

export default function Project() {
    return (
        <div className='clearfix'>
            <Leftbar />
            {
                ProjectData.map((project, index) => {
                    return (
                            <div key={index} className='project-container'>
                                <div className='main-content'>
                                    <div className='project-title'>
                                        <h1>{project.title}</h1>
                                    </div>
                                    <div className='project-date'>
                                        <h3>{project.date}</h3>
                                    </div>
                                </div>
                                <div className="img-container">
                                    <img src={project.photos[0]} className='project-primary-image' alt={project.alt}/>
                                </div>
                                <div className='secondary-content'>
                                    <p className='project-description'>{project.briefDescription}</p>

                                    <h5 className='project-technologies'>Technologies: {project.technologies}</h5>
                                    <a target='_blank' href={project.repo}><GrIcons.GrGithub className="social-icons github project-github" /></a>
                                </div>
                            </div>

                    )
                })
            }
        </div>
    )
}