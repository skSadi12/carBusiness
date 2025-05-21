import React from 'react'
import Button from '../reUse/Buttonx'

function Management() {
  return (
    <section className='px-5'>
        <div className='flex flex-col lg:flex-row justify-between items-center p-10  max-w-[1400px] gap-10  mx-auto bg-gradient-to-b from-[#00D2FF] to-[#059DBE] rounded-4xl' >
            <div className='lg:w-1/2 w-full'>
                <h2 className='lg:text-[40px] md:text-[30px] text-[25px] font-bold  text-white'>Ready to Simplify Your Document Management?</h2>
                <p className='text-white mt-10'>Sign up today and experience the power of AI-driven legal documentation.</p>
            </div>
            <div>
                <Button className={"bg-[#FFFFFF] text-black opacity-[100%] hover:bg-emerald-400 hover:text-white"}>
                    Get Started Now
                </Button>
            </div>
        </div>
      
    </section>
  )
}

export default Management
