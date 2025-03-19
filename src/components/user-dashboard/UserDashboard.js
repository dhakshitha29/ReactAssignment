import React from 'react'
import {useLocation} from 'react-router-dom'

function UserDashboard() {
    let {state}=useLocation()
  return (
    <div >
        <h2 className='text-white '>Welcome ,{state.username}:)</h2>
        <p className='text-white '>{state.email}</p>
    </div>
  )
}

export default UserDashboard