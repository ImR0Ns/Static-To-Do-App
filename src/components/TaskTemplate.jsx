//styles
import "../styles/TaskTemplate.css";

export function TaskTemplate({theTask, position, setTask, setActiveTasks, setCompletedTask}) {

  /* Function to incerement the active Tasks, and delete */
  let deleteFunction = ()=>{
    setActiveTasks((currActive)=>currActive - 1)
    setTask((currentTasks)=>{
      return currentTasks.filter((v)=>{
        return v.id !== theTask.id;
      })
    })
  }
  /* Function to make complete some taks decrement active tasks and increment completed tasks */
  let completeFunction = () => {
    setActiveTasks((currActive)=>currActive - 1)
    setTask((currentTasks) => {
      return currentTasks.map((v) => 
        v.id === theTask.id ? { ...v, completed: true } : v
      );
    });
    setCompletedTask((currCompleted)=>currCompleted + 1)
  };

  return (
    <div className="row">
        <div className="col-md-6 taskBox">
            <p><span className="positionNumber">{position + 1}</span>{theTask.task}</p>
        </div>
        <div className="col-md-6 text-end controlButtons">
            {theTask.completed ? <button className="ms-2">✔</button> :
            <>
              <button className="me-2" onClick={ deleteFunction }>❌</button>
              <button className="ms-2" onClick={ completeFunction }>✔</button>
            </>
            }
        </div> 
        
        {/* <button onClick={()=>{
          console.log(theTask)
        }}>For check </button> */}
    </div>
  )
}
