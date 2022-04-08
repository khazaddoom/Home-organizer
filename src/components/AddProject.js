import React, {useState} from "react";
import { generatePushId } from "../helpers/index";
import { useGlobalContext } from "../context/index";

export const AddProject = () => {
    const [show, setShow] = useState(false);
    const [projectName, setProjectName] = useState('');
    
    const projectId = generatePushId();
    const {projects, setProjects, } = useGlobalContext();



    const addProject = () => {
        const newProject = {
            id: projectId,
            name: projectName,
        }
        setProjects([newProject, ...projects]);
        setProjectName('');
        setShow(false)
        
    } 
    
    return (
        <div className="add-project" >
            {show && (
                <div className="add-project__input">
                    < input 
                        value={projectName}
                        onChange={ (e) => setProjectName(e.target.value)}
                        className="add-project__name"
                        type="text"
                        placeholder="Name your projct"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        
                    >
                        Add Project
                    </button>
                    <span
                        className="add-project__cancel"
                        onClick={() => setShow(false)}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                className="add-project__text"
                onClick={()=> setShow(!show)}
            >
                AddProject
            </span>
        </div>
    );
    
};

