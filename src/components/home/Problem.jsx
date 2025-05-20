import React from "react";
import Gradient from "../reUse/Gradient";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Problem() {
  const data = [
    {
      img: "ppp.png",
      title: "Problem",
      dis1: "Managing legal documents can be complex, time-consuming, and error-prone.",
      dis2: "Outdated methods and manual processes put your business at risk",
    },
    {
      img: "ss.png",
      title: "Solution",
      dis1: "Ai GoverningDocs offers a cutting-edge solution to manage, generate, and automate legal documents with ease.",
      dis2: "Our AI-driven platform ensures compliance, reduces errors, and saves time.",
    },
    {
      img: "kf.png",
      title: "Key Features",
      dis1: "Automatically generate legal documents tailored to your specific needs.",
    },
    {
      img: "cc.png",
      title: "Compliance Management",
      dis1: "Ensure all your documents meet the latest regulatory standards.",
    },
  ];
  return (
    <section className="max-w-[1400px] px-5 mx-auto pt-24 py-10">
      <div className="flex items-center gap-5 justify-between">
        <div>
          <h2 className="md:text-[46px] text-4xl font-bold">
            Problem & <Gradient>Solution</Gradient>
          </h2> 
        </div>
        <div className="flex gap-8 justify-center items-center">
          <div className="text-[#00D2FF] bg-white rounded-full  font-bold shadow-xl/20 hover:text-black p-2  ">
            <ArrowBackIosNewIcon />
          </div>
          <div className="text-white bg-gradient-to-b from-[#00D2FF] to-[#059DBE] rounded-full  font-bold shadow-xl/30 hover:text-black p-2 ">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      <div className="pt-16 flex flex-col gap-10 lg:flex-row justify-between items-center">
        {data.map((items, i) => (
          <div>
            <div key={i} className="space-y-4 shadow-xl rounded-lg p-5  lg:max-w-[300px] max-w-[500px] hover:bg-[#059DBE] shadow-blue-300 min-h-[350px]  hover:text-white ">
              <div className="p-1 bg-gradient-to-b from-[#00D2FF] to-[#059DBE] w-16 h-16 flex justify-center items-center rounded-full  ">
                <img src={items.img} alt={items.title} className="     " />
              </div>
              <h4 className="font-semibold text-[18px]">{items.title}</h4>
              <p>{items.dis1}</p>
              {items.dis2 && <p>{items.dis2}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problem;
