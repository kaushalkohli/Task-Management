import React, { useState } from 'react'



function CreateTask() {

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDescription , setTaskDescription] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [asignTo , setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
  
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active:false,
      newTask:true,
      failed:false,
      completed:false,
      
    }
    
    try {
      // get current employees data
      const data = JSON.parse(localStorage.getItem('employees')) || []

      // find employees and add task
      const updatedData = data.map((employee)=>{
        if(asignTo === employee.firstName){
          return {
            ...employees,tasks:[...employee.tasks, newTask],    // add new task to employee's tasks 
            taskCounts:{
              ...employee.taskCounts,     // update task counts 
              newTask: employees.taskCounts.newTask + 1,
              active: employees.taskCounts.active + 1,
              completed: employees.taskCounts.completed + 1,
              failed: employees.taskCounts.failed + 1
            }
          }
        }
        return employees
      })
      
      // update local storage with new data
      localStorage.setItem('employees', JSON.stringify(updatedData))
      alert('Task created successfully')
    } catch (error) {
      console.log(error)
      alert('error creating task. Please try again')
    }
    
    
    // setTaskTitle('')
    // setTaskDescription('')
    // setTaskDate('')
    // setAsignTo('')
    // setCategory('')

  }  

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <form onSubmit={(e)=>{submitHandler(e)}} className='shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Task Title
            </label>
            <input
              value={taskTitle} 
              onChange={(e)=>{setTaskTitle(e.target.value)}}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              placeholder='Make a UI'
            />
          </div>
          
          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e)=>{setTaskDate(e.target.value)}} 
              className='shadow appearance-none border rounded w-full py-2 px-3 text-blue-600 leading-tight focus:outline-none focus:shadow-outline'
              type="date"
              min={new Date().toISOString().split('T')[0]}
              style={{ colorScheme: 'light' }}
              placeholder="Select a date"
            />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Assign to
            </label>
            <input
            value={asignTo} 
              onChange={(e)=>{setAsignTo(e.target.value)}}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              placeholder='Employee name'
            />
          </div>

          <div className='w-full md:w-1/2 px-3 mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Category
            </label>
            <input 
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type="text"
              placeholder='Design, etc'
            />
          </div>

          <div className='w-full px-3 mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Description
            </label>
            <textarea
              value={taskDescription} 
              onChange={(e)=>{setTaskDescription(e.target.value)}}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              rows="5"
              placeholder='Task description...'
            />
          </div>

          <div className='w-full px-3'>
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type="submit"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask