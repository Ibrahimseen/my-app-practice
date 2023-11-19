

import React from 'react';

const Task = ({title,descripiton,deleteTask,index}) => {
  return (
    <div className="task">
<div>
    <p>{title}</p>
    <span>{descripiton}</span>
    
</div>
    <button onClick={() => {deleteTask(index)}}>-</button>  
    </div>
    
  );
};

export default Task;

