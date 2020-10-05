import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as GrIcons from 'react-icons/gr';
import {Link} from 'react-router-dom';
import {SidebarData} from './data/SidebarData';
import './components-css/Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (

        <IconContext.Provider value={{color: '#000000'}}>
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bars toggler" onClick={showSidebar}>
                    <FaIcons.FaBars className="nav-icon"/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <GrIcons.GrClose className="close-icon"/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
