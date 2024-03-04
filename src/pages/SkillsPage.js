import React from "react";
import Nav1 from "../components/Navbar2";
import SkillCard from "../components/SkillCard";
const SkillsPage=()=>{
    return(
        <div>
            <Nav1></Nav1>

         <div className="mt-8 flex items-center justify-center font-bold text-xl">Approved Skills</div>   
           
            <div className="mt-9 w-full flex flex-col items-center justify-center px-8">
      
      <SkillCard 
      skill={"HTML5"} 
      percentage={"95%"} 
      color={"#FF3F3F"} 
      move={true}/>
      <SkillCard skill={"CSS 3"} percentage={"80%"} color={"#008FFF"}/>
      <SkillCard skill={"Javascript"} percentage={"60%"} color={"#FFB900"} move={true}/>
      <SkillCard skill={"ReactJs"} percentage={"50%"} color={"#00FFF3"}/>
      <SkillCard skill={"NodeJs"} percentage={"30%"} color={"#14DB00"} move={true}/>
    </div>

    <div className="mt-8 flex items-center justify-center font-bold text-xl"> Unapproved SKills</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
    <div className="mt-9 w-full flex flex-col items-center justify-center px-8">
    <SkillCard skill={"C++"} percentage={"0%"} color={"#008FFF"}/>
    <SkillCard skill={"Java"} percentage={"0%"} color={"#008FFF"}/>


    </div>
    <div className="mt-9 w-full flex flex-col items-start justify-center px-8 gap-12">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Take test</button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Take test</button>
    </div>
        </div>
        </div>
        
    );
}
export default SkillsPage;