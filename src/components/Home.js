import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import workout from './Assets/workout.png'
import wc from './Assets/wc.png'
import yoga from './Assets/yoga.png'
import Menu from './Menu'
import Chart from './Chart'

function Home() {
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-between">
        <h2>Workout Tracker</h2>
        <div className='chart container mb-2'>
          <Chart />
        </div>

        <div class="alert alert-warning d-flex align-items-center container-md" role="alert">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div className='ms-2'>
          You've burned fewer calories than yesterday. Time to get moving!
          </div>
        </div>

        <div className='container-md'>
        <div className='container-md d-flex justify-content-between'>
          <h3>Upcoming Workout</h3>
          <Link to='/schedule'>see more</Link>
        </div>
          <div class="card mb-3">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center justify-content-center'>
                <div className='img d-flex justify-content-center'>
                  <img src={wc} width={'60px'}></img>
                </div>
                <div className='text-container ms-1'>
                Full Body Workout
                <p>Today 3pm</p>
                </div>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-between align-items-center">
              <div className='d-flex align-items-center justify-content-center'>
                <div className='img d-flex align-items-center justify-content-center'>
                <img src={yoga} width={'40px'}></img>
                </div>
                <div className='text-container ms-1'>
                Upper Body Workout
                <p>4 Feb, 3:30 pm</p>
                </div>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              </div>
            </div>
          </div>
        </div>

        <div className='container-md '>
          <h3>What Do You Want to Train</h3>
          <div className='color container-md d-flex justify-content-between align-items-center p-2  rounded-4'>
            <div>
              <h5 className='text'>Full Body Workout</h5>
              <p>Arms</p>
              <p>Chest</p>
            </div>
            <div className='img-circle'>
              <img src={ workout } width={'100px'} alt='' />
            </div>
          </div>
        <Menu />
        </div>
      </div>
    </>
  )
}

export default Home