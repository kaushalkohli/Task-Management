import React, { useState } from 'react'


function Login({handleLogin}) {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setemail('')
        setpassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center bg-white justify-center'>
        <div className='border-2 border-green-500 bg-gray-400 p-10 h-96 rounded-2xl'>
            <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col items-center justify-center gap-6 mt-15'>
                <input 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    className='bg-gray-800 rounded px-4 py-2 w-full focus:outline-white text-center' 
                    type="email" 
                    placeholder='admin@gmail.com' 
                    required
                />
                <input 
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}
                    className='bg-gray-800 rounded px-4 py-2 w-full focus:outline-white text-center' 
                    type="password" 
                    placeholder='123' 
                    required
                />
                <button className='bg-blue-500 hover:bg-blue-600 px-6 py-2 w-full rounded-md transition-colors' >
                    Log in 
                </button>
                < a href="/data.html" className='font-semibold hover:to-blue-700'>See Employees Details</a>
            </form>
        </div>
    </div>
  )
}

export default Login