import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Aboutus=()=>{
    return(
       <div>
        <Navbar />
         <h2>this is aboutpage</h2>
         <Link to={'/'}>Home</Link>
       </div>
    )
}

export default Aboutus;