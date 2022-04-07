import React , {useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useGlobalContext} from '../context/index'

export const Tasks = () => {

    const { projects, selectedProject  } = useGlobalContext();
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    
    
    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject).name;
        console.log('projectName 1: ', projectName)
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
        console.log('projectName 2: ', projectName)
    }
    useEffect(() => {
        document.title = `${projectName}: Home organizer`;
    }, [projectName]);


    return (
        <div className="tasks" >
            <h2>{projectName}</h2>
            
            <ul className="tasks__list">
                {tasks.map((task) =>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                    
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

};