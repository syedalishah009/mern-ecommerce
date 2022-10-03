import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Top from '../top/Top'
const Header = () => {
  return (
    <>
    <div class="header">
    <div class="container">
       

        <div class="row">
            <div class="col-2">
                <h1>Give Your Workout<br/>A New Style!</h1>
                <p>Success isn't always about greatness. It's about consistency
                    . Consitent<br/>hard work gains success Greatness will come.
                </p>
                <a href="" class="btn">Explore Now &#x2192;</a>
            </div>  
            <div class="col-2">
                <img src="images/back.png" alt="mainimg"/>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Header