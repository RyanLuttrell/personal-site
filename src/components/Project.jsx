import React from 'react';
import {Link} from 'react-router-dom';
import {ProjectData} from './data/ProjectData';
import './components-css/Project.css'

export default function Project() {
    return (
        <div>
            {
                ProjectData.map((item, index) => {
                    return (
                            <div key={index} className='project-container'>
                                <div className='main-content'>
                                    <h1 className='project-title'>{item.title}</h1>
                                    <h3 className='project-date'>{item.date}</h3>
                                </div>
                                <div>
                                    <img src={item.photos[0]} className='project-primary-image'/>
                                </div>
                                <div className='secondary-content'>
                                    <p className='project-description'>{item.briefDescription} <Link to='#'className='project-link'>Read More</Link></p>

                                    <h5 className='project-technologies'>Technologies: {item.technologies}</h5>
                                </div>
                            </div>

                    )
                })
            }
        </div>
    )
}