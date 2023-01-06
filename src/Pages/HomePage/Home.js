import React, { useState } from 'react'

import "./Home.css"

const Home = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [search, setSearch] = useState("")

    const weatherDetailsHandler = async (search) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=665b605ffa19ea4e8602e2ea298168c3`)
        const data = await response.json()
        setWeatherData(data)
    }

    const inputSearchHandler = (e) => {
        setSearch(e.target.value)
    }

    const searchHandle = () => {
        weatherDetailsHandler(search)
    }

    return (
        <>
            <div className='HomePage-Container'>
                <div className='Navbar'>
                    <div className='Navbar-LeftContent'>
                        <h1>Forecast</h1>
                    </div>
                    <div className='Navbar-RightContent'>
                        <input type="text" className='Navbar-Input' placeholder='Search..' onChange={inputSearchHandler} />
                        <button className='Search-Button' type='button' onClick={searchHandle}>Search</button>
                    </div>
                </div>
                {!weatherData ? (
                    <p className='para'>Search your desired weather</p>) : (
                    <>
                        <div className='HomePage-SubContainer'>
                            <div className='Temp-Card'>
                                <div className='CityName'>
                                    <h2>{weatherData.name.toUpperCase()}</h2>
                                </div>
                                <div className='Temp'>
                                    <h1>{((weatherData.main.temp) - 273.15).toFixed(2)}°C</h1>
                                </div>
                                <div className='other-Information'>
                                    <div className='feels-like'>
                                        <p>temp_min {weatherData.main.temp_min}</p>
                                    </div>
                                    <div className='Wind-Speed'>
                                        <p>temp_max {weatherData.main.temp_max}</p>
                                    </div>
                                    <div className='Visibility'>
                                        <p>grnd_level {weatherData.main.grnd_level}</p>
                                    </div>
                                </div>
                                <div className='other-Information'>
                                    <div className='feels-like'>
                                        <p>Feels Like {weatherData.main.feels_like}</p>
                                    </div>
                                    <div className='Wind-Speed'>
                                        <p>Humidity {weatherData.main.humidity}</p>
                                    </div>
                                    <div className='Visibility'>
                                        <p>Pressure {weatherData.main.pressure}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Home