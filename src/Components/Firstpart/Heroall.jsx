import React from 'react'
import Food from './Food'
import Hero from './Hero'
import './Heroall.css'
import Nav from './Nav'

function Heroall() {
  return (
    <div>

        <div className='forback'>
        <Nav />
        <Hero />
        {/* 4th 5th*/}
        <Food />
        </div>
       

    </div>
  )
}

export default Heroall