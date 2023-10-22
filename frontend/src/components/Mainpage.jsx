import React from 'react'
import catimage from '../assets/catimage.png'
import Card from './Card'

function Mainpage() {
  return (
    <div className='mpBG'>
      <h1 className='categories'>Browse Categories</h1>
      <p>In this section you will find all the categories dedicated to the products of Team and individual athletes, which can be purchased directly on the site.</p>

      <div className='cardsContainer'>
        <Card image={catimage} />
        <Card image={catimage} />
        <Card image={catimage} />
        <Card image={catimage} />
        <Card image={catimage} />
        <Card image={catimage} />
        <Card image={catimage} />
      </div>
      <div className='footer'>
        <div className='footercontent'>
          <h3>JerseyFusion</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni, dolor id eaque aliquid vel.</p>

        </div>
        <div className='footercontent'>
          <br />
          <br />
          <h1>Copyright @Faisal Murad</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni, dolor id eaque aliquid vel.</p>

        </div>
      </div>
    </div>
  )
}

export default Mainpage