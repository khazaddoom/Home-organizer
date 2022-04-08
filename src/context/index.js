import React, { 
    createContext, 
    useContext, 
    useState, 
    useEffect 
} from "react";
// import { useProjects } from "../hooks";

export const AppContext = createContext();
export const AppProvider = ( props ) => {
    // const {projects, setProjects}  = useProjects();

    const [ projects, setProjects ] = useState(localStorage.projects ? JSON.parse(localStorage.projects) : []);
    const [selectedProject, setSelectedProject ] = useState('INBOX');

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

    return (
        <AppContext.Provider
            value={{
                projects, 
                setProjects,
                selectedProject,
                setSelectedProject
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
    

