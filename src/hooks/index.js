import {useState, useEffect} from 'react'
import moment from 'moment';
import { collatedTasksExist } from '../helpers';


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
    // let unsubscribe = firebase
    //     .firestore()
    //     .collection('tasks')
    //     .where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw');

    let unsubscribe =
        selectedProject && !collatedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY')
            ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
        }));

        setTasks(
        selectedProject === 'NEXT_7'
            ? newTasks.filter(
                task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
            : newTasks.filter(task => task.archived !== true)
        );
        setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};



export const useProjects = () => {
    const [projects, setProjects] = useState(localStorage.projects ? JSON.parse(localStorage.projects) : []);

    useEffect(() => {
        
            const allProjects = projects.map(project => ({
            ...project,
            id: project.id,
            name: project.name
        }));

        
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
            setProjects(allProjects);
        }
    }, [projects]);

    return { projects, setProjects };
};