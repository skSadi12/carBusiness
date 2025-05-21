import React from "react";
import fb from "/fb.png";
import inst from "/instagram.png";
import linkd from "/in.png";
import x from "/x.png";

function Ai() {
  return (
    <section className="max-w-[1400px] my-20  mx-auto">
      <div className="flex justify-center md:text-start text-center  p-5 gap-10 lg:justify-between items-center flex-wrap ">
        <div>
          <h1 className="text-[40px] font-bold">Ai GoverningDocs</h1>
        </div>
        <div className="flex gap-6 flex-wrap">
          <button className="hover:text-blue-500 ">Problem & Solution</button>
          <button className="hover:text-blue-500 ">Industries We Serve</button>
          <button className="hover:text-blue-500 ">How It Works</button>
          <button className="hover:text-blue-500 ">Testimonials</button>
          <button className="hover:text-blue-500 ">FAQs</button>
        </div>
        <div className="flex gap-3">
          <img src={fb} alt="" />
          <img src={inst} alt="" />
          <img src={linkd} alt="" />
          <img src={x} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Ai;
