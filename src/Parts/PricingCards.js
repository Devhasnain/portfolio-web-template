import React from 'react';
import Img1 from '../media/free.svg';
import Img2 from '../media/basic.svg';
import Img3 from '../media/complex.svg';
import { Button, Heading } from '@chakra-ui/react';

const Cards=[
    {
        img:Img1,
        title:"Free",
        packages:["Package one","package two", "package three","package three","package three"],
        prices:"$0.00/month"
    },
    {
        img:Img2,
        title:"Basic",
        packages:["Package one","package two", "package three","package three","package three"],
        prices:"$0.00/month"
    },
    {
        img:Img3,
        title:"Complex",
        packages:["Package one","package two", "package three","package three","package three"],
        prices:"$0.00/month"
    }
]

const PricingCards = () => {
  return (
    <>
    {Cards.map((item,index)=>{
        return (
            <div className='col-lg-4 col-md-4 col-sm-6 col-10 mx-auto my-3' key={index}>
                <div className='border text-center'>
                    <div className='text-center p-2 my-2'>
                        <img className='project-cards-img' src={item.img}  alt=""/>
                    </div>
                    <div className='my-3 p-2'>
                        <Heading as="h2" size="xl" color="#695aa6">{item.title}</Heading>
                    </div>
                    <div className=''>
                        {item.packages.map((item,index)=>{
                            return (
                                <p className='text-muted text-center my-2' key={index}>{item}</p>
                            )
                        })}
                    </div>
                    <div className='my-3 p-2'>
                        <Heading as="h2" size="md" fontFamily="sans-serif" color="black" >{item.prices}</Heading>
                    </div>
                    <div className='my-3 p-2'>
                        <Button borderRadius="0px" colorScheme="purple" size="sm" >Subscribe</Button>
                    </div>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default PricingCards