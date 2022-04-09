import moment from "moment";
import React, {useState} from "react";
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import {useGlobalContext } from '../context/index'


export const AddTask = ({
    showAddTaskMain = true, 
    shouldShowMain = false, 
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const [ task, setTask] = useState([]);
    const [ taskDate, setTaskDate] = useState('');
    const [ project, setProject] = useState('');
    const [ showMain, setShowMain] = useState(shouldShowMain);
    const [ showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [ showTaskDate, setShowTaskDate] = useState(false);

    const { projects, 
        setProjects,
        selectedProject,
        setSelectedProject,
        taskStore,
        setTaskStore } = useGlobalContext();

    const getCollatedDate = (projectId) => {
        const today = moment()
        const projects = {
            'TODAY': today.format('DD/MM/YYYY'),
            'NEXT_7': today.add(7, 'days')
        }
        return projects[projectId] ? projects[projectId] : null;
    }

    


    const addTask = () => {
        const projectId = project || selectedProject;


        // let collatedDate = '';

        // if (projectId === 'TODAY') {
        //     collatedDate = moment().format('DD/MM/YYYY')
        // } else if (projectId === 'NEXT_7') {
        //     collatedDate = moment()
        //     .add(7, 'days')
        //     .format('DD/MM/YYYY')
        // }
        const collatedDate = getCollatedDate(projectId);

        const newTask = {
            id: projectId,
            name: task,
            date: collatedDate || taskDate,
        }

        setTaskStore([...taskStore, newTask])
        setProject('')
        setShowMain('')
        setShowProjectOverlay(false)

        // const addTask = () => {
        //     const newTask = {
        //         id: projectId,
        //         name: task,
        //         // date: collatedDate || taskDate,

        //     }
        //     setTask([newTask,...task])
        //     setProject('')
        //     setShowMain('')
        //     setShowProjectOverlay(false)
        // }

        // return (
        //     task && 
        //     projectId &&
        //     addTask
        // )
    }

    return (
        <div
            className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
        >
            {showAddTaskMain && (
                <div 
                    className="add-task__shallow"
                    onClick={() => setShowMain(!showMain)}
                >
                    <span className="add-task__plus">+</span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}

            {(showMain || showQuickAddTask) && (
                <div className="add-task__main">
                    {showQuickAddTask && (
                        <>
                            <div>
                                <h2 className="header">Quick Add Task</h2>
                                <span 
                                    className="add-task__cancel-x"
                                    onClick={() => {
                                        setShowMain(false);
                                        setShowProjectOverlay(false)
                                        setShowQuickAddTask(false)
                                    }}
                                >
                                    X
                                </span>
                            </div>    
                        </>
                    )}
                    <p>Project overlay here</p>
                    <p>TaskDate here</p>
                    <input 
                        className="add-task__content"
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                    />
                    <button
                        type="button"
                        className="add-task__submit"
                        onClick={() => addTask()}
                    >
                        Add Task
                    </button> 
                    {!showQuickAddTask && (
                        <span 
                            className="add-task__cancel"
                            onClick={() => {
                                setShowMain(false);
                                setShowProjectOverlay(false)
                            }}
                        >
                            Cancel
                        </span>
                    )}
                    {/* <span
                        className="add-task__project"
                        onClick={setShowProjectOverlay(!showProjectOverlay)}
                    >
                        <FaRegListAlt />
                    </span>
                    <span 
                        className="add-task__date"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                    >


                    </span> */}
                </div>   
            )}
            
        </div>
    )    
};