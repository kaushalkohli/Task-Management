import React from 'react'
import Header from './other/Header'
import TaskNum from './other/TaskNum'
import TaskList from './other/TaskList'



function EmployeeDash({userData, changeUser}) {
  // console.log(userData)
  return (
    <div className='p-5  h-screen'>
        <Header userData={userData} changeUser={changeUser}/>
        <TaskList userData={userData}/>
        <TaskNum userData={userData}/>
    </div>
  )
}

export default EmployeeDash