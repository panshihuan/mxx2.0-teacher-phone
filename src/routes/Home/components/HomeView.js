import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>主页</h4>
    <div className="bgImg">
    </div> 
    <p className="icon-cross"></p>  
    <img className='duck' src={DuckImage} />
  </div>
)

export default HomeView
