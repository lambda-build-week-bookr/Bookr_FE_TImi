import React from 'react'
import './Banner.scss'
import Banner from '../../assets/landing.jpg'
const banner = () => {
    return (
        <div className='Banner_Image'>
            <img src={Banner} alt=""/>
        </div>
    )
}

export default banner
