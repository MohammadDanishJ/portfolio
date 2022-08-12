import React from 'react'
import './styles.css'
import {BsFillChatFill} from 'react-icons/bs'
const ContactSection = () => {
  return (
    <section id="contact" className="main prel fl fl-c">
        <div className="container lhinit fl fl-c fl-d-cl">
            <div className='fl fl-c'>
                <div className='circle'></div>
                <div className='text-center'>AVAILABLE FOR FREELANCE PROJECTS</div>
            </div>
            <div className="header">
              <div className="header-title text-center" style={{fontWeight:700}}>Do you have a project?<br/> Let's talk.</div>
            </div>
            <div>
              <a className='button' href="mailto:conatct.mdtechs@gmail.com?subject=Want to Hire. Source: Portfolio&body=Hey Mohd Danish, I reached you from your Portfolio."><BsFillChatFill size={16} style={{marginRight:6}}/> Lets Talk Now</a>
            </div>
        </div>
    </section>
  )
}

export default ContactSection