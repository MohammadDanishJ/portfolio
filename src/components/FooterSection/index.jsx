import React from 'react'
import './FooterSection.styles.css'
import {BsGithub} from 'react-icons/bs'
const FooterSection = () => {
  console.log('j')
  return (
    <section id="Footer" className="main prel fl fl-c">
        <div className="container lhinit fl fl-c fl-d-cl">
            <div className='fl fl-c fl-d-cl'>
                <div className='p12 text-center'>Designed and Developed by <strong>Mohammad Danish</strong></div>
                <a href='https://github.com/MohammadDanishJ' className='fl'> <BsGithub size={16} style={{marginRight:6}}/> <span style={{color: '#6868ff'}}>MohammadDanishJ</span></a>
            </div>
        </div>
    </section>
  )
}

export default FooterSection