import React, { useState, useEffect } from 'react'
import "./style.css"
import SignupModal from '../../components/SignupModal';
import LoginModal from '../../components/LoginModal';
import { useNavigate ,  } from "react-router-dom";


function Home() {
   const [signUp,setSignUp] =  useState(false);
   const [Login,setLogin] =  useState(false);
   const [dataNotFound,setDataNotFound] = useState(false);
   const navigate = useNavigate();


   const closeSignUp = () => setSignUp(false);
   const closeLogin = () => setLogin(false);

    useEffect(()=>{
        let userData = localStorage.getItem("userData");
        
        if(userData)
            navigate("/dashboard"); 
        else
            setDataNotFound(true)
    },[])

    return dataNotFound ?  (
    <>
        <header>
  
            <div className='headerShadow'>
                <nav>
                        <div style={{width:"15rem",display:"flex",justifyContent:"left" }}>
                            <p  style={{cursor:"pointer",textDecoration:"none", alignSelf:"center",color:"white",marginRight:"2rem"}} href='#' onClick={()=>setLogin(true)}>Login</p>
                            <div  style={{backgroundColor:"white",height:"2rem",padding:"5px 20px",borderRadius:"1rem"}}>
                            <p  style={{textDecoration:"none",color:"blue",cursor:"pointer"}} onClick={()=>setSignUp(true)}>Sign Up</p>
                            </div>
                        </div>
                </nav>
                <div style={{height:"80%",display:"flex",justifyContent:"center",flexDirection:"column",color:"white"}}>
                    <h1 style={{color:'white',textAlign:"center"}}>Monitor your elders health<br/> anywhere around the<br/> world with just one click</h1>
                    <div style={{justifySelf:"center",alignSelf:"center",backgroundColor:"#2D43A8",padding:"7px 12px",borderRadius:20,marginTop:"2rem"}}>
                        <a href='#' style={{color:"white",textDecoration:"none"}}>JOIN TODAY</a>
                    </div>
                </div>
            </div>

        </header>
        <SignupModal show={signUp} onClose={closeSignUp}/>
        <LoginModal show={Login} onClose={closeLogin}/>
    </>
  ) : <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh"}}>
        <h1>Loading...</h1>
  </div>
}

export default Home