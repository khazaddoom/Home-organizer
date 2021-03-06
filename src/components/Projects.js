import React, {useState} from "react";
import {useGlobalContext} from '../context/index';
import { IndividualProject } from "./IndividualProject";

export const Projects = ({active, setActive}) => {
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
                    {/* <IndividualProject project={project}/> */}

                    {project && <IndividualProject project={project}/>}
                    
                </li> 
            ) 
        })
    )
}

