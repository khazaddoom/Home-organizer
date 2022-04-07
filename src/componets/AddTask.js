import React from "react";
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import {useGlobalContext } from '../context/index'


export const AddTask({
    showAddTaskMain = true, 
    showShouldMain = false, 
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const [ task, setTask] = useState('');
    const [ taskDate, setTaskDate] = useState('');
    const [ project, setProject = useState('');
    const [ showMain, setShowMain] = useState(shouldShowMain);


    return (

    )
}