import React, { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'
import{ useGlobalContext } from '../context/index'

export const IndividualProject = ({project}) => {

    const [ showConfirm, setShowConfirm ]  = useState(false);
    const {projects, setProjects} = useGlobalContext();

    const deleteProject = (prev) => {
        setProjects(projects.filter(({id}) => id !== prev))
    }
    
    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span 
                className="sidebar__project-delete" data-testid="delate-project" 
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FaTrashAlt />
                {showConfirm && (
                    <div className="project-delete-modal"> 
                        <div
                            className="project-delete-modal__inner"
                        >
                            <p>Are you sure you want delete this project?</p>
                            <button 
                                type="button"
                                onClick={() => deleteProject()}
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
    )
}