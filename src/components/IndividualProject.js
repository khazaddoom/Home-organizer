import React, { useEffect, useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import{ useGlobalContext } from '../context/index'


export const IndividualProject = ({project}) => {

    const [ showConfirm, setShowConfirm ]  = useState(false);
    const {projects, setProjects, setSelectedProject } = useGlobalContext();


 


    // const deleteProject = (projectId) => {
    //     setProjects(projects.filter(({id}) => id !== projectId))

    // }


    const deleteProject = (projectId) => {
        if (projects && setProjects && setSelectedProject ) {
            setProjects(projects.filter(({id}) => id !== projectId))
            console.log(setProjects)
            console.log('id', projects.filter(({id}) => id !== projectId))
        }
    }




    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span 
                className="sidebar__project-delete" 
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FaTrashAlt />
                {showConfirm && (
                    <div className="project-delete-modal"> 
                        <div className="project-delete-modal__inner" >
                            <p>Are you sure you want delete this project?</p>
                            <button 
                                type="button"
                                onClick={() => deleteProject(project.id)}
                            >
                                Delete
                            </button>
                            <span 
                                onClick={()=> setShowConfirm(!showConfirm)}
                            >
                                Cancel
                            </span>

                        </div>
                    </div>
                )}
            </span>
        </>
    );
};