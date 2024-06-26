import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import TemperatureGauge from '../../components/temperatureGuage/TemperatureGuage';

import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // or any other theme
import 'primereact/resources/primereact.min.css';
import "./style.css"

export default function Dashboard() {
    const [temperature, setTemperature] = useState(37);
    const [date, setDate] = useState(null);

    // Example to dynamically change temperature
    // In a real-world scenario, this could come from a sensor or API.
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTemperature((prevTemp) => {
          const newTemp = prevTemp + (Math.random() * 2 - 1);
          return Math.max(33, Math.min(42, newTemp.toFixed(1)));
        });
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);

    let userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
        <Navbar/>
        <div style={{display:"flex",height:"fit-content"}}>
            <Sidebar page={"dashboard"}/>
            <div style={{width:"95vw",height:"fit-content"}}>
                <div style={{padding:"2rem"}}>
                    <h1 style={{color:"#2d43a8"}}>Welcome, {userData.name}!</h1>
                    <p style={{color:"#b2b2b2"}}>Keep an eye on your Elder's daily activities and health issues</p>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{padding:50, width:"60%"}}>
                        <div style={{width:"25rem",height:"fit-content",backgroundColor:"red"}}>
                            <div style={{height:"6rem",backgroundColor:"#2D43A8"}}>
                                <div style={{justifyContent:"center",display:"flex",alignItems:"baseline"}}>
                                    <div style={{display:"flex", alignItems:"center",marginTop:"1rem"}}>
                                        <img src="../../../../public/image/sunrise.png"/>
                                        <h5 style={{marginLeft:5,color:'white'}}>Morning Walk</h5>
                                    </div>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-around",marginBottom:15}}>
                                    <div style={{display:"flex",alignItems:"center",color:"white"}}>
                                        <div style={{width:"2.7rem" , height:"2.7rem",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"50%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
                                            <img style={{padding:5}} src="../../../../public/image/run.png" />
                                        </div>
                                        <div style={{marginLeft:10}}>
                                            <p style={{fontWeight:100}}>Walk</p>
                                            <h6>2 km</h6>
                                        </div>
                                    </div>
                                    
                                    <div style={{display:"flex",alignItems:"center",color:"white"}}>
                                        <div style={{width:"2.7rem" , height:"2.7rem",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"50%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"}}>
                                            <img style={{padding:5}} src="../../../../public/image/stopwatch (1).png" />
                                        </div>
                                        <div style={{marginLeft:10}}>
                                            <p style={{fontWeight:100}}>Duration</p>
                                            <h6>2 km</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"flex" , flexWrap:"wrap"}}>
                                <div style={{minWidth:"12rem", width:"50%",height:"8rem",backgroundColor:"#cccccc"}}>
                                    <div style={{height:"40%", display:"flex", justifyContent:"flex-end",alignItems:"end"}}>
                                        <img style={{marginRight:20}} src="../../../../public/image/footsteps.png"  />
                                    </div>
                                    <div style={{height:"60%", display:"flex",alignItems:"center"}}>
                                        <div style={{marginLeft:20}}>
                                            <p>Steps</p>
                                            <h3>25000</h3>
                                        </div>
                                    </div>
                                </div>
                                <div style={{minWidth:"12rem", width:"50%",height:"8rem",backgroundColor:"#818ecb"}}>
                                    <div style={{height:"40%", display:"flex", justifyContent:"flex-end",alignItems:"end"}}>
                                        <img style={{marginRight:20}} src="../../../../public/image/calories (1).png"  />
                                    </div>
                                    <div style={{height:"60%", display:"flex",alignItems:"center"}}>
                                        <div style={{marginLeft:20}}>
                                            <p>calories</p>
                                            <h3>1000 kcal</h3>
                                        </div>
                                    </div>
                                </div>
                                <div style={{minWidth:"12rem", width:"50%",height:"8rem",backgroundColor:"#818ecb"}}>
                                    <div style={{height:"40%", display:"flex", justifyContent:"flex-end",alignItems:"end"}}>
                                            <img style={{marginRight:20}} src="../../../../public/image/moon.png"  />
                                    </div>
                                        <div style={{height:"60%", display:"flex",alignItems:"center"}}>
                                            <div style={{marginLeft:20}}>
                                                <p>Sleep</p>
                                                <h3>7 h  30 mins</h3>
                                            </div>
                                        </div>
                                    </div>
                                <div style={{minWidth:"12rem", width:"50%",height:"8rem",backgroundColor:"#cccccc"}}>
                                    <div style={{height:"40%", display:"flex", justifyContent:"flex-end",alignItems:"end"}}>
                                            <img style={{marginRight:20}} src="../../../../public/image/water.png"  />
                                    </div>
                                    <div style={{height:"60%", display:"flex",alignItems:"center"}}>
                                            <div style={{marginLeft:20}}>
                                                <p>Hydration</p>
                                                <h3>5 liters</h3>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:40,display:"flex",flexDirection:"column",height:"18rem"}}>
                            <h3 style={{marginBottom:10}}>Body Temperature</h3>
                            <div style={{display:"flex", width:"35rem" , justifyContent:"space-between"}}>
                                <div style={{width:"22rem", border:"5px solid grey"}}>
                                    <TemperatureGauge temperature={temperature} />
                                </div>
                                <div style={{display:"flex",flexDirection:'column',height:"100%",justifyContent:"space-between"}}>
                                    <div style={{width:"10rem" , height:"5rem" , backgroundColor:"#2d43a8",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                        <img src='../../../../public/image/dumbell.png'/>
                                        <div style={{color:"white"}}>
                                            <h5>Weight</h5>
                                            <p>65kg</p>
                                        </div>
                                    </div>
                                    <div style={{width:"10rem" , height:"5rem" , backgroundColor:"#2d43a8",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                        <img src='../../../../public/image/height.png'/>
                                        <div style={{color:"white"}}>
                                            <h5>Height</h5>
                                            <p>5.5 inches</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div style={{width:"40%",marginTop:40}}>
                        <Calendar  style={{height:300}} value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                        <div>
                            <div style={{marginTop:20,height:"4rem", width:"70%",backgroundColor:"#818ecb",display:"flex",alignItems:"center"}}>
                                <img style={{margin:"0 10px"}} src='../../../../public/image/moon.png'/>
                                <div style={{}}>
                                    <h3>Sleep Conditions</h3>
                                    <p style={{color:"red"}}>Take break from work and take rest</p>
                                </div>
                            </div>
                            <div style={{marginTop:20,height:"4rem", width:"70%",backgroundColor:"#818ecb",display:"flex",alignItems:"center"}}>
                                <img style={{margin:"0 10px"}} src='../../../../public/image/water.png'/>
                                <div style={{}}>
                                    <h3>Water level</h3>
                                    <p style={{color:"green"}}>Your water intake was good this week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
