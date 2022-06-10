import React from 'react'
import Footer from '../footer/Footer.tsx';
import Promo from '../promo/Promo.tsx'
import './Home.css'

const Home: React.FC = () => {
    return (
        <div className='home'>
            <Promo />
            <Footer />
        </div>
    )
}

export default Home;