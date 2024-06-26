import React from 'react'
import "./sidebar.css"
import { useNavigate } from "react-router-dom";


export default function Sidebar({page}) {
    const navigate = useNavigate();

  return (
    <div className='sidebar'>
        <div>
            <div className={"icon-div " + (page == "dashboard" ? "active" : "")} style={{}} onClick={()=>navigate("/dashboard")}>
                <img src="../../../public/image/dashboard.png" />
            </div>
            <div className={"icon-div " + (page == "analytics" ? "active" : "")} onClick={()=>navigate("/analytics")} >
                <img src="../../../public/image/analytics.png" />
            </div>
            <div className={"icon-div " + (page == "portal" ? "active" : "")}  onClick={()=>navigate("/portal")}>
                <img src="../../../public/image/portal.png" />
            </div>
        </div>
    </div>
  )
}
