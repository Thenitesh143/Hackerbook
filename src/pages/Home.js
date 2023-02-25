import React, { useEffect,useRef } from 'react'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import banner from '../assets/Banner.jpeg'
import { Button } from '@mui/material'
import one from '../assets/img1.jpeg'
import two from '../assets/img2.jpeg'
const Home = () => {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   imgRef.current.classList.add('zoomed');
  //   setTimeout(() => {
  //     imgRef.current.classList.remove('zoomed');
  //   }, 500);
  // }, []);

  return (
    <div>
        <TopBar/>
       <Navbar/>
       <div>
    
       <div className="banner">
      <img src={banner} alt="" className='zoom-out' ref={imgRef} />
    </div>
    <div className="BannerHeadings">
    <p className='bannerHead'>#Changers aren't born</p>
    <p className="BannerHead2">They Are Made At <br></br>HackerBook</p>
    </div>
    </div>
    <div className="trainin main2 ">
      <div className="textPart">
        <h6>#ABOUT US</h6>
        <h5>Yodha Global Training Center <br/>Welcomes You To The World Of Skillful<br/> Learning</h5>
        <p>Yodha Global Training Center is one of the professional training institutes delivering truly unparalleled learning and training experiences to students.</p>
                <Button
                  variant="contained"
                  sx={{
                    background: "#fd4a18",
                    padding: "15px 40px",
                    fontFamily: "Jost",
                  }}
                >
                 Read More
                </Button>
      </div>
      <div className="imgPart ">
        <img src={one} alt="" className='one' />
        <img src={two} alt="" className='two' />
      </div>
    </div>
   
    </div>
  )
}

export default Home