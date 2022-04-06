import React, {useState} from "react";
import { 
    FaChevronDown, 
    FaInbox, 
    FaRegCalendarAlt, 
    FaRegCalendar,
} from "react-icons/fa";
import {useGlobalContext} from '../../context/index';
import {Projects} from '../Projects'
import { AddProject } from "../AddProject";


export const Sidebar = () => { 
    const {setSelectedProject} = useGlobalContext();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li
                    className={active === 'inbox' ? 'active ' : undefined}
                    onClick={() => {
                        setActive('inbox')
                        setSelectedProject('INBOX')
                    }}
                >
                    <span>
                        <FaInbox/> 
                    </span>
                    <span>Inbox</span>
                </li>
                <li
                    className={active === 'today' ? 'active ' : undefined}
                    onClick={() => {
                        setActive('today')
                        setSelectedProject('TODAY')
                    }}
                >
                    <span>
                        <FaRegCalendar/> 
                    </span>
                    <span>Today</span>
                </li>
                <li
                    className={active === 'next_7' ? 'active ' : undefined}
                    onClick={() => {
                        setActive('next_7')
                        setSelectedProject('NEXT_7')
                    }}
                >
                    <span>
                        <FaRegCalendarAlt/> 
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div 
                className="sidebar__middle"
                onClick={() => setShowProjects(!showProjects)}
            >
                <span>
                    <FaChevronDown 
                        className={!showProjects ? 'hidden-projects' : undefined}
                    />
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                {showProjects && <Projects />}
            </ul>
            {showProjects && <AddProject />}   
            
        </div>
    );
    
};
// console.log(Sidebar)
// b= block
// e= Element
// m = modifier




// export const Sidebar = () => {
//     return (
//         <p>
//             I'm a Sidebar 
//         </p>
//     )
// }