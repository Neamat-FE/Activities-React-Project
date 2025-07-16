import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Popular from '../Components/Popular/Popular'
import EventDetails from '../Components/EventDetails/EventDetails'

const BookingPage = () => {
    return (
        <div>
            <Navbar />
            <EventDetails />
            <Popular />
            <Footer />
        </div>
    )
}

export default BookingPage