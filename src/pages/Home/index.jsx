import React from 'react'
import {Contact, FooterSection, LandingSection} from '../../components/Components'

const Home = () => {
  return (
    <main>
      {/* <!-- Under Construction --> */}
      <div className="pfx t0 pt-.5 pb-.5 pl-.5 pr-.5 p12"
        style={{ zIndex: 1, background: 'linear-gradient(45deg, rgba(0, 14, 42, 0.6), rgba(41, 0, 29, 0.6))', borderRadius:'0 0 20px 0', boxShadow: '0 0 20px rgb(56,56,56)', cursor: 'default'}}>We're
        Under Construction</div>
      {/* <!-- Under Construction --> */}

      {/* Previous version tag */}
      <a target='_blank' rel='noreferrer' href='https://portfolio-discarded.netlify.app' className="pfx t0 r0 pt-.5 pb-.5 pl-.5 pr-.5 p12"  style={{ zIndex: 1, background: 'linear-gradient(45deg, rgba(0, 14, 42, 0.6), rgba(41, 0, 29, 0.6))', borderRadius:'0 0 0 20px', boxShadow: '0 0 20px rgb(56,56,56)' }}>Click to visit previous version</a>
      {/* Previous version tag */}

      <LandingSection />
      <Contact/>
      <FooterSection/>
    </main>
  )
}

export default Home