import React from 'react'
import './schedule.css'
import Menu from './Menu'

function Schedule() {
    return (
        <>
            <div className='container-fluid d-flex justify-content-between'>
                <div className='container d-flex flex-column justify-content-center'>
                    <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                        <h3>Workout Schedule</h3>
                        <p>&lsaquo; Feb2024 &rsaquo;</p>
                        <div className=' container d-flex justify-content-between align-items-center overflow-x-auto'>
                            <div class="card">
                                <div class="card-body text-center">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Sun</h6>
                                    <h5 class="card-title">8</h5>
                                </div>
                            </div>
                            <div class="card bg-info">
                                <div class="card-body text-center ">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Mon</h6>
                                    <h5 class="card-title">9</h5>
                                </div>
                            </div>
                            <div class="card ">
                                <div class="card-body text-center">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Tue</h6>
                                    <h5 class="card-title">10</h5>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-body text-center">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Wed</h6>
                                    <h5 class="card-title">11</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container bg-body-secondary '>
                        
                        <div>
                            06:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            07:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            08:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            09:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            10:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            11:00 AM
                            <hr></hr>
                        </div>
                        <div>
                            12:00 PM
                            <hr></hr>
                        </div>
                        <div>
                            13:00 PM
                            <hr></hr>
                        </div>
                    </div>
                    <Menu />
                </div>
                <div className="fixed-button">
                    <button className="btn btn-light"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </>
    )
}
export default Schedule