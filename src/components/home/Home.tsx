import React from 'react'

import Footer from 'components/footer/Footer.tsx'
import Promo from 'components/promo/Promo.tsx'

import './Home.scss'

const Home: React.FC = () => {
  return (
        <div className='home'>
            <Promo />
            <Footer />
        </div>
  )
}

export default Home
