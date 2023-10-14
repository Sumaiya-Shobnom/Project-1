import React from "react";
import Navbar from "../layout/Navbar";

const StudentCard=(props)=>{
    return(
        
        <div style={{backgroundColor:"green", height:"400px", width:"300px", justifyContent:"center", padding:"20px", color:"white", border:"4px solid black"}}>
            <h2 style={{fontSize:"30px"}}>Student information</h2>
            <p>{props.name}</p>
            <p>{props.id}</p>
            <p>{props.dept}</p>
            <p>{props.sems}</p>
            <p>{props.shift}</p>
        </div>
    )
}

export default StudentCard;