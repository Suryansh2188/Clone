import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './Assets/img1.jpg'
import './StartPage1.css'

function StartPage1() {
    return (
        <>
            <div className="container-fluid bg-body-secondary">
                <div class="container text-center">
                    <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-3">
                        <div class="col mb-5">
                            <div class="p-0">
                                <Link to="/sign_in"><p className='text text-end'>Skip</p></Link>
                                <img src={img1} className='img-fluid rounded-3'  alt />
                            </div>
                        </div>
                        <div class="col d-flex align-items-center">
                            <div class="p-3">
                                <h3 className='text text-start'>Track Your Goal</h3>
                                <p className='text text-start'>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
                                <div className=' d-flex justify-content-end'>
                                    <div className='btn-rounded d-flex align-items-center justify-content-center'>
                                        <Link to="/start_page2">
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

export default StartPage1