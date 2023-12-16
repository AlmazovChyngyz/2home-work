import React from 'react';
const List = ({ tasks }) => {
    return (
        <ol>
            {tasks.map((task) => (
                <li key={task.id}>{task.task}</li>
            ))}
        </ol>
    );
};

export default List;
