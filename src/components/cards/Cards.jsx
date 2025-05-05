import React from 'react'
import pixel from "../../assets/images/pixel.png"
import ip14 from "../../assets/images/ip14.png"
import ip13pro from "../../assets/images/ip13pro.png"
import samsung from "../../assets/images/samsung.png"


const Cards = () => {
  return (
    <div className='w-full h-auto p-5'>
      
<div className="ota_card mx-auto container flex overflow-auto items-center  justify-center mt-28 gap-16   ">


<div className="card1 ">

  <img src={ip13pro} alt="" />
  <p>iPhone 13 Pro - Transparent <br />LKR 499</p>
</div>
<div className="card2 ">
<img src={samsung} alt="" />
<p>Samsung S23+ - Transparent <br />LKR 799</p>
</div>
<div className="card3 ">
<img src={ip14} alt="" />
<p>iPhone 14 - Transparent with <br /> magsafe <br /> LKR 799</p>
</div>
<div className="card4 ">
<img src={pixel} alt="" />
<p>Pixel 7 Pro - Transparent <br /> Wireless <br />
LKR 599</p>
</div>



</div>

    </div>
  )
}

export default Cards