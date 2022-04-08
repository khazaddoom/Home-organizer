import React , {useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useGlobalContext} from '../context/index'
import { AddTask } from "./AddTask";

export const Tasks = () => {

    const { projects, selectedProject  } = useGlobalContext();
    const [tasks, setTasks] = useState([]);
    
    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)){
        projectName = getTitle(projects, selectedProject);
        if(projectName) {
            console.log('projectName 1: ', projectName.name)            
        }
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
            {projectName != null && <h2>{projectName.name}</h2>}
            
            <ul className="tasks__list">
                {tasks.map((task) =>(
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id}/>
                    
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    );

};