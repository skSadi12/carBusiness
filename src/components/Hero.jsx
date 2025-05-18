import React from "react";
import Navbarx from "./sheard/Navbar";
import Buttonx from "./reUse/Buttonx"
import herobg from "/hero-side.svg"
function Hero() {
  return (
    <main className='bg-[url("/hero-bg.svg")] bg-no-repeat bg-top min-h-svh'>
      <Navbarx />
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center items-center max-w-[1400px] px-5 mx-auto mt-24">
        <div className="md:space-y-9 space-y-3 lg:w-2/3   w-full">
          <h2 className="lg:text-[60px] md:text-[40px] text-[25px] font-bold">Simplify your real estate document analysis</h2>
          <p className="lg:text-[20px] md:text-[18px] text-[14px]">
            Streamline, Automate, and Secure Your Business Documents with Ai
            GoverningDocs
          </p>
          <Buttonx>Get Started Today</Buttonx>
        </div>
        <div >
            <img src={herobg} className="" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
