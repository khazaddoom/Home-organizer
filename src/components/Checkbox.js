import React, {useState} from 'react';




export const Checkbox = ({ id }) => {
    const [isArchive, setIsArchive] = useState(false);

    const archiveTask = () => {
        setIsArchive(!isArchive);
    };

    return (
        <div 
            className="checkbox-holder "
            onClick={() => archiveTask()}
        >
            <span className='checkbox'/>
        </div>
    )
};