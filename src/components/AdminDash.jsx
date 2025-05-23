import React from 'react'
import Header from './other/Header'
import CreateTask from './other/CreateTask'
import AllTask from './other/AllTask'

function AdminDash({userData, changeUser}) {
  
  

  return (
    <div className='p-5 h-screen w-full'>
        <Header userData={userData} changeUser={changeUser}/>
        <CreateTask userData={userData}/>
        <AllTask userData={userData}/>
    </div>
  )
}

export default AdminDash