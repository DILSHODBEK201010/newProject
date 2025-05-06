import React from 'react'
import car from "../../assets/images/car.png"
import medal from "../../assets/images/medal.png"
import money from "../../assets/images/money.png"
const Choose = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <center>     <div className="qizil w-8 h-24 bg-red-600 rounded-xl"> <br /></div> Why Choose US </center>
      <br />

<div className="choase_card_one flex mt-24 p-10 gap-x-32 items-center justify-center">

  <div className="c1 text-center">
<img className='text-center ml-28 ' src={car} alt="" />
<br />
<h1 className='font-bold'>Fast Delivery</h1>
<br />
<div className="">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</div>

  </div>



  <div className="c1 text-center">
<img className='text-center ml-28 ' src={money} alt="" />
<br />
<h1 className='font-bold'>Fast Delivery</h1>
<br />
<div className="">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</div>

  </div>

  <div className="c1 text-center">
<img className='text-center ml-28 ' src={medal} alt="" />
<br />
<h1 className='font-bold'>Fast Delivery</h1>
<br />
<div className="">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</div>

  </div>














  
</div>
      
    </div>
  )
}

export default Choose