import React from 'react'
import { Features } from './Features';

export const Cards = ({cardData}) => {
    const {name, price, features} = cardData;
  return (
    <div>
        
        <div className='p-5 border-2 border-cyan-500 rounded-lg'>
            <h1 className='text-3xl'>{name}</h1>
            <p className='text-xl'>{price}</p>
            <div className='mt-4'>
                {
                    features.map((feature,index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
        </div>
    </div>
  )
}
