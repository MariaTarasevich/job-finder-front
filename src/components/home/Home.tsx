import React from 'react'
import Footer from '../footer/Footer.tsx';
import Promo from '../promo/Promo.tsx'
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