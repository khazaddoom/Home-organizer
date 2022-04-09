import React, { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useGlobalContext } from '../context/index'
import { AddTask } from "./AddTask";

export const Tasks = () => {

    const { projects, selectedProject, taskStore} = useGlobalContext();
    const [tasks, setTasks] = useState([]);

    const projectName = getTitle(projects, selectedProject);

    // if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
    //     // projectName = getTitle(projects, selectedProject).name;
    //     // console.log('projectName 1: ', projectName)
    //     projectName = getTitle(projects, selectedProject);
    //     if (projectName) {
    //         console.log('projectName 1: ', projectName.name)
    //     }
    // }

    // if (collatedTasksExist(selectedProject) && selectedProject) {
    //     projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    //     console.log('projectName 2: ', projectName)
    // }
    useEffect(() => {
        document.title = `${projectName}: Home organizer`;
    }, [projectName]);

    useEffect(() => {

        const selectedProjectTasks = taskStore.filter(task => task.id === selectedProject)
        setTasks(selectedProjectTasks)

    }, [selectedProject, taskStore])



    return (
        <div className="tasks" >
            {/* <h2>{projectName}</h2> */}
            {projectName != null && <h2>{projectName.name}</h2>}
            {selectedProject}

            <ul className="tasks__list">
                {tasks.map((task) => (
                    <li key={`${task.id}${Date.now()}`}>
                        <Checkbox id={task.id} />
                        <span>{task.name}</span>
                    </li>
                ))}
            </ul>

            <AddTask />
        </div>
    );

};