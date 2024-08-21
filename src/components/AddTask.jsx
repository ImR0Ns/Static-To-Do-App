import { useState } from "react";

//styles
import "../styles/AddTask.css";

//import task template
import { TaskTemplate } from "./TaskTemplate";

export function AddTask() {

  //change views between tasks and Completed Tasks
  let [activeTaskTrue, setActiveTaskTrue] = useState(true);
  //getting the task from input
  let [task, setTask] = useState("");
  //here we have tasks
  let [tasks, setTasks] = useState([
    {
      id: 0,
      task: "Welcome to application",
      completed: false
    },
    {
      id: 1,
      task: "Enjoy",
      completed: true
    },
  ])
  //making sure we have an unique key value and starts from remaining
  let [idCounter, setIdCounter] = useState(tasks.length); 

  //functions to check how many active and completed tasks are 
  let checkCompleted = tasks.filter((v)=>{
    return v.completed
  }).length
  let checkActive = tasks.filter((v)=>{
    return !v.completed
  }).length

  //count completed
  let [completedTasks, setCompletedTasks] = useState(checkCompleted)
  //count active
  let [activeTasks, setActiveTasks] = useState(checkActive)

  return ( 
      <div>
        <h1 className="text-center applicationTitle rounded-top">Add Task</h1>
        <div className="text-center mt-5">
            <form action="" onSubmit={
              (e)=>{
                e.preventDefault(); //prevent default to avoid refresh
                //create the new object based on input field
                let createTask = {
                  id: idCounter,
                  task,
                  completed: false
                }
                setIdCounter((currentCounter)=> currentCounter + 1) // increment to remain unique
                setTasks((currentTasks)=>[...currentTasks, createTask]) // add tasks to the rest array
                setActiveTasks((currentActive)=>currentActive + 1)
              }
            }>
              <input type="text" placeholder="Name your task" className="inputAddTask" value={task} onChange={
                (e)=>{
                  setTask(e.target.value)
                }
              }/>
              <button className="addTaskButton">Add task</button>
            </form>
        </div>

        <div className="text-center mt-5 buttonsToSeeTasks">
          <button onClick={()=>{
            setActiveTaskTrue(true)
          }}>Active Tasks</button>
          <button onClick={()=>{
            setActiveTaskTrue(false)
          }}>Completed Tasks</button>
        </div>

        {activeTaskTrue ? 

        <div className="text-left containerActiveTasks">
          <p className="activeTasks text-center">Active Tasks ({activeTasks})</p>
          {tasks.map((v, i)=>{
            if(!v.completed){
              return <TaskTemplate key={v.id} theTask={v} position={i} setTask={setTasks} setActiveTasks={setActiveTasks} setCompletedTask={setCompletedTasks}/>
            }
          })}
        </div>

        : 
        
        <div className="text-left containerActiveTasks">
          <p className="activeTasks text-center">Completed Tasks ({completedTasks})</p>
          {tasks.map((v, i)=>{
            if(v.completed){
              return <TaskTemplate key={v.id} theTask={v} position={i} setTask={setTasks}/>
            }
          })}
        </div>}
    </div>
  )
}
