import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // Extract data safely, fallback to props.changeUser if named differently
  const dashboardData = props.data || {};

  return (
    <div className='p-10 h-screen '>
        <Header changeUser={props.changeUser} data={dashboardData}/>
        <TaskListNumbers data={dashboardData}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard