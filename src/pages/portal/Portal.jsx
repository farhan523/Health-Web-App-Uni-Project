import React from 'react'

import "./portal.css"
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ActivityTaskChart from '../../components/activityChart/ActivityChart';
import ProgressTaskTable from '../../components/progressTaskTable/ProgressTaskTable';
import MonthlyActivityChart from '../../components/MonthlyActivityChart/MonthlyActivityChart';
import MonthlyActivityTable from '../../components/MonthlyActivityTable/MonthlyActivityTable';
import Footer from '../../components/footer/Footer';

export default function Portal() {
  let userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
        <Navbar />
        <div style={{display:"flex",height:"fit-content"}}>
          <Sidebar page={"portal"}/>
            
          <div style={{display:"flex",justifyContent:"space-around",width:'100%',flexWrap:"wrap"}}>
                <div style={{width:"95vw",height:"fit-content"}}>
                  <div style={{padding:"2rem 5rem"}}>
                      <h1 style={{color:"#2d43a8"}}>Hey, {userData.name}!</h1>
                      <p style={{color:"#b2b2b2"}}>Your Elder week Task is here</p>
                  </div>
                </div>
                <div style={{width:"50%"}}>
                    <ActivityTaskChart/>
                </div>
                <div>
                    <ProgressTaskTable/>
                </div>
                <div style={{width:"90%"}}>
                    <MonthlyActivityTable/>
                </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
