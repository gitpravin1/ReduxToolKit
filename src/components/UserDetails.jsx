import React from 'react'
import DeleteUser from './DeleteUser'
import fakeUserdata from '../api/index.jsx'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/userSlices'
import DisplayUser from './DisplayUser'

function UserDetails() {
    const dispatch= useDispatch();

const addNewUser=(uData)=>{

 dispatch(addUser(uData));
}

  return (
    <>
    
    <div className='detailsHeading' >
        <h1 className='userHeading'>List of User Details</h1>
        <button onClick={()=>addNewUser(fakeUserdata())}>Add New Users</button>
    </div>
    <ul>
        <DisplayUser/>
    </ul>
    <hr className='ln' />
    <DeleteUser />
    </>
  )
}


export default UserDetails