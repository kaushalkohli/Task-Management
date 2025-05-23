import React from 'react'

function AcceptTask({userData}) {




  return (
   
    
    <div className='h-full w-[300px] bg-amber-500 rounded-2xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center '>
                <h2 className='bg-red-500 rounded-md p-2 w-10% text-center'>{userData.category}</h2>
                <h2 className='font-bold '>{userData.taskDate}</h2>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{userData.taskTitle}</h2>
            <p className='text-sm mt-4'>{userData.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 py-1 px-1 '>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-1'>Mark as failed</button>
            </div>
    </div>
    
  )
}

export default AcceptTask