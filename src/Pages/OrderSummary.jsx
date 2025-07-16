import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import PaymentSection from '../Components/PaymentSection/PaymentSection'

const OrderSummary = () => {
    return (
        <div>
            <Navbar />
            <PaymentSection />
            <Footer />
        </div>
    )
}

export default OrderSummary