import React from 'react'
import './Hero.css'
import arrow from '../Assets/arrowicon.png'
import handicon from '../Assets/handicon.jpeg'
import heroimage from '../Assets/hero1image.webp'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>fresh</p>
                        <img src={handicon} alt="" />
                    </div>
                    <p>Collections</p>
                    <p>for all</p>

                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow} alt="" width="30px" height="30px" />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroimage} alt=""/>
            </div>
        </div>
    )
}

export default Hero
