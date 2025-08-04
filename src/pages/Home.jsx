import React from 'react'
import Upcoming from '../Components/Upcoming'
import Slider from '../Components/Slider'

function Home() {
  return (
    <div>
      <Upcoming/>
      <Slider type="movie"/>
      <Slider type="tv"/>
    </div>
  )
}

export default Home