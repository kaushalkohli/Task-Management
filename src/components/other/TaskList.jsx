import React from 'react'
import AcceptTask from '../AcceptTask'
import NewTask from '../NewTask'
import CompleteTask from '../CompleteTask'
import FaildTask from '../FaildTask'

function TaskList({userData}) {
  return (
      <div id='tasklist' className='h-[60%] overflow-x-auto w-full mt-10 flex items-center justify-start rounded-2xl gap-5 py-5 flex-nowrap'>
        {userData.tasks.map((e, index)=>{
          if(e.active){
            return <AcceptTask key={index} userData={e}/>
          }
          if(e.NewTask){
            return <NewTask key={index} userData={e}/>
          }
          if(e.completed){
            return <CompleteTask key={index} userData={e}/>
          }
          if(e.failed){
            return <FaildTask key={index} userData={e}/>
          }
        })}
        
        
        {/* <AcceptTask/>
        <NewTask />
        <CompleteTask/>
        <FaildTask/> */}
     </div>
  )
}

export default TaskList