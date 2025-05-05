import React from 'react'
import iphone from "../../assets/images/iphone.png"
const Hero = () => {

  return (
    <>
<div className=" container duo_div flex gap-20 items-center mx-auto ">

<div className="one_div1">
<h1 className='text-7xl p-3 mt-20'>Mobile <br /> <span className='text-red-700  '>Backcover <br />Tempered Glass</span></h1>
<br />
<button class="rounded-lg p-2 bg-red-500 ml-5  hover:bg-transparent border border-red-600 duration-500"> Shop all !</button>
</div>

<div className="two_div1 ml-64">
  <img  src={iphone} alt="" />
</div>
</div>
    </>
  )
}

export default Hero