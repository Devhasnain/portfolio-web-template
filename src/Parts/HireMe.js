import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const HireMe = () => {
  return (
    <div className='container-fluid hire-me-parent'>
        <div className='container-lg'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm col-10 mx-auto text-center my-3'>
                    <Heading className='my-2' as="h2" size="md" fontWeight="semibold" color="white">Want to work with me?</Heading>
                    <Text fontStyle="18px" color="white">Always feel free to Contack me</Text>
                </div>
                <div className='col-lg-6 col-md-6 col-sm col-10 mx-auto text-center mb-2'>
                    <Button colorScheme="whiteAlpha" size="lg" >Hire Me</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HireMe