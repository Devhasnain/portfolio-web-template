import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
    const [smallScreen]=useMediaQuery("(max-width:576px)");
  return (
    <div className='container-fluid pt-5'>
        <div className='container-lg'>
            <div className='row footer-row my-3 align-items-center'>
                {smallScreen?"":<div className='col-lg col-md-4 col-4'>
                    <p>fajkfkadhf ajdf ad</p>
                </div>}
                <div className='col-lg col-md-8 col'>
                    <ul className={`nav ${smallScreen?'justify-content-center':'justify-content-end'}`}>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiFacebook size={22}/></div></li>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiInstagram size={22}/></div></li>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiGithub size={22}/></div></li>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiLinkedin size={22}/></div></li>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiTwitter size={22}/></div></li>
                        <li className='mx-1 nav-item'><div className='footer-links'><FiYoutube size={22}/></div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer