import React from 'react';
import '../components/components-css/Home.css'
import {KnowledgeData} from '../components/data/KnowledgeData';
import {LearningData} from '../components/data/LearningData';
import * as GrIcons from 'react-icons/gr';

function Home() {
    return (
        <div className="primary-home-container">
            <div className="home-30">
                <div className="knowledge-section">
                    <h3>What I Know:</h3>
                    {KnowledgeData.map((item, index) => {
                        return (
                            <div className="knowledge-div">
                                <a target="_blank" href={item.link}className={item.cName}>
                                    {item.skill}
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="learning-section">
                    <h3>What I'm Learning:</h3>
                    {LearningData.map((item, index) => {
                        return (
                            <div className="knowledge-div">
                                <a target="_blank" href={item.link}className={item.cName}>
                                    {item.skill}
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h3>Find Out More:</h3>
                    <a target="_blank" href='https://github.com/RyanLuttrell'>
                        <GrIcons.GrGithub className="social-icons" />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/ryan-luttrell/'>
                        <GrIcons.GrLinkedin className="social-icons" />
                    </a>
                    <a target="_blank" href='https://www.instagram.com/standardryan/'>
                        <GrIcons.GrInstagram className="social-icons" />
                    </a>

                </div>
            </div>
            <div className="home-70">

            </div>
        </div>
    )
}

export default Home
