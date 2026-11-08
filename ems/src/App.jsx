import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";

import AdminDasdBoard from "./components/Dashboard/AdminDasdBoard.jsx";
import { setLocalStorage } from "./utils/localStorage.jsx";
import { getLocalStorage } from "./utils/localStorage.jsx";
import { useContext } from "react";
import {AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const {userData,setUserData} = useContext(AuthContext)
     
   useEffect(()=>{
    setLocalStorage();
  
   })
    

  const handleLogin = (email,password)=>{
    if(email == 'admin@company.com' && password == 'password123'){
      setUser('admin')
      localStorage.setItem('loggedInUser' ,JSON.stringify({role:'admin'}))
    } else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
      setUser('employees')
      setLoggedInUserData(employee)
       localStorage.setItem('loggedInUser' ,JSON.stringify({role:'employee',data:employee}))
      }
    } else {
      alert("Invalid Credentials")
    }
  } 
  
  
  


  return (
    <>
    
   {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDasdBoard changeUser={setUser} /> : <EmployeeDashboard data={loggedInUserData} />}
   
    </>
  )
}

export default App