import React, {useEffect, useState} from 'react'
import Task from './Task'

function Home() {
  const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
 
const [tasks, settasks] = useState(initialArr)
const [title, setTitle] = useState("")
const [descriptions, setdescriptions] = useState("")

const submithandler = (e) => {
e.preventDefault();
settasks([...tasks,
  {title,descriptions,}
  ,])
}
const deleteTask = (index ) => {
  const arr = tasks.filter((val,i) => {
  return i!== index;
  })
  settasks(arr)
}
useEffect(() => {
  
localStorage.setItem("tasks",JSON.stringify(tasks))

}, [tasks])


  return (
    <div className="container">
      <form onSubmit={submithandler}>
        
      <input type="text"placeholder="Enter title"  value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <textarea placeholder="Enter descriptions" value={descriptions}  onChange={(e)=>setdescriptions(e.target.value)}></textarea>
      <button type="submit">Add</button>
      </form>

    

{tasks.map((item,index)=> (
  <Task key={index} 
  title={item.title}
  descripiton={item.descriptions}
  deleteTask={deleteTask}
  index={index}
  />
))}



    </div>
  )
}

export default Home
