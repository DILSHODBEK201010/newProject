import React from 'react'
import one from "../../assets/images/one.png"
const Premium = () => {
  return (
    <div className='container'>
<div className="flex bg-gray-50 w-full gap-14 p-6">
  <div className="init">
  <h1 className='text-red-600 text-4xl'>Shop Premium <br />
      Tempered Glass in wholesale <br /> Price !</h1>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br /> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
<br />
LKR : 299
</p>

<button className='bg-red-600  text-white p-3 rounded-2xl '>Shop Tempered Glass </button>
  </div>


<div className="img">
  <img src={one} alt="" />
</div>

</div>
    </div>
  )
}

export default Premium