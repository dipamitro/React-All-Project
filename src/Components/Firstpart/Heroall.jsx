import React from 'react'
import Food from './Food'
import Hero from './Hero'
import Hello from './Hello'
import './Heroall.css'
import Nav from './Nav'
import Tab from './Tab'

function Heroall() {
  return (
    <div>

        <div className='forback'>
        <Nav />
        <Tab/>
        <Hero />
        {/* 4th 5th*/}
        <Food />
       
        </div>
       

    </div>
  )
}

export default Heroall