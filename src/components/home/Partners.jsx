import React from "react";
import Gradient from "../reUse/Gradient";
import partner1 from "/partners-1.png"
import partner2 from "/partners-2.png"
import partner3 from "/partners-3.png"
import partner4 from "/partners-4.png"
import partner5 from "/partners-5.png"
import partner6 from "/partners-6.png"

function Partners() {
  return (
    <section className="max-w-[1400px] mt-20 mb-10  mx-auto p-10 bg-[#E6F9FD] rounded-4xl ">
      <h2 className="text-[46px] text-center font-bold ">
        Our <Gradient>Partners</Gradient>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner1} alt="" className="w-full " />
        </div>
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner2} alt="" className="w-full " />
        </div>
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner3} alt="" className="w-full " />
        </div>
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner4} alt="" className="w-full " />
        </div>
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner5} alt="" className="w-full " />
        </div>
        <div className="min-w-[300px] bg-white p-10  rounded-2xl min-h-[100px] "> 
            <img src={partner6} alt="" className="w-full " />
        </div>
        
      </div>
    </section>
  );
}

export default Partners;
