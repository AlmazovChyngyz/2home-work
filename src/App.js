import React, { useState } from 'react';
import List from './List';
import Button from './Button';
import './App.css'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: 'run',
        },
        {
            id: 2,
            task: 'push',
        },
        {
            id: 3,
            task: 'jump',
        },
    ]);
    const [searchInput, setSearchInput] = useState('');
    const [addInput, setAddInput] = useState('');
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };
    const handleAddInputChange = (e) => {
        setAddInput(e.target.value);
    };
    const handleAddTask = () => {
        const newTask = {
            id: tasks.length + 1,
            task: addInput,
        };
        setTasks([...tasks, newTask]);
        setAddInput('');
    };
    return (
        <div className={"mainBlock"}>
            <h1>Task</h1>
            <input type="text" value={addInput} onChange={handleAddInputChange} placeholder="Add Task" />
            <input type="text" value={searchInput} onChange={handleSearchInputChange} placeholder="Search" />
            <List tasks={tasks} />
            <Button onClick={handleAddTask} text="Add Task" />
        </div>
    );
};

export default App;
