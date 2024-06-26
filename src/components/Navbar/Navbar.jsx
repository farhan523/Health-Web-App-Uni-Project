import React from 'react'
import "./style.css"
import Notification from '../Notification/Notification';
function Navbar() {
  let userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className='nav'>
        <Notification/>
        <div style={{display:"flex", alignItems:"center",marginLeft:"1rem"}}>
            <div className='user-image' style={{backgroundImage:`url(${userData.profilePic})`}}></div>
            <p style={{color:"white"}}>{userData.name}</p>
        </div>
    </div>
  )
}

export default Navbar