import React from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import './LandingSection.styles.css'

const LandingSection = () => {
  return (
    <section id="home" class="main prel fl fl-c fl-d-cl h100vh">
    <div className="container lhinit fl fl-c fl-d-cl">
        <div className='fl text-center' style={{fontSize: 102}}>Mohammad Danish</div>
        <div className='fl' style={{fontSize: 18, color:'#999', letterSpacing:2, paddingTop:10}}>Web Developer | Software Engineer | React Developer</div>
    </div>
    <div className='fl fl-c fl-d-cl oscilate p12' style={{fontSize: 16, color:'#999',}}>
        <div>Scroll Down</div>
        <MdArrowBackIosNew style={{transform: 'rotate(-90deg)'}} size={24}/>
    </div>
    </section>
  )
}

export default LandingSection