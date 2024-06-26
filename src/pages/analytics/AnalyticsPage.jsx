import React,{useState,useEffect, useReducer} from 'react'
import "./analytics.css"
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import MonthlyActivityChart from '../../components/MonthlyActivityChart/MonthlyActivityChart';
import PulseRateChart from '../../components/pulseRateChart/PulseRateChart';
import HealthLevelChart from '../../components/HealthLevelChart/HealthLevelChart';
import Footer from '../../components/footer/Footer';
import SugarLevelChart from '../../components/sugarLevelChart/SugarLevelChart';
import { useNavigate } from "react-router-dom";
import ModalComponent from '../../components/modalComponent/ModalComponent';
import { db } from '../../firebase';
import {  doc, getDoc } from 'firebase/firestore';

const Services = [
  {
    heading : "Health Check",
    img : "/image/health-check.png",
    details:"Check your elder health Report and Daily Statistics"
  },
  {
    heading : "Medical History",
    img : "/image/history.png",
    details:"Check your elder health Medical history"
  },
  {
    heading : "Major Health Issues",
    img : "/image/medical.png",
    details:"Check your elder major health issues"
  },
  {
    heading : "Ongoing Treatment",
    img : "/image/treatment.png",
    details:"Check your elder ongoing treatments"
  }
]




function Analytics() {
  const [showModal, setShowModal] = useState(false);
  const [stepsCount, setStepsCount] = useState(0);
  const [bloodPressureDiastolic, setBloodPressureDiastolic] = useState(0);
  const [bloodPressureSystolic, setBloodPressureSystolic] = useState(0);
  const [heartRate,setHeartRate] = useState(0);
  const [userDataHealth, setUserData] = useState(null);

  let userData = JSON.parse(localStorage.getItem("userData"));

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  function ServiceCard({service,index}){
    return <div onClick={() => service.heading === "Health Check" ? handleShowModal() : null} key={index} style={{width:"15rem",borderRadius:15,height:"10rem",backgroundColor:"#2d43a8",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
        <div style={{display:"flex",justifyContent:"space-around",color:"white",width:"100%"}}>
            <img src={service.img}/>
            <h3 style={{paddingTop:5}} >{service.heading}</h3>
        </div>
        <p style={{textAlign:"center",color:"white"}}>{service.details}</p>
    </div>
}


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const docRef = doc(db, 'users', userData.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // Document exists, set the userData state
          console.log(docSnap.data())
          let data = docSnap.data();
          setBloodPressureDiastolic(data["Health Data"][1]);
          setBloodPressureSystolic(data["Health Data"][2]);
          setHeartRate(data["Health Data"][2]);
          setStepsCount(data.steps)

          setUserData(docSnap.data());
        } else {
          // Document does not exist
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchUserData();
  }, []);
  
  return (
    <>
        <Navbar/>
        <div style={{display:"flex",height:"fit-content"}}>
          <Sidebar page={"analytics"}/>
          <div>
            <div style={{width:"95vw",height:"fit-content"}}>
                  <div style={{padding:"2rem 5rem"}}>
                      <h1 style={{color:"#2d43a8"}}>Hey, {userData.name}!</h1>
                      <p style={{color:"#b2b2b2"}}>Your Elder weekly analysis report</p>
                  </div>
            </div>
            <div style={{width:"95vw",height:"fit-content",display:'flex',justifyContent:"space-around"}}>
                  {Services.map((service,index)=> <ServiceCard service={service} index={index} />)}
            </div>
            <div style={{display:'flex',justifyContent:"space-around"}}>
              <div style={{width:"40vw",marginTop:"2rem",paddingLeft:"3rem"}}>
                <MonthlyActivityChart/>
              </div>
              <div style={{width:"55vw",marginTop:"5rem",display:"flex",justifyContent:"space-around",alignItems:"flex-start",flexDirection:"column"}}>
                <div style={{display:"flex",width:"100%"}}>
                  <div style={{width:"20rem"}}>
                    <PulseRateChart/>
                  </div>
                  <div style={{width:"20rem",marginLeft:"2rem"}}>
                    <HealthLevelChart/>
                  </div>
                </div>
                <div style={{width:"100%", marginTop:"2rem",marginBottom:"1rem"}}>
                    <SugarLevelChart/>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <Footer/>
        <ModalComponent
        show={showModal}
        handleClose={handleCloseModal}
        stepsCount={stepsCount}
        bloodPressureDiastolic={bloodPressureDiastolic}
        bloodPressureSystolic={bloodPressureSystolic}
        heartRate={heartRate}
      />
    </>
  )
}

export default Analytics