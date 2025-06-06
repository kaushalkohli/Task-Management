import React from 'react'

function FaildTask({userData}) {


  return (
    <div className='h-full w-[300px] bg-amber-500 rounded-2xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center '>
                <h2 className='bg-red-500 rounded-md p-2 w-15 text-center'>{userData.category}</h2>
                <h2 className=''>{userData.taskdate}</h2>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{userData.taskTitle}</h2>
            <p className='text-sm mt-4'></p>
            <div className='mt-4 flex justify-center'>
                <button className='w-full bg-red-500 py-1'>Failed</button>
            </div>
        </div>
  )
}

export default FaildTask