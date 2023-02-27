import React from 'react'
import './Banner.css'



const Banner = (prop) => {
    return (
        <div className="banner banner-img">
            <div className='banner-title'>{prop.info}</div>
            <p className='banner-details'>{prop.about}</p>
            <button className='btn'>Contact us Today</button>
        </div>
    )
}

export default Banner
