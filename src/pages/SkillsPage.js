import React from "react";
import Nav from "../components/Navbar";
const SkillsPage=()=>{
    return(
        <div>
            <Nav></Nav>
            <div>
                <h1  style={{fontSize:"40px", fontWeight:"bold",display:"flex", justifyContent:"center" }}>Skills</h1>
                <br></br>
                <div>
                <h2 style={{fontSize:"30px", fontWeight:"bold",display:"flex", justifyContent:"center" }}>Approved Skills</h2>
                <br></br>
                <div style={{display:"flex",fontSize:"30px", gap:"8px", marginLeft:"30%", fontWeight:"bold"}}>
                    <div>REACT</div>
                    <div>90%</div>
                </div>
                <div style={{display:"flex",fontSize:"30px", gap:"8px", marginLeft:"30%", fontWeight:"bold"}}>
                    <div>EXPRESS</div>
                    <div>70%</div>
                </div>
                </div>

                <h2 style={{fontSize:"30px", fontWeight:"bold",display:"flex", justifyContent:"center" }}>Unapproved Skills</h2>
                <div style={{display:"flex",fontSize:"30px", gap:"8px", marginLeft:"30%", fontWeight:"bold"}}>
                    <div>MACHINE LEARNING</div>
                    <button >Take Test </button>
                </div>
                <div style={{display:"flex",fontSize:"30px", gap:"8px", marginLeft:"30%", fontWeight:"bold"}}>
                    <div>EXPRESS</div>
                    <div>70%</div>
                </div>

            </div>
        </div>
    );
}
export default SkillsPage;