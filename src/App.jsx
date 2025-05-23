import React, { useContext, useState } from 'react'
import './index.css'
import Login from './components/Login'
import EmployeeDash from './components/EmployeeDash'
import AdminDash from './components/AdminDash'
import { AuthProvider } from './context/AuthContext'
import { useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [loggedUser, setLoggedUser] = useState(null)
  const { userData } = useContext(AuthProvider)

  useEffect(() => {
    try {
      // Get initial data from localStorage
      const storedData = localStorage.getItem('loggedInUser')   // Retrieve the logged-in user data
      
      // Check if data exists
      if (storedData) {
        const { role, userData: storedUser } = JSON.parse(storedData)
        setUser(role)
        setLoggedUser(storedUser)
      }
    } catch (error) {
      console.error('Error loading stored data:', error)
    }
  }, [])

  const handleLogin = (email, password) => {
    try {
      // Check for admin login
      const adminUser = userData?.admin?.find(admin => 
        admin.email === email && admin.password === password
      )
      
      if (adminUser) {
        setUser('admin')
        setLoggedUser(adminUser)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'admin',
          userData: adminUser
        }))
        return
      }

      // Check for employee login
      const employeeUser = userData?.employees?.find(employee => 
        employee.email === email && employee.password === password
      )

      if (employeeUser) {
        setUser('employee')
        setLoggedUser(employeeUser)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee',
          userData: employeeUser
        }))
        return
      }

      // If no match found
      alert('Invalid email or password. Please try:\nAdmin: admin@example.com / 123\nEmployee: employee1@example.com / 123')
    } catch (error) {
      console.error('Login error:', error)
      alert('An error occurred during login. Please try again.')
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDash userData={loggedUser}  changeUser={setUser}/>}
      {user === 'employee' && <EmployeeDash userData={loggedUser}  changeUser={setUser}/>}
    </>
  )
}

export default App
