import React from 'react';
import {Link} from 'react-router-dom';
import {ProjectData} from './data/ProjectData';
import './components-css/Project.css'
import * as GrIcons from 'react-icons/gr';

export default function Project() {
    return (
        <div>
            {
                ProjectData.map((project, index) => {
                    return (
                            <div key={index} className='project-container'>
                                <div className='main-content'>
                                    <h1 className='project-title'>{project.title}</h1>
                                    <h3 className='project-date'>{project.date}</h3>
                                </div>
                                <div className="img-container">
                                    <img src={project.photos[0]} className='project-primary-image' alt={project.alt}/>
                                </div>
                                <div className='secondary-content'>
                                    <p className='project-description'>{project.briefDescription} <Link to='#'className='project-link'>Read More</Link></p>

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