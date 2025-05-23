import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthProvider = createContext()

function AuthContext({children}) {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    try {
      const data = getLocalStorage()
      if (data) {
        const { employees, admin } = data
        setUserData({ employees, admin })
      }
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }, [])

  return (
    <AuthProvider.Provider value={{ userData }}>
      {children}
    </AuthProvider.Provider>
  )
}

export default AuthContext