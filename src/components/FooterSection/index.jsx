import React from 'react'
import './styles.css'
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
const FooterSection = () => {
  return (
    <section id="Footer" className="main prel fl fl-c">
        <div className="container lhinit fl fl-c fl-d-cl">
            <div className='fl fl-c fl-d-cl'>
                <div className='p12 text-center'>Designed and Developed by <strong>Mohammad Danish</strong></div>
                <div className='fl fl-c logo-container'>
                  <a target='_blank' rel='noreferrer' href='https://github.com/MohammadDanishJ' className='fl logo'>
                    <BsGithub size={24} style={{marginRight:6}}/>   
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://www.instagram.com/mohammaddanishj/' className='fl logo'>
                    <BsInstagram size={24} style={{marginRight:6}}/>
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mohammaddanishj/' className='fl logo'>
                    <BsLinkedin size={24} style={{marginRight:6}}/>
                  </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterSection