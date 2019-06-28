import React from 'react'
import './Banner.scss'
import Banner from '../../assets/landing.jpg'
const banner = () => {
    return (
        <div className='Banner_Image'>
            <img src={Banner} alt=""/>
            <h1>Find the Book <br/> You have Been <br/>Searching <br/>For</h1>
            
            <div></div>
        </div>
    )
}

export default banner
