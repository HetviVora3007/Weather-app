import React from 'react'

import "./Home.css"
const Home = () => {
    return (
        <>
            <div className='HomePage-Container'>
                <div className='Navbar'>
                    <input type="text" className='Navbar-Input' />
                    <button className='Search-Button'>Search</button>
                </div>
            </div>
        </>
    )
}

export default Home