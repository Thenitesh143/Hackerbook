import React from 'react'
import Banner from '../components/SalesPage/Banner/Banner';
import Benefits from '../components/SalesPage/Benefits/Benefits';
import SiteDetails from '../components/SalesPage/siteDetails/SiteDetails';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter';
const Salesforce = () => {
    return (
        <div>
<Navbar/>
            <Banner
                info="Classroom Traning"
                about="Get the emerging skills of tomorrow with Yodha Global Training Institute" />
            <SiteDetails />
            <Benefits />
            <TopFooter/>
<Footer/>

           
        </div>
    )
}

export default Salesforce
