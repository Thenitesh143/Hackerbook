import React from 'react'
import twnetytwo from '../assets/22.png'
import logo from '../assets/logos.jpg'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, Icon } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <footer>
   {/* <img src={twnetytwo} alt="" style={{width:'100%'}}/> */}
   <div className="oo">
    <img src={logo} alt="" style={
{width:'40%',marginBottom:'20px'}
    }/>
    <div>
    <Button
            variant="contained"
            sx={{
              background: "#fd4a18",
              padding: "15px",
              fontFamily: "Jost",
              marginBottom:'20px'
            }}
          >
         Upload Resume
          </Button>
          </div>
    <div class="topbar__right">
      <a href='https://www.facebook.com/HackerBookBangalore'><p class='social-media-icon fb'><Icon sx={{ color: 'white',display:'flex',justifyContent:'center',alignItems:'center' }} ><FacebookIcon fontSize="small"/></Icon></p></a>
      <a href="https://www.instagram.com/hackerbook_technologies/"><p class='social-media-icon tweet' ><Icon sx={{ color: 'white',display:'flex',justifyContent:'center',alignItems:'center' }} ><TwitterIcon fontSize="small"/></Icon></p></a>
      <p class='social-media-icon linked'><Icon sx={{ color: 'white',display:'flex',justifyContent:'center',alignItems:'center' }} ><LinkedInIcon fontSize="small"/></Icon></p>
      <p class='social-media-icon insta'><Icon sx={{ color: 'white',display:'flex',justifyContent:'center',alignItems:'center' }} ><InstagramIcon fontSize="small"/></Icon></p>
    </div>
   </div>
   <div className="tw">
    <h4> Services
</h4>
<ul>
<Link to='/sales'><li><span>Vulnerablity Assesments</span></li></Link>
          <Link to="/corporal"><li >Web Application Penitration Testing</li></Link>
          <Link to="/online"><li><span>API Penitration Testing</span></li></Link>
          <Link to="/place"><li><span>Mobile Penitration Testing</span></li></Link>
          <Link to="/carrer"><li><span>Thick Client Penitration Training</span></li></Link>
          <Link to="/carrer"><li><span>DevSecOps</span></li></Link>
          <Link to="/carrer"><li><span>Vulnerablity Manangement</span></li></Link>
          <Link to="/carrer"><li><span>End Point Management</span></li></Link>
          <Link to="/carrer"><li><span>Functional Testing </span></li></Link>
          <Link to="/carrer"><li><span>Automation Testing</span></li></Link>
</ul>
   </div>
   <div className="tw">
    <h4>Training</h4>
    <ul>
    <Link to='/sales'><li><span>Cybersecurity - job Oriented Training</span></li></Link>
          <Link to="/corporal"><li><span>Cybersecurity - CEH from EC council</span></li></Link>
          <Link to="/online"><li><span>Cybersecurity - CEH + cloud security from EC-COUNCIl</span></li></Link>
          <Link to="/place"><li><span>Cybersecurity - Source Code Analyst</span></li></Link>
          <Link to="/carrer"><li><span>Thick Client Penitration Training</span></li></Link>
          <Link to="/carrer"><li><span>Cybersecurity Expert</span></li></Link>
          <Link to="/carrer"><li><span>SOC Analyst</span></li></Link>
          <Link to="/carrer"><li><span>Clous Security</span></li></Link>
          <Link to="/carrer"><li><span>Manual Testing </span></li></Link>
          <Link to="/carrer"><li><span>Selanium Automation </span></li></Link>
</ul>
   </div>
   <div className="tw">
    <h4>EC-Council</h4>
    <ul>
    <Link to='/sales'><li ><span>CEH</span></li></Link>
          <Link to="/corporal"><li ><span>CCSE</span></li></Link>
          <Link to="/online"><li ><span>CASE JAVA</span></li></Link>
</ul>
   </div>

    </footer>
    <div className="lowerFoot">
    <p>Copyright 2022 Yodha GTC. All Rights Reserved.
</p>
<div className="tou">
  <p>Carrer</p>
  <p>Terms Of Use</p>
  <p>Privacy Policy</p>
</div>
   </div>
   </div>
  )
}

export default Footer