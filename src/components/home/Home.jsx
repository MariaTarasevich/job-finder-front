import React from 'react'
import Footer from '../footer/Footer';
import Promo from '../promo/Promo'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Promo />
            <Footer />
        </div>
    )
}

export default Home;