import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import "../assets/css/style.css"
import StudentCard from "../component/StudentCard"

 

const Home = () =>{
  let name="sumaiya aiman";
  let id="484218";
  let dept="cst";
  let sems="8th";
  let shift="2nd";

    return(
      
       <div>
        <Navbar />
         <h1 style={{backgroundColor:"orange", textAlign:"center", color:"white",}}>This is homepage</h1>
         <br />
          <h2 className="home-header">I am not Devloper</h2>

        <Link to={'/About-us'}>Aboutus</Link>
        <br/>

        <StudentCard name={name} id={id} dept={dept} sems={sems} shift={shift}/>

       </div>
    )

}

export default Home;