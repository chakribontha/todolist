import React from "react";
const Todolist=({todolist,deletehandler})=>{
    return(
        <div>
            {todolist.map((todos,index)=>
                <div key={index}>
                <h5>{todos}&nbsp; <button onClick={()=>deletehandler(index)}>Delete</button></h5>
               </div>)}
        </div>
    )
}
export default Todolist;