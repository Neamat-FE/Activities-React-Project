import React from 'react'
import EventDetails from '../Components/EventDetails/EventDetails'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import TicketSelection from '../Components/TicketSelection/TicketSelection'


const Ticketpage = () => {
    return (
        <div>
            <Navbar />
            <TicketSelection />
            <Footer />
        </div>
    )
}

export default Ticketpage