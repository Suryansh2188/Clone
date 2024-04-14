import React from 'react'
import { Link } from 'react-router-dom'
import img2 from './Assets/img2.jpg'
import './StartPage1.css'

function StartPage2() {
  return (
    <>
    <div className="container-fluid bg-body-secondary d-flex align-items-center justify-content-center">
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-lg-2 g-5 g-lg-3">
                <div class="col mb-5">
                    <div class="p-0">
                        <img src={img2} className='img-fluid rounded-3'  alt />
                    </div>
                </div>
                <div class="col d-flex align-items-center">
                    <div class="p-0">
                        <h3 className='text text-start'>Get Burn</h3>
                        <p className='text text-start'>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
                        <div className=' d-flex justify-content-end'>
                            <div className='btn-rounded d-flex align-items-center justify-content-center'>
                                <Link to="/sign_in">
                                    <i class="fa-solid fa-chevron-right fa-2xl" style={{ color: "#fdfcf7", }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</>
  )
}

export default StartPage2