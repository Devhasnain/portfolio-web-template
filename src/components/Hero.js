import { Button, Heading } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <div className='container-fluid hero-bg' id='hero'>
        <div className='container-lg'>
            <div className='row hero-row'>
                <div className='col-lg-6 col-md-8 col-sm-10 col mx-auto'>
                    <div className='hero-headings'>
                    <Heading as="h1" color="#212529" fontFamily="'Mochiy Pop One', sans-serif" size="3xl">Hi!<br/><br/><span className=''>I am Hasnain</span></Heading><br/>
                    <p className='heading-p'>MERN STACK DEVELOPER</p><br/>
                    <Button colorScheme="#695aa4" size="lg" borderRadius="50px" bg="#695aa6">My Projects</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className='hero-overlay'></div>
    </div>
  )
}

export default Hero