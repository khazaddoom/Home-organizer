import React, {createContext, useContext, useState, useEffect} from "react";


export const AppContext = createContext();
export const AppProvider = ({children}) => {
    const [ projects, setProjects ] = useState(localStorage.projects ? JSON.parse(localStorage.projects) : []);
    // const [projects, setProjects ] = useState([]);
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
            {children}
        </AppContext.Provider>

    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
    

