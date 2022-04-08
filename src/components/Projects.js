import React, {useState} from "react";
import {useGlobalContext} from '../context/index';
import { IndividualProject } from "./IndividualProject";

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {projects, setSelectedProject} = useGlobalContext();
    
    return (
        projects &&
        projects.map((project) => {
            return (
                <li
                    key={project.id}
                    className={
                        active === project.id
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                    }

                    onKeyDown={() => {
                        setActive(project.id);
                        setSelectedProject(project.id)
                    }}
                    onClick={() => {
                        setActive(project.id);
                        setSelectedProject(project.id)
                    }}
                >
                    {project && <IndividualProject project={project}/>}
                    
                </li> 
            ) 
        })
    )
}

