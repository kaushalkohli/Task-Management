import React, { useContext } from 'react'
import { AuthProvider } from '../../context/AuthContext'

function AllTask() {

    const AuthData = useContext(AuthProvider)

    // console.log(AuthData.userData.employees)

    return (

    <div className='p-5 bg-black rounded-2xl h-70 overflow-auto'>
        <div className='bg-red-500 p-5 px-4 mb-4 flex justify-between  font-bold shadow appearance-none border rounded  '>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h2 className='text-lg font-medium w-1/5 '>New Task</h2>
            <h2 className='text-lg font-medium w-1/5 '>Active Task</h2>
            <h2 className='text-lg font-medium w-1/5 '>Completed</h2>
            <h2 className='text-lg font-medium w-1/5 '>Failed</h2>
        </div>
        <div className='h-[80%] '>
            {AuthData.userData.employees.map(function(i, index){

            return  <div key={index} className='bg-emerald-700 p-2 px-4 mb-2 flex justify-between shadow appearance-none border rounded '>
                        <h2 className='text-lg font-medium w-1/5 '>{i.firstName}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-blue-600 '>{i.taskCounts.newTask}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-yellow-600'>{i.taskCounts.active}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-green-600'>{i.taskCounts.completed}</h2>
                        <h2 className='text-lg font-medium w-1/5 text-red-600'>{i.taskCounts.failed}</h2>
                    </div>
        })}
        </div>
       
      
    </div>
  )
}

export default AllTask