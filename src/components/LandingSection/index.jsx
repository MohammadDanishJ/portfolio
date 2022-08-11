import React from 'react'
import {MdArrowBackIosNew} from 'react-icons/md'
import './LandingSection.styles.css'

const LandingSection = () => {
  return (
    <section id="home" class="main prel fl fl-c fl-d-cl h100vh">
    <div className="container lhinit fl fl-c fl-d-cl">
        <div className='fl text-center' style={{fontSize: 102, fontWeight:700}}>Mohammad Danish</div>
        <div className='fl text-center' style={{fontSize: 18, color:'#999', letterSpacing:2, paddingTop:10, fontFamily:'monospace'}}>Web Developer | Software Engineer | React Developer</div>
    </div>
    {/* <div className='fl fl-c fl-d-cl '> */}
      <div className='fl fl-c fl-d-cl w100' style={{fontSize: 24, color:'#666',transform: 'translateY(90px)'}}>
        <div className='fl fl-c fl-d-cl oscilate' >
        <div>Scroll Down</div>
          <MdArrowBackIosNew style={{transform: 'rotate(-90deg)'}} size={24}/>
          <MdArrowBackIosNew style={{transform: 'rotate(-90deg) translateX(14px)'}} size={24}/>
        </div>
      </div>
    {/* </div> */}
    </section>
  )
}

export default LandingSection