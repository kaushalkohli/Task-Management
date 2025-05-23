import React from 'react'

function TaskNum({userData}) {
  return (
    <div className='flex mt-10 justify-between gap-5 h-screen'>
        <div className='h-50 w-1/2 bg-red-500 py-5 px-10 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{userData.taskCounts.newTask}</h2>
            <h2 className='text-3xl font-bold'>New Task</h2>
        </div>
        <div className='h-50 w-1/2 bg-blue-500 py-5 px-10 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{userData.taskCounts.completed}</h2>
            <h2 className='text-3xl font-bold'>Completed Task</h2>
        </div>
        <div className='h-50 w-1/2 bg-green-500 py-5 px-10 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{userData.taskCounts.active}</h2>
            <h2 className='text-3xl font-bold'>Accept Task</h2>
        </div>
        <div className='h-50 w-1/2 bg-yellow-500 py-5 px-10 rounded-2xl'>
            <h2 className='text-3xl font-semibold'>{userData.taskCounts.failed}</h2>
            <h2 className='text-3xl font-bold'>Failed Task</h2>
        </div>
    </div>
  )
}

export default TaskNum