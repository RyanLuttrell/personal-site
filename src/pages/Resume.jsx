import React from 'react';
import './pages-css/Resume.css';
import {ExperienceData} from '../components/data/ExperienceData';

export default function Resume() {

    return (
        <div className='clearfix'>
            <div className='contact-info'>
                <p className='resume-email'>hello@ryanluttrell.ca</p>
                <p className='resume-location'>Calgary, AB</p>
                <p className='resume-linkedin'>linkedin</p>
                <p className='resume-instagram'>instagram</p>
                <p className='resume-github'>github</p>
            </div>
            <div className='resume-education'>
                <h4>Education:</h4>
                <div>
                    <h3>University of Prince Edward Island</h3>
                    <p>Bachelor of Science (Engineering)</p>
                    <p>2009-2013</p>
                </div>
                <div>
                    <h3>Team Treehouse</h3>
                    <p>Full-Stack JavaScript TechDegree</p>
                    <p>2020</p>
                </div>
                <h4>Certifications:</h4>
                <div>
                    <h3>Google Analytics Individual Qualification</h3>
                    <p>2020</p>
                </div>
                <div>
                    <h3>Google Ads Display Certification</h3>
                    <p>2020</p>
                </div>
            </div>
            <div className='resume-experience'>
                <h4>Experience</h4>
                { ExperienceData.map((role, index) => {
                    return(
                        <div key={index} className='resume-experience-single'>
                            <h3>{role.title}</h3>
                            <p>{role.company} | {role.location} | {role.dates}</p> 
                            <p>{role.description}</p>
                            <ul>
                                {}
                            </ul>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}