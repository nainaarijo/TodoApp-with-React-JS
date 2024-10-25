import React, { useState, useEffect } from 'react';
import './todoApp.css';


const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

 
  const addTask = () => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };


  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((t) => t !== taskToRemove));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button onClick={() => removeTask(task)} className="remove-btn">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

