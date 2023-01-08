import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

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
                    <div className='Link-Container'>
                        <Link className='link' to={"/about"}>Get Start</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home