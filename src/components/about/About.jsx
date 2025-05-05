import React from 'react'
import img_gr from "../../assets/images/img_gr.png"
const About = () => {
  return (
    <div className='container mt-20'>
     <center>     <div className="qizil w-8 h-24 bg-red-600 rounded-xl"> <br /></div> 
     <br />about us
     <br />
     <br />
     <h1 className='text-red-600 text-4xl'>If you’re looking for a Premium Quality <br />
Tempered Glass or Back-cover for <br />
your Device </h1>

<br />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>




     </center>

<img className='mt-20 flex items-center justify-center ml-7' src={img_gr} alt="" />

     
    </div>
  )
}

export default About
