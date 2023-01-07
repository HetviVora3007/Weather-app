import React from 'react'

import './Home.css'
import HomePageImage from '../../Assets/6012764.jpg'
const Home = () => {
    return (
        <>
            <div className='HomePage-MainContainer'>
                <div className='HomePage-WeatherContainer'>
                    <div className='Main-Contain'>
                        <p>Find your weather predictions in your City</p>
                    </div>
                    <div className='Sub-Contain'>
                        <p>Easy step to predict the weather and make your day easier</p>
                    </div>
                    <div className='Container-Button'>
                        <button>Get Start</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home