import { collatedTasks } from '../constants/index'

// export const getTitle = (projects, id) =>
//     projects.find(project => project.id === id);

export const getTitle = (projects, id) => {
    if (Array.isArray(projects) && id) {
        return projects.find(project => project.id === id);
    }
    console.error('Something went wrong');
    return null;
}
    
export const getCollatedTitle = (projects, key) =>
    projects.find(project => project.key === key);

export const collatedTasksExist = selectedProject => 
collatedTasks.find(task => task.key === selectedProject);

export const generatePushId = (() => {
    const PUSH_CHARS =
    '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

    const lastRandChars = [];

    return function() {
    let now = new Date().getTime();

    const timeStampChars = new Array(8);
    for (var i = 7; i >= 0; i--) {
        timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
        now = Math.floor(now / 64);
    }

    let id = timeStampChars.join('');

    for (i = 0; i < 12; i++) {
        id += PUSH_CHARS.charAt(lastRandChars[i]);
    }

    return id;
    };
})();