import React from 'react'

import Footer from 'components/footer/Footer.tsx'
import Nav from 'components/nav/MainPageNavigation.tsx'

import './About.scss'

function About () {
  return (
        <div className="about">
            <div className='about__wrap'>
                <Nav />
                <div className='about__content'>
                    <div className='about__content-wrap'>
                        <h2 className='aboout__title'><span className="promo__title-blue">job-finder.com</span> – best way to find an employer or an employee.</h2>
                        <p className='about__paragraph'>Powered by industry-leading digital technology & a data-driven approach, we help employers across industries find the best talent & job seekers, the perfect jobs with which they can fall in love.

                            Looking to hire qualified, remote workers for your current openings? With job-finder, your ideal candidates are just a click away!

                            Post-pandemic due to uncertain budgets, mitigating waste, & doing more with less is on top of mind, as the world gets back to work. In the complex global job market, it’s getting harder to find suitable candidates to meet the hiring needs. Work from anywhere culture has brought diverse challenges for the recruitment teams, who have to expand their reach to hire from a wider pool of candidates, which means more resumes to sift through to select quality applicants quickly. Competition for recruiting the best talent is getting fierce, & traditional job advertising is falling short.

                            Herein, data & technology can be a catalyst for transformation. Leveraging cutting-edge digital technology is critical for navigating prevailing challenges & gaining a competitive edge in the current battle for high-quality talent.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default About
