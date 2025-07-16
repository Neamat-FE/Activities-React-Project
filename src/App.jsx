import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Ticketpage from './Pages/Ticketpage';
import BookingPage from './Pages/BookingPage';
import PaymentPage from './Pages/PaymentPage';




const App = () => {
  return (
    <div className='body-bg'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/ticketpage" element={<Ticketpage />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App