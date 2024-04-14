import React from 'react'
import './home.css'

function Menu() {
  return (
    <>
    <div className='menu container-md bg-white d-flex justify-content-around align-items-center position-static'>
        <div><i class="fa-solid fa-house fa-2xl"></i></div>
        <div><i class="fa-brands fa-facebook-messenger fa-2xl"></i></div>
        <div className='search d-flex justify-content-center align-items-center'><i class="fa-solid fa-magnifying-glass fa-2xl"></i></div>
        <div><i class="fa-solid fa-camera fa-2xl"></i></div>
        <div><i class="fa-solid fa-user fa-2xl"></i></div>
    </div>
    </>
  )
}

export default Menu