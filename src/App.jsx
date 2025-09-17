import { useEffect, useRef, useState } from 'react';
import './App.css'
import Form from './components/Form'
import Todolist from './components/Todolist'
function App() {
  const newtask = useRef('');
  const STORANGE = 'TODOLIST_APP';
  const [tasks,setTask] = useState(()=> {
    return JSON.parse(localStorage.getItem(STORANGE)) || []
  })
  
  const [tasksCompleted, setTaskCompleted] = useState(0)
  useEffect(()=>{
    localStorage.setItem(STORANGE, JSON.stringify(tasks));
    console.log(tasks);
    
    const complete = tasks.filter((item)=>item.completed == true).length
    setTaskCompleted(complete)
    console.log (complete)
  }, [tasks])

  function setId() {
   if (tasks == '') {
    return 1;
   } else {
    return tasks[0].id + 1 
   }
  }

  function addtask (event) {
    event.preventDefault()
    if(newtask.current.value == ''){
      alert('Silahkan masukkan hal yang akan kamu kerjakan');
      return false 
    }
    const data = {
      id:setId(),
      task: newtask.current.value,
      completed: false
    }
    newtask.current.value = ''
    setTask([...tasks, data])
    }

    function setCompleted(id) {
      let taskItem = []
      tasks.map((item,index)=>{
        if (item.id == id) {
          taskItem[index]={...item,completed: !item.completed }
          console.log(item)
        }else{
          taskItem[index] = item
        }
      })
      setTask(taskItem)    
    }

    function move(currentIndex,updateIndex){
      const currentData = tasks[currentIndex]
      const updateData = tasks[updateIndex]

      tasks[currentIndex] = {...currentData, id: updateData.id }
      tasks[updateIndex] = {...updateData, id: currentData.id }

      const newData = [...tasks]
      setTask (newData)
    }

    function remove(id){
      if(window.confirm('yakin akan hapus data ini?')){
       setTask(tasks.filter((item) => item.id != id)) 
      }
    }

  return (
    <>
      <Form addtask={addtask} newtask={newtask} tasksCompleted={tasksCompleted} tasks={tasks} />
      <Todolist tasks={tasks }setCompleted={setCompleted} move={move} remove={remove} />
   </>
  )
}

export default App