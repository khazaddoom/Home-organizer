import React, {useState} from "react";
import {useGlobalContext} from '../context/index';
import { IndividualProject } from "./IndividualProject";
// import { AddProject } from "./AddProject";

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {projects, setSelectedProject} = useGlobalContext();
    
    return (
        projects &&
        projects.map((project) => {
            
            return (
            <li
                key={project.id}
                // value={project.name}
                className={
                    active === project.id
                    // then 
                    ? 'active sidebar__project'
                    // else daj 
                    : 'sidebar__project'
                }
                
                // na miss clicka
                onKeyDown={() => {
                    setActive(project.id);
                    setSelectedProject(project.id)
                }}
                onClick={() => {
                    setActive(project.id);
                    setSelectedProject(project.id)
                }}
            >
                <IndividualProject project={project}/>
                
            </li> )
            
        })
    )
}

