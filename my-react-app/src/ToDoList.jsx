import React, { useState } from 'react';


function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    function hanldeInputChange(event) {
        setNewTask(event.target.value);
    }

    function AddTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("");
        }
    }

    function DeleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]]
                = [updateTasks[index - 1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]]
                = [updateTasks[index + 1], updateTasks[index]]
            setTasks(updateTasks);
        }
    }



    return (<div className='to-do-list'>
        <h1>To Do List</h1>
        <div>
            <input type="text"
                placeholder='Enter a Task...'
                value={newTask}
                onChange={hanldeInputChange}
            />
            <button className='add-button'
                onClick={AddTask}
            >
                Add
            </button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button'
                        onClick={() => DeleteTask(index)}>
                        Delete
                    </button>
                    <button className='move-button'
                        onClick={() => moveTaskUp(index)}>
                        Move Up
                    </button>
                    <button className='move-button'
                        onClick={() => moveTaskDown(index)}>
                        Move Down
                    </button>

                </li>
            )}
        </ol>
    </div>)
}

export default ToDoList