import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();

    return ( 
        <>
            <div className='back-button-container'>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat, et commodi harum vitae officia.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;