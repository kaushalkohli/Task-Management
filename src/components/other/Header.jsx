import React from 'react'

function Header({userData, changeUser}) {

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    changeUser('')
  }

  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Hello <br /> {userData.firstName}</h1>
        <button onClick={logOutUser} className='bg-red-500 text-lg font-bold text-white px-4 py-2 rounded-2xl hover:cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header