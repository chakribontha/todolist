import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from "react";
import Todolist from './Todolist';
function App() {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([]);
    const changehandler=(e)=>{
        setTask(e.target.value)
    }
    const submithandler=e=>{
        e.preventDefault();
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask(" ")
    }
    const deletehandler=(indexvalue)=>{
        const newtodos=todos.filter((todos,index)=>index!=indexvalue);
        setTodos(newtodos);
    }
  return (
      <div>
        <center>
         <div className="card" style={{"background-color":"yellow"}}>
             <div className="card-body">
                 <h5 className="card-title">Todolist managament</h5>
                 <form onSubmit={submithandler}>
                     <input size="30" type="text" value={task} onChange={changehandler}/>&nbsp;&nbsp;
                     <input type="submit" value="Add" name="add"/>
                 </form>
                 <Todolist todolist={todos} deletehandler={deletehandler} />
             </div>
         </div>
        </center>
      </div>
  );
}

export default App;
