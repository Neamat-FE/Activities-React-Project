import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Herosection/Hero';
import Namesearch from '../Components/Namesearch/Namesearch';
import Popular from '../Components/Popular/Popular';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';




const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Namesearch />
            <Popular />
            <Categories />
            <Footer />
        </div>
    )
}

export default Homepage